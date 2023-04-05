import { useQuery } from '@tanstack/react-query';
import { AxiosPromise } from 'axios';
import api from '../helpers/api';
import { ClientsResponse } from '../types/clients';

const fetchData = async (): AxiosPromise<ClientsResponse> => {
    const response = await api.get<ClientsResponse>('/clients/all');
    return response;
  }

export const useClientsData = () => {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['clients'],
    });
    

    return {
        ...query,
        query: query.data && query.data.data
    }
}