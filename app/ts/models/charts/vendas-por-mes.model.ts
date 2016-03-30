import {BaseResponse} from "../base-response.model"

class VendasMes {
    mes: number;
    combustivel: number;
    produto: number;
}

export class VendasPorMes extends BaseResponse {
    Result: Array<VendasMes>;
}