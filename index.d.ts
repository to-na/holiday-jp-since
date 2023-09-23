export declare const HOLIDAY_TYPE: {
    FIXED: string;
    MOVING: string;
    FURIKAE_KYUJITU: string;
    KOKUMIN_NO_KYUJITSU: string;
  },
  as: any;
export declare type HolidayType = (typeof HOLIDAY_TYPE)[];
export declare type Holiday = {
  holidayType: HolidayType;
  name: string;
  month: number;
  day: number;
};
export declare type HolidayWithYear = Holiday;
export declare const getFixedHoliday: () => {
  holidayType: {
    FIXED: string;
    MOVING: string;
    FURIKAE_KYUJITU: string;
    KOKUMIN_NO_KYUJITSU: string;
  }[];
  name: string;
  month: number;
  day: number;
}[];
export declare const getMovingHoliday: (year: number) => {
  holidayType: {
    FIXED: string;
    MOVING: string;
    FURIKAE_KYUJITU: string;
    KOKUMIN_NO_KYUJITSU: string;
  }[];
  name: string;
  month: number;
  day: number;
}[];
export declare const getFurikaeKyujitu: (year: number) => {
  holidayType: {
    FIXED: string;
    MOVING: string;
    FURIKAE_KYUJITU: string;
    KOKUMIN_NO_KYUJITSU: string;
  }[];
  name: string;
  month: number;
  day: number;
}[];
export declare const getHolidaysOfYear: (year: number) => {
  holidayType: {
    FIXED: string;
    MOVING: string;
    FURIKAE_KYUJITU: string;
    KOKUMIN_NO_KYUJITSU: string;
  }[];
  name: string;
  month: number;
  day: number;
}[];
export declare const getHolidaysBetweenYears: (
  startYear: number,
  endYear: number
) => {
  holidayType: {
    FIXED: string;
    MOVING: string;
    FURIKAE_KYUJITU: string;
    KOKUMIN_NO_KYUJITSU: string;
  }[];
  name: string;
  month: number;
  day: number;
}[];
