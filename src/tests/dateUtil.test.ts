import { getStartOfWeek, lengthOfHabit } from "../Util/dateUtil";

import { DateTime } from "luxon";

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

test.each`
    startOfWeek                       | startDate                         | weeklyNumber | expectedYears | expectedMonths | expectedDays
    ${DateTime.fromISO("2021-06-20")} | ${DateTime.fromISO("2021-06-24")} | ${3}         | ${0}          | ${0}           | ${3}
    ${DateTime.fromISO("2021-06-20")} | ${DateTime.fromISO("2021-06-10")} | ${3}         | ${0}          | ${0}           | ${13}
    ${DateTime.fromISO("2021-06-20")} | ${DateTime.fromISO("2021-05-10")} | ${3}         | ${0}          | ${1}           | ${13}
    ${DateTime.fromISO("2021-06-20")} | ${DateTime.fromISO("2021-05-20")} | ${3}         | ${0}          | ${1}           | ${3}
    ${DateTime.fromISO("2021-06-20")} | ${DateTime.fromISO("2021-05-20")} | ${0}         | ${0}          | ${1}           | ${0}
    ${DateTime.fromISO("2021-06-20")} | ${DateTime.fromISO("2020-05-10")} | ${3}         | ${1}          | ${1}           | ${13}
    ${DateTime.fromISO("2021-06-20")} | ${DateTime.fromISO("2020-05-20")} | ${0}         | ${1}          | ${1}           | ${0}
    ${DateTime.fromISO("2021-06-20")} | ${DateTime.fromISO("2020-05-20")} | ${3}         | ${1}          | ${1}           | ${3}
`(
    "returns correct start date for different date situations",
    ({
        startOfWeek,
        startDate,
        weeklyNumber,
        expectedYears,
        expectedMonths,
        expectedDays,
    }) => {
        const { years, months, days } = lengthOfHabit(
            startOfWeek,
            startDate,
            weeklyNumber
        );
        expect(expectedYears).toBe(years);
        expect(expectedMonths).toBe(months);
        expect(expectedDays).toBe(days);
    }
);
