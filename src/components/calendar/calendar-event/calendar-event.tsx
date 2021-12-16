import classNames from "classnames";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { CalendarEventProps } from "./types";

export const CalendarEvent: FC<CalendarEventProps> = ({
  id,
  title,
  left,
  width,
  start: initialStart,
  end: initialEnd,
  hours,
  isResize,
  setEvents,
  setResizeEventId,
}) => {
  const CELL_HEIGHT = 24;
  const CELL_TIME = 15;

  const eventRef = useRef<HTMLDivElement | null>(null);
  const resizeDirectionRef = useRef<"top" | "bottom">("bottom");

  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);

  const [top, setTop] = useState(start / (hours * 60));
  const [height, setHeight] = useState((end - start) / (hours * 60));

  const styleProps = {
    top: `${top * 100}%`,
    left: `${isResize ? 0 : left}%`,
    width: `${isResize ? 100 : width}%`,
    height: `${height * 100}%`,
  };

  const handleMouseDown = () => {
    setResizeEventId(id);
  };

  const handleBorderBottomMouseDown = () => {
    resizeDirectionRef.current = "bottom";
    handleMouseDown();
  };

  const handleBorderTopMouseDown = () => {
    resizeDirectionRef.current = "top";
    handleMouseDown();
  };

  const handleMouseUp = () => {
    if (isResize) {
      const defaultProps = {
        position: -1,
        left: 0,
        width: 100,
      };
      setEvents((state) => {
        return state.map((event) =>
          event.id === id
            ? { ...event, ...defaultProps, start, end }
            : { ...event, ...defaultProps }
        );
      });
      setResizeEventId(null);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResize) {
      const eventHeight = eventRef.current?.getBoundingClientRect().height;
      const eventTop = eventRef.current?.getBoundingClientRect().top;
      const cursorTop = e.clientY;
      if (eventHeight && eventTop !== undefined) {
        if (resizeDirectionRef.current === "bottom") {
          const transition = Math.ceil(
            (cursorTop - (eventTop + eventHeight)) / CELL_HEIGHT
          );
          const endNew = Math.max(
            start + CELL_TIME,
            end + transition * CELL_TIME
          );
          endNew !== end && setEnd(endNew);
        } else {
          const transition = Math.ceil((eventTop - cursorTop) / CELL_HEIGHT);
          const startNew = Math.min(
            end - CELL_TIME,
            start - transition * CELL_TIME
          );
          startNew !== start && setStart(startNew);
        }
      }
    }
  };

  const twoDigits = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const minToTime = (num: number) =>
    `${twoDigits(Math.floor(num / 60))}:${twoDigits(num % 60)}`;

  useEffect(() => {
    setTop(start / (hours * 60));
  }, [start, hours]);

  useEffect(() => {
    setHeight((end - start) / (hours * 60));
  }, [start, end, hours]);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResize, start, end]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isResize, start, end]);

  useEffect(() => {
    setEnd(initialEnd);
  }, [initialEnd]);

  return (
    <div
      className={classNames(styles.event, {
        [styles.event_active]: isResize,
      })}
      style={styleProps}
      ref={eventRef}
      draggable={!isResize}
      onDragStart={() => console.log("onDragStart")}
      onDragEnd={() => console.log("onDragEnd")}
    >
      <div className={styles.event__in}>
        <div className={styles.event__title}>{title}</div>
        <div className={styles.event__time}>{`${minToTime(start)} - ${minToTime(
          end
        )}`}</div>
        <div
          className={classNames(styles.event__border, styles.event__border_top)}
          onMouseDown={handleBorderTopMouseDown}
        />
        <div
          className={classNames(
            styles.event__border,
            styles.event__border_bottom
          )}
          onMouseDown={handleBorderBottomMouseDown}
        />
      </div>
    </div>
  );
};
