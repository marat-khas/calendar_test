import { Dispatch, SetStateAction } from "react";
import { CalendarEventData } from "../calendar-day/types";

export type CalendarEventProps = {
  id: string;
  title: string;
  left: number;
  width: number;
  start: number;
  end: number;
  hours: number;
  isResize: boolean;
  setEvents: Dispatch<SetStateAction<CalendarEventData[]>>;
  setResizeEventId: Dispatch<SetStateAction<string | null>>;
};
