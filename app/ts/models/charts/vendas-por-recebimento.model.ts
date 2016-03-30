import {BaseResponse} from "../base-response.model"

class VendasRecebimento {
    tipo: string;
    valor: number;
}

export class VendasPorRecebimento extends BaseResponse {
    Result: Array<VendasRecebimento>;
}