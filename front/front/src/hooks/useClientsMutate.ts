import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../helpers/api";

type clientPost = {
    name: string,
}

const submit = async (data: clientPost) => {
    return await api.post('/clients/add', data)
}

export function useClientsMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: submit,
        onSuccess: (data) => {
            queryClient.invalidateQueries(['clients'])
            console.log(data.data.message)
        }
    })

    return mutate;
}