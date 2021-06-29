import { DateTime } from "luxon";
import { getStartOfWeek } from "../src/Util/dateUtil";
test.each([
    "21-06-2021",
    "22-06-2021",
    "23-06-2021",
    "24-06-2021",
    "25-06-2021",
    "26-06-2021",
])(
    "Returns sunday for start of the week when each day of the week is given",
    (date) => {
        const dateInDateTime = DateTime.fromISO(date);
        const startOfWeek = getStartOfWeek(dateInDateTime);

        expect(startOfWeek.toISODate()).toBe("20-06-2021");
    }
);
