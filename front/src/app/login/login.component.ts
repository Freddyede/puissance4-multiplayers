import { Component } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
    user: any = {
        mail: "",
        password: ""
    };
    constructor(private _httpService: HttpService) { }
    ngOnInit() { }

    sendUser(e: any) {
        e.preventDefault();
        console.log(this.user);
    }
}
