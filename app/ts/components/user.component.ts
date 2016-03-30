import {Component, OnInit} from 'angular2/core'
import {AccountService} from "../services/account.service";
import {AccountRequest} from "../models/account-request.model"
import {AccountResponse} from "../models/account-response.model"

@Component({
    templateUrl: 'app/views/user.html'
})
export class UserComponent implements OnInit {  
    logado: boolean;  
    Usuario: AccountResponse;
    Login: AccountRequest;
    
    constructor(private _accountService: AccountService){}
    
    ngOnInit() {
        this.Login = new AccountRequest();
        this.Login.login = "felipe";
        this.Login.password = "123456";
        this.logado = false;
    }
    
    auth(login: AccountRequest): void {
        console.log(login);
        this._accountService.login(login).subscribe(data => ( this.Usuario = data, this.logado = true ), error => console.log(error));
    }
}