import {BaseResponse} from "../base-response.model"

export interface VendaFuncionario {
    funcionario: string;
    valor: string;
}

export class VendasPorFuncionario extends BaseResponse {
    Result: Array<VendaFuncionario>;
}