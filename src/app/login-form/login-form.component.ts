import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Models/user.model';
import { AuthService } from '../services/auth.service';


import { Storage } from '@ionic/storage'; // This line added manually.

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  user:UserModel;

  constructor(private auth:AuthService, private storage:Storage, public alertController: AlertController, private router:Router) { }

  ngOnInit() {
    this.user  = new UserModel();
    this.user.email = "andresblend";
    this.user.password = "Temporal1";
  }
  //Método para loguearse
  logIn(){
    this.auth.logIn(this.user).subscribe(
      responseFb=>{
        console.log("logueado", responseFb);   
        this.router.navigateByUrl('home');
      },
      err=>{
        console.log(err.error);
        this.presentAlert("Usuario o contraseña incorrectos");
      }
    )

  }

  async presentAlert(message:string) {
    const alert = await this.alertController.create({
      header: 'Login',
      subHeader: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
