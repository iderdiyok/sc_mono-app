function makeTransaction({
    _id,
    name,
    income,
    amount,
    image,
    created_at,
    userId
}) {
    if (!name) {
        throw new Error("Transaction must include name")
    }
    if (!amount) {
        throw new Error("Transaction must include amount")
    }
    if (!userId) {
        throw new Error("Transaction must include user")
    }

    return {
        _id,
        name,
        income,
        amount,
        image: image || "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",
        created_at,
        userId
    }
}

module.exports = { makeTransaction }