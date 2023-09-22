// 国民の祝日に関する法律第2条で定められている「国民の祝日」
export const HOLIDAY_TYPE = {
  FIXED: "fixed",
  MOVING: "moving",
  FURIKAE_KYUJITU: "furikae-kyujitu",
  KOKUMIN_NO_KYUJITSU: "kokumin-no-kyujitsu",
} as const;

export type HolidayType = (typeof HOLIDAY_TYPE)[keyof typeof HOLIDAY_TYPE];

export type Holiday = {
  holidayType: HolidayType;
  name: string;
  month: number;
  day: number;
};

// 以下、2023/09/23 現在のデータ
// 年によらず固定の祝日
export const getFixedHoliday = (): Holiday[] => {
  const holidays = [
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "元日",
      month: 1,
      day: 1,
    },
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "建国記念日",
      month: 2,
      day: 11,
    },
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "天皇誕生日",
      month: 2,
      day: 23,
    },
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "昭和の日",
      month: 4,
      day: 29,
    },
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "憲法記念日",
      month: 5,
      day: 3,
    },
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "みどりの日",
      month: 5,
      day: 4,
    },
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "こどもの日",
      month: 5,
      day: 5,
    },
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "山の日",
      month: 8,
      day: 11,
    },
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "文化の日",
      month: 11,
      day: 3,
    },
    {
      holidayType: HOLIDAY_TYPE.FIXED,
      name: "勤労感謝の日",
      month: 11,
      day: 23,
    },
  ];

  return holidays;
};

// 年によって日付が変わる祝日
export const getMovingHoliday = (year: number): Holiday[] => {
  const holidays = [];

  // Calculate the dates of the moving holidays for the given year
  const seijinNoHi = getSeijinNoHi(year);
  const shunbunNoHi = getShunbunNoHi(year);
  const umiNoHi = getUmiNoHi(year);
  const keirouNoHi = getKeirouNoHi(year);
  const shuubunNoHi = getShuubunNoHi(year);
  const sportsNoHi = getSportsNoHi(year);

  // Add the moving holidays to the array
  holidays.push({
    holidayType: HOLIDAY_TYPE.MOVING,
    name: "成人の日",
    month: seijinNoHi.getMonth() + 1,
    day: seijinNoHi.getDate(),
  });
  holidays.push({
    holidayType: HOLIDAY_TYPE.MOVING,
    name: "春分の日",
    month: shunbunNoHi.month,
    day: shunbunNoHi.day,
  });
  holidays.push({
    holidayType: HOLIDAY_TYPE.MOVING,
    name: "海の日",
    month: umiNoHi.getMonth() + 1,
    day: umiNoHi.getDate(),
  });
  holidays.push({
    holidayType: HOLIDAY_TYPE.MOVING,
    name: "敬老の日",
    month: keirouNoHi.getMonth() + 1,
    day: keirouNoHi.getDate(),
  });
  holidays.push({
    holidayType: HOLIDAY_TYPE.MOVING,
    name: "秋分の日",
    month: shuubunNoHi.month,
    day: shuubunNoHi.day,
  });
  holidays.push({
    holidayType: HOLIDAY_TYPE.MOVING,
    name: "スポーツの日",
    month: sportsNoHi.getMonth() + 1,
    day: sportsNoHi.getDate(),
  });

  return holidays;
};

// 成人の日: 1月の第2月曜日
const getSeijinNoHi = (year: number): Date => {
  const date = new Date(year, 0, 1);
  const dayOfWeek = date.getDay();
  const firstMondayDate = 1 + ((1 + 7 - dayOfWeek) % 7);
  date.setDate(firstMondayDate + 7);
  return date;
};

// 海の日: 7月の第3月曜日
const getUmiNoHi = (year: number): Date => {
  const date = new Date(year, 6, 1);
  const dayOfWeek = date.getDay();
  const firstMondayDate = 1 + ((1 + 7 - dayOfWeek) % 7);
  date.setDate(firstMondayDate + 14);
  return date;
};

// 敬老の日: 9月の第3月曜日
const getKeirouNoHi = (year: number) => {
  const date = new Date(year, 8, 1);
  const dayOfWeek = date.getDay();
  const firstMondayDate = 1 + ((1 + 7 - dayOfWeek) % 7);
  date.setDate(firstMondayDate + 14);
  return date;
};

// スポーツの日: 10月の第2月曜日
const getSportsNoHi = (year: number) => {
  const date = new Date(year, 9, 1);
  const dayOfWeek = date.getDay();
  const firstMondayDate = 1 + ((1 + 7 - dayOfWeek) % 7);
  date.setDate(firstMondayDate + 7);
  return date;
};

// 天文学的に求められる祝日
// 春分の日
const getShunbunNoHi = (year: number) => {
  const day = Math.floor(
    20.8431 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4)
  );
  return {
    month: 3,
    day,
  };
};

// 秋分の日
const getShuubunNoHi = (year: number) => {
  const day = Math.floor(
    23.2488 + 0.242194 * (year - 1980) - Math.floor((year - 1980) / 4)
  );
  return {
    month: 9,
    day,
  };
};

// 振替休日
export const getFurikaeKyujitu = (year: number): Holiday[] => {
  const fixedHolidays = getFixedHoliday();
  const movingHolidays = getMovingHoliday(year);
  const holidays = fixedHolidays.concat(movingHolidays);
  // holidays が日曜日のとき、その翌日が振替休日
  let furikaeKyujitu = [];
  for (let i = 0; i < holidays.length; i++) {
    const holiday = holidays[i];
    const date = new Date(year, holiday.month - 1, holiday.day);
    if (date.getDay() === 0) {
      const nextDay = new Date(date);
      nextDay.setDate(date.getDate() + 1);
      furikaeKyujitu.push({
        holidayType: HOLIDAY_TYPE.FURIKAE_KYUJITU,
        name: "振替休日",
        month: nextDay.getMonth() + 1,
        day: nextDay.getDate(),
      });
    }
  }
  return furikaeKyujitu;
};

// TODO: 国民の休日（祝日と祝日の間の平日。祝日が増えたときなどに実装）

export const getHolidays = (year: number): Holiday[] => {
  const fixedHolidays = getFixedHoliday();
  const movingHolidays = getMovingHoliday(year);
  const furikaeKyujitu = getFurikaeKyujitu(year);
  const holidays = fixedHolidays.concat(movingHolidays).concat(furikaeKyujitu);
  // sort by month and day
  const sortedHolidays = holidays.sort((a, b) => {
    if (a.month < b.month) {
      return -1;
    }
    if (a.month > b.month) {
      return 1;
    }
    if (a.day < b.day) {
      return -1;
    }
    if (a.day > b.day) {
      return 1;
    }
    return 0;
  });
  return sortedHolidays;
};
