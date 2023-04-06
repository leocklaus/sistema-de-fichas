export type Transaction = {
    id: number,
    description: string,
    value: number,
    createdAt: Date,
    CashierId: number,
    prevAmount: number,
    partialBallance: number,
    Operation: {
        name: string,
        id: number,
    },
    Cashier: {
        name: string,
    }
}

export type client = {
    id: number,
    name: string,
    amount: number,
    Transactions: Transaction[] | [],
}

export type ClientResponse = {
    client: client,
}
