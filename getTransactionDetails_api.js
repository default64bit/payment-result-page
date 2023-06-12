const generateRandomNum = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

/**
 *
 * @param {string|number} transactionID
 * @param {string} [status="OK"]
 * @param {string} [message="SuccessfulPayment"]
 *
 */
export const getTransactionDetails = (transactionID, status = "OK", message = "SuccessfulPayment") => {
    let billStatus = "paid";
    let transactionStatus = "ok";
    const price = generateRandomNum(10_000, 1_000_000);

    switch (message) {
        case "MethodNotDefined":
        case "ForbiddenUser":
        case "IncorrectIdentifier":
        case "IncorrectTransaction":
            billStatus = "pendingPayment";
            transactionStatus = "error";
            break;
        case "TransactionCanceled":
            billStatus = "unpaid";
            transactionStatus = "canceled";
            break;
        case "TransactionFailedAndWillBounce":
            billStatus = "unpaid";
            transactionStatus = "error";
            break;
    }

    return {
        bill: {
            billNumber: Math.floor(100000000 + Math.random() * 900000000),
            description: "Renewal of your subscription service",
            payablePrice_Toman: price,
            status: billStatus,
        },
        transaction: {
            code: "489242342_987987",
            method: "SamanKishGateway",
            paidPrice_Toman: status === "OK" ? price : 0,
            status: transactionStatus,
            date: new Date(Date.now()),
        },
    };
};
