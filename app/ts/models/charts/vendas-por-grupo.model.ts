import {BaseResponse} from "../base-response.model"

class VendaGrupo {
    grupo: string;
    valor: number;
}

export class VendasPorGrupo extends BaseResponse {
    Result: Array<VendaGrupo>;
}