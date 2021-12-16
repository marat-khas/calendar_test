import classNames from "classnames";
import { FC, useState } from "react";
import { CalendarEvent } from "../calendar-event/calendar-event";
import styles from "./styles.module.scss";
import { CalendarEventData } from "./types";

const initialEvents: CalendarEventData[] = [
  {
    id: "0",
    start: 7 * 60 + 30,
    end: 7 * 60 + 45,
    title: "Тестовое событие 1",
    position: -1,
    left: 0,
    width: 100,
  },
  {
    id: "1",
    start: 8 * 60 + 30,
    end: 9 * 60 + 45,
    title: "Тестовое событие 2",
    position: -1,
    left: 0,
    width: 100,
  },
  {
    id: "2",
    start: 7 * 60 + 30,
    end: 14 * 60,
    title: "Тестовое событие 3",
    position: -1,
    left: 0,
    width: 100,
  },
  {
    id: "3",
    start: 6 * 60 + 30,
    end: 9 * 60,
    title: "Тестовое событие 4",
    position: -1,
    left: 0,
    width: 100,
  },
  {
    id: "4",
    start: 8 * 60 + 30,
    end: 11 * 60,
    title: "Тестовое событие 5",
    position: -1,
    left: 0,
    width: 100,
  },
  {
    id: "5",
    start: 10 * 60 + 30,
    end: 11 * 60,
    title: "Тестовое событие 6",
    position: -1,
    left: 0,
    width: 100,
  },
];

export const CalendarDay: FC = () => {
  const STEP = 15;
  const TOTAL_HOURS = 24;

  const [events, setEvents] = useState<CalendarEventData[]>(initialEvents);
  const [resizeEventId, setResizeEventId] = useState<string | null>(null);
  
  const timeMatrix: CalendarEventData[][] = Array.from(
    { length: (TOTAL_HOURS * 60) / STEP },
    () => []
  );

  events.forEach((event) => {
    const { start, end } = event;
    for (let x = start; x < end; x += STEP) {
      timeMatrix[x / STEP].push(event);
    }
  });

  timeMatrix.forEach((line) => {
    if (!line.length) {
      return "Empty line";
    }

    const involvedIndexes = line.reduce((acc: number[], { position }) => {
      position > -1 && acc.push(position);
      return acc;
    }, []);

    const nextAvailableIndex = (() => {
      let curIndex = 0;
      return () => {
        while (involvedIndexes.includes(curIndex)) {
          curIndex++;
        }
        const res = curIndex;
        curIndex++;
        return res;
      };
    })();

    line
      .sort((a, b) => b.end - a.end)
      .forEach((event) => {
        if (event.position === -1) {
          const position = nextAvailableIndex();
          event.position = position;
        }
        event.width = Math.min(event.width, 100 / line.length);
      });
  });

  timeMatrix.forEach((line, index) => {
    if (!line.length) {
      return "Empty line";
    }

    line
      .sort((a, b) => a.position - b.position)
      .forEach((event, eventIndex, arr) => {
        if (event.start === index * STEP) {
          const prevEvent = arr[eventIndex - 1];
          if (prevEvent) {
            event.left = prevEvent.left + prevEvent.width;
          }
        }
      });
  });

  events
    .sort((a, b) => {
      if (a.start === b.start) {
        return b.end - a.end;
      }
      return a.start - b.start;
    })
    .forEach((event) => {
      let nearestRightBorder = 100;
      for (let i = event.start; i < event.end; i += STEP) {
        const line = timeMatrix[i / STEP].sort(
          (a, b) => a.position - b.position
        );
        const index = line.findIndex((e) => e.id === event.id);
        const nextEvent = line[index + 1];
        if (nextEvent) {
          nearestRightBorder = nearestRightBorder
            ? Math.min(nearestRightBorder, nextEvent.left)
            : nextEvent.left;
        }
      }
      event.width = nearestRightBorder - event.left;
    });

  const dayHours = Array.from({ length: TOTAL_HOURS }, (_, i) => i);

  return (
    <div
      className={classNames(styles.day, { [styles.day_resize]: resizeEventId })}
    >
      <div className={styles.day__hours}>
        {dayHours.map((value) => (
          <div key={value} className={styles.day__time}>{`${value}:00`}</div>
        ))}
      </div>
      <div className={styles.day__table}>
        {dayHours.map((value) => (
          <div key={value} className={styles.day__cell}></div>
        ))}
        {events.map((event) => {
          return (
            <CalendarEvent
              key={event.id}
              id={event.id}
              title={event.title}
              left={event.left}
              width={event.width}
              start={event.start}
              end={event.end}
              hours={TOTAL_HOURS}
              setEvents={setEvents}
              setResizeEventId={setResizeEventId}
              isResize={resizeEventId === event.id}
            />
          );
        })}
      </div>
    </div>
  );
};
