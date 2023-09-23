# holiday-jp-since

2022 年以降の日本の祝日を取得するライブラリ

## Note

- 軽量化のため、2022 年以降のデータのみサポートしています。

## Usage

```ts
import { getHolidaysOfYear, getHolidaysBetweenYears } from "holiday-jp-since";

const hoildays2024 = getHolidaysOfYear(2024);
const holidays2024To2099 = getHolidaysOfYear(2024, 2099);
```

返ってくる値は次のフォーマットです。

```ts
[{
  holidayType: HOLIDAY_TYPE.MOVING,
  name: "元日",
  year: 2024
  month: 1,
  day: １,
}, ...]
```

## Develop

To install dependencies:

```bash
bun install
```
