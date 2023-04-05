const getTransactionObj = async(rawObj, prevAmount) => {

    const partialBallance = await rawObj.OperationId !== 1? Number(prevAmount) - Number(rawObj.value): Number(prevAmount) + Number(rawObj.value);

    return {...rawObj, prevAmount, partialBallance};
}

module.exports = getTransactionObj;