export type usersData = {
    id: number,
    name: string,
    amount: number,
    updatedAt: Date,
}
  
export type lettersData = {
    slug: string,
    content: usersData[]
}

export type ClientsResponse = {
    clients: lettersData[]
}