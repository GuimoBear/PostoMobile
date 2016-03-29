import {BaseResponse} from "../BaseResponse"

export interface VendaCombustivel {
    combustivel: string;
    valor: number;
    percentual: number;
}

export class VendaPorCombustivel extends BaseResponse {
    Result: Array<VendaCombustivel>;
}