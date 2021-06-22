import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

    return (
      <Container>
        <table>
            <thead>
               <tr>
                    <td>Título</td>
                    <td>Valor</td>
                    <td>Categoria</td>
                    <td>Data</td>
               </tr>
            </thead>
            <thead>
               <tr>
                    <td>Desenvolvimento de website</td>
                    <td className="deposit">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>21/06/2021</td>
               </tr>
            </thead>
            <thead>
                <tr>
                    <td>Aluguel</td>
                    <td className="witddraw">- R$1.100</td>
                    <td>Casa</td>
                    <td>21/06/2021</td>
                </tr>
            </thead>
        </table>
      </Container>
    );
}