const { TimePeriodService } = require("../use-cases/functions/periods")
const { TransactionsDAO } = require("../db-access");

async function getYearStatistics({ userId, showOption } ) {
    console.log("getYearStatistics");
    const getTimeStamps = await TimePeriodService.getYearStartAndEndTime()
    
    const ONE_MONTH_IN_MS = 1000 * 60 * 60 * 24 * 31 // Year -> one_day, month -> one_day, year -> one_month

    const grundArray = [
        { label: "Jan.", start: getTimeStamps.start, end: getTimeStamps.start + ONE_MONTH_IN_MS,  },
        { label: "Feb.", start: getTimeStamps.start + ONE_MONTH_IN_MS, end: getTimeStamps.start + ONE_MONTH_IN_MS * 2 },
        { label: "Mär.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 2, end: getTimeStamps.start + ONE_MONTH_IN_MS * 3 },
        { label: "Apr.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 3, end: getTimeStamps.start + ONE_MONTH_IN_MS * 4 },
        { label: "Mai.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 4, end: getTimeStamps.start + ONE_MONTH_IN_MS * 5 },
        { label: "Jun.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 5, end: getTimeStamps.start + ONE_MONTH_IN_MS * 6 },
        { label: "Jul.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 6, end: getTimeStamps.start + ONE_MONTH_IN_MS * 7 },
        { label: "Aug.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 7, end: getTimeStamps.start + ONE_MONTH_IN_MS * 8 },
        { label: "Sep.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 8, end: getTimeStamps.start + ONE_MONTH_IN_MS * 9 },
        { label: "Okt.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 9, end: getTimeStamps.start + ONE_MONTH_IN_MS * 10 },
        { label: "Nov.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 10, end: getTimeStamps.start + ONE_MONTH_IN_MS * 11 },
        { label: "Dez.", start: getTimeStamps.start + ONE_MONTH_IN_MS * 11, end: getTimeStamps.end } // end ist genau: start + ONE_MONTH_IN_MS * 7
    ]

    const allTransactionsOfYear = await TransactionsDAO.findAllTransactionsOfUserWithTimePeriod(userId, getTimeStamps)
    const filterAllTransaction = showOption === "income" 
        ? allTransactionsOfYear.filter(t => t.income === true)
        : allTransactionsOfYear.filter(t => t.income === false)

    const resultArray = grundArray.map(yearObject => {
        
        const transactionsOfDay = filterAllTransaction.filter(t => t.created_at >= yearObject.start && t.created_at < yearObject.end)
        
        return {
            label: yearObject.label,
            value: calculateAmount(transactionsOfDay)
        }
    })
    
    return {filterAllTransaction, resultArray} 
}

function calculateAmount(transactions) {
    const amount = transactions.map(t => t.amount)
    .reduce((sum, amount) => sum + amount, 0)

    return amount
}
module.exports = {getYearStatistics}