const { dateToday } = require("./dateToday")
const { getDay } = require("./getDay")
const { getWeekStartAndEndTime } = require("./getWeekStartAndEndTime")
const { getMonthStartAndEndTime } = require("./getMonthStartAndEndTime")
const { getYear } = require("./getYear")

const TimePeriodService = {
    dateToday,
    getDay,
    getWeekStartAndEndTime,
    getMonthStartAndEndTime,
    getYear
}

module.exports = {TimePeriodService}