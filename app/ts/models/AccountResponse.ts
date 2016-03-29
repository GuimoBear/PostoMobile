import {BaseResponse} from './BaseResponse';

class Posto {
    Nome: string;
    CNPJ: string;
    ChaveIdentificacao: string;
}

export class AccountResponse extends BaseResponse {
    Tipo: string;
    Redes: Array<any>;
    Postos: Array<Posto>;
}