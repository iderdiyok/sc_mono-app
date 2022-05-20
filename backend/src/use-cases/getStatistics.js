const { getWeekStatistics } = require("./getWeekStatistics")
const { getMonthStatistics } = require("./getMonthStatistics")

async function getStatistics({ userId, showOption, timeOption}) {
    if(timeOption === "month") {
        return getMonthStatistics({ userId, showOption })
    } else {
        return getWeekStatistics({ userId, showOption })
    }
    // const result = await getWeekStatistics({ userId, showOption,})
    // return result
}

module.exports = {getStatistics}


// } else if (timeOption === "year") {
//     return getYearStatistics({ userId, showOption })