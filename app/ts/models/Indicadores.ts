import {BaseResponse} from './BaseResponse'

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
    Result: Array<any>; // 1: VlrCombustivel, 2: VlrProdutos, 3: VlrdesContosAcrescimos
}