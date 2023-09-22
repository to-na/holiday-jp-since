import { expect, test } from "bun:test";
import { getHolidays } from "./kokumin-no-shukujitsu";
// from https://holidays-jp.github.io/api/v1/date.json
const holidays2022 = {
  "2022-01-01": "元日",
  "2022-01-10": "成人の日",
  "2022-02-11": "建国記念の日",
  "2022-02-23": "天皇誕生日",
  "2022-03-21": "春分の日",
  "2022-04-29": "昭和の日",
  "2022-05-03": "憲法記念日",
  "2022-05-04": "みどりの日",
  "2022-05-05": "こどもの日",
  "2022-07-18": "海の日",
  "2022-08-11": "山の日",
  "2022-09-19": "敬老の日",
  "2022-09-23": "秋分の日",
  "2022-10-10": "スポーツの日",
  "2022-11-03": "文化の日",
  "2022-11-23": "勤労感謝の日",
};

const holidays2023 = {
  "2023-01-01": "元日",
  "2023-01-02": "振替休日",
  "2023-01-09": "成人の日",
  "2023-02-11": "建国記念の日",
  "2023-02-23": "天皇誕生日",
  "2023-03-21": "春分の日",
  "2023-04-29": "昭和の日",
  "2023-05-03": "憲法記念日",
  "2023-05-04": "みどりの日",
  "2023-05-05": "こどもの日",
  "2023-07-17": "海の日",
  "2023-08-11": "山の日",
  "2023-09-18": "敬老の日",
  "2023-09-23": "秋分の日",
  "2023-10-09": "スポーツの日",
  "2023-11-03": "文化の日",
  "2023-11-23": "勤労感謝の日",
};

const holidays2024 = {
  "2024-01-01": "元日",
  "2024-01-08": "成人の日",
  "2024-02-11": "建国記念の日",
  "2024-02-12": "振替休日",
  "2024-02-23": "天皇誕生日",
  "2024-03-20": "春分の日",
  "2024-04-29": "昭和の日",
  "2024-05-03": "憲法記念日",
  "2024-05-04": "みどりの日",
  "2024-05-05": "こどもの日",
  "2024-05-06": "振替休日",
  "2024-07-15": "海の日",
  "2024-08-11": "山の日",
  "2024-08-12": "振替休日",
  "2024-09-16": "敬老の日",
  "2024-09-22": "秋分の日",
  "2024-09-23": "振替休日",
  "2024-10-14": "スポーツの日",
  "2024-11-03": "文化の日",
  "2024-11-04": "振替休日",
  "2024-11-23": "勤労感謝の日",
};

test("kokumin-no-shukujitsu-2022", () => {
  const holidays = getHolidays(2022);
  for (const holiday of holidays) {
    const monthZeroPadding = holiday.month.toString().padStart(2, "0");
    const dayZeroPadding = holiday.day.toString().padStart(2, "0");
    const dateStr = `${2022}-${monthZeroPadding}-${dayZeroPadding}`;
    expect(Object.keys(holidays2022)).toContain(dateStr);
  }
});

test("kokumin-no-shukujitsu-2023", () => {
  const holidays = getHolidays(2023);
  for (const holiday of holidays) {
    const monthZeroPadding = holiday.month.toString().padStart(2, "0");
    const dayZeroPadding = holiday.day.toString().padStart(2, "0");
    const dateStr = `${2023}-${monthZeroPadding}-${dayZeroPadding}`;
    expect(Object.keys(holidays2023)).toContain(dateStr);
  }
});

test("kokumin-no-shukujitsu-2024", () => {
  const holidays = getHolidays(2024);
  for (const holiday of holidays) {
    const monthZeroPadding = holiday.month.toString().padStart(2, "0");
    const dayZeroPadding = holiday.day.toString().padStart(2, "0");
    const dateStr = `${2024}-${monthZeroPadding}-${dayZeroPadding}`;
    expect(Object.keys(holidays2024)).toContain(dateStr);
  }
});
