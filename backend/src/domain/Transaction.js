function makeTransaction({
    _id,
    name,
    income, 
    amount,
    date,
    time,
    userId
}) {
    if(!name){
        throw new Error("Transaction must include name")
    }
    if(!amount){
        throw new Error("Transaction must include amount")
    }
    if(!userId){
        throw new Error("Transaction must include user")
    }

    return {
        _id,
        name,
        income,
        amount,
        date,
        time,
        userId
    }
}

module.exports = { makeTransaction }