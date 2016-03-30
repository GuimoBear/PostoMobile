import {BaseResponse} from './base-response.model'

class VlrCombustivel {
    tmCombustivel: number;
}

class VlrProdutos {
    tmProdutos: number;
}

class VlrdesContosAcrescimos {
    desContosAcrescimos: number;
}

export class Indicadores extends BaseResponse {
    Result: Array<any>; // 0: VlrCombustivel, 1: VlrProdutos, 2: VlrdesContosAcrescimos
}