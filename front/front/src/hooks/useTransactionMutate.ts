import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../helpers/api";

type TransactionPost = {
    description: string,
    value: number,
    ClientId: number,
    OperationId: number,
    CashierId: number
}

const submit = async (data: TransactionPost) => {
    return await api.post('/transaction/add', data)
}

export function useTransactionMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: submit,
        onSuccess: (data) => {
            queryClient.invalidateQueries(['client'])
            console.log(data.data.message)
        }
    })

    return mutate;
}