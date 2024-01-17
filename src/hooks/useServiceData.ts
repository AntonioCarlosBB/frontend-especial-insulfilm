import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios"
import { ServiceData } from '../interface/ServiceData';

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<ServiceData[]> => {
    const response = axios.get(API_URL + '/atividades');
    return response;
}

export function useServiceData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['service-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data.content
    }
}