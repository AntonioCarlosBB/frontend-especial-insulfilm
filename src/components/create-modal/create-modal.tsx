import { useEffect, useState } from 'react';
import { useServiceDataMutate } from '../../hooks/useServiceDataMutate';
import { ServiceData } from '../../interface/ServiceData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: unknown): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [service, setService] = useState("");
    const [price, setPrice] = useState(0);
    const { mutate, isSuccess, isPending } = useServiceDataMutate();

    const submit = () => {
        const serviceData: ServiceData = {
            service, 
            price,
        }
        mutate(serviceData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [closeModal, isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre uma nova venda</h2>
                <form className="input-container">
                    <Input label="service" value={service} updateValue={setService}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isPending ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}