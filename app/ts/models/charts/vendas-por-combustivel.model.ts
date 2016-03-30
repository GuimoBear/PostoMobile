import {BaseResponse} from "../base-response.model"

export interface VendaCombustivel {
    combustivel: string;
    valor: number;
    percentual: number;
}

export class VendasPorCombustivel extends BaseResponse {
    Result: Array<VendaCombustivel>;
}