import {BaseResponse} from "../base-response.model"

class VendaTurno {
    turno: string;
    combustivel: number; 
    produto: number;
}

export class VendasPorTurno extends BaseResponse {
    Result: Array<VendaTurno>;
}