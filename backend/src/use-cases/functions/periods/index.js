const { dateToday } = require("./dateToday")
const { getDay } = require("./getDay")
const { getWeek } = require("./getWeek")
const { getMonth } = require("./getMonth")
const { getYear } = require("./getYear")

const TimePeriodService = {
    dateToday,
    getDay,
    getWeek,
    getMonth,
    getYear
}

module.exports = {TimePeriodService}