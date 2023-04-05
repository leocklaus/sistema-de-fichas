import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { AxiosPromise } from "axios";
import api from "../helpers/api";
import { ClientResponse } from "../types/client";

type data = {
    id: string | undefined
}

const fetchData = async (id: string | undefined): AxiosPromise<ClientResponse> => {
    const response = await api.get<ClientResponse>(`/clients/${id}`);
    return response;
}



export const useClientData = ({id}:data)=>{
    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ['client', id],
    })

    return {
        ...query,
        query: query?.data
    }
}