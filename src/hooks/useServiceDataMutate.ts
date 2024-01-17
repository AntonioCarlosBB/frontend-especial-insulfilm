import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ServiceData } from '../interface/ServiceData';

const API_URL = 'http://localhost:8080';

const postData = async (data: ServiceData): AxiosPromise<unknown> => {
    const response = axios.post(API_URL + '/atividades', data);
    return response;
}

export function useServiceDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['service-data']})
        }
    })

    return mutate;
}