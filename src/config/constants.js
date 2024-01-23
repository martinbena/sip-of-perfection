import { addDays, addMonths, startOfHour } from "date-fns";

export const WEEK_OPENING_HOUR = 9;
export const WEEK_CLOSING_HOUR = 21;
export const WEEKEND_OPENING_HOUR = 8;
export const WEEKEND_CLOSING_HOUR = 23;

export const MIN_DATE = addDays(startOfHour(new Date()), 1);
export const MAX_DATE = addMonths(new Date(), 3);

export const CAPACITY = 60;

export const MENU_ITEMS_PER_PAGE = 10;
