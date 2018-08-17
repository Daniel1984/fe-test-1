## Front End Test

1. Clone the repo and `yarn && yarn dev` or `npm i && npm run dev`

2. Complete the task:
- build a calendar grid for a given date.
- project url already acceps `date` as path name: `http://localhost:8080/:date`
- Weeks are starting from Monday, not Sunday
- use any tools you like for manipulating dates. Could be date-fns, dayjs, etc etc
- since months are not always starting from Monday and ending with Sunday, you have to
  prefill the gaps with dates from previous and following months
(just like most of calendars)
- start from `CalendarGrid.util.js` to generate data for given date and make sure
  `CalendarGrid.util.test.js` passes by running `yarn test` or `npm test`
