import Table from "react-bootstrap/Table";
import "./card.css";
import { CreateModal } from "../create-modal/create-modal";
import { useServiceData } from "../../hooks/useServiceData";
import { useState } from "react";

interface CardProps {
    id?: number;
    service: string;
    price: number;
    dateService?: string;
    timeService?: string;
}

// eslint-disable-next-line no-empty-pattern
export function Card({ }: CardProps) {
    const { data } = useServiceData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen((prev) => !prev);
    };
    console.log(data);
    return (
        <div className="container">
            <h1>Serviços</h1>
            <Table bordered size="sm" variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Serviço</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((serviceData: CardProps) => (
                        <tr key={serviceData.id}>
                            <td>{serviceData.id}</td>
                            <td>{serviceData.service}</td>
                            <td>{serviceData.price}</td>
                            <td>{serviceData.dateService}</td>
                            <td>{serviceData.timeService}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
            <button onClick={handleOpenModal}>novo</button>
        </div>
    );
}
