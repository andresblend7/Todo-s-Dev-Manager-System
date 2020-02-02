import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../Models/user.model';

import { Storage } from '@ionic/storage'; // This line added manually.

import  {map} from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpointSignIn = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBO_M0FsORYFKnPC6MLlFx2ojnYnVc2Ksk";

  constructor(private http: HttpClient, private storage: Storage) {


  }

  userToken: string;

  logIn(user: UserModel): any {

    //Creamos el payload que se va a enviar
    let userPayload = new UserModel();
    userPayload.email = user.email + '' + '@dwms.com';
    userPayload.password = user.password;
    userPayload.returnSecureToken = true;
    //Concatenmaos el dominio ficticio de autenticacion


    //Hacemos la petición al FireBase
    return this.http.post(this.endpointSignIn, userPayload)
                    .pipe(
                      map(resp=>{
                        this.saveToken(resp['localId']);
                        return resp;
                      })
                    );

  }

  private saveToken(token: string) {
    this.storage.set('token', token);
  }

  getToken():any {
  let  token: string;
    this.storage.get('token').then((val) => {
      token = val;
      console.log("Si existe token-"+this.userToken);
      return token;
    }, () => {
      token = "-UnAthorized";
      console.log("No existe token");
      return token;
    });


  }
  logout() {

  }
}
