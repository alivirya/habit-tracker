import { DateTime } from "luxon";
import { getStartOfWeek } from "../Util/dateUtil";
test.each([
    "2021-06-21",
    "2021-06-22",
    "2021-06-23",
    "2021-06-24",
    "2021-06-25",
    "2021-06-26",
    "2021-06-27",
])(
    "Returns sunday for start of the week when each day of the week is given",
    (date) => {
        const dateInDateTime = DateTime.fromISO(date);
        const startOfWeek = getStartOfWeek(dateInDateTime);

        expect(startOfWeek.toISODate()).toBe("2021-06-20");
    }
);
