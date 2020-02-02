import { Component, OnInit } from '@angular/core';
import { todoModel } from '../Models/todo.model';


import { Storage } from '@ionic/storage'; // This line added manually.
import { TodosService } from '../services/todos.service';
import { AuthService } from '../services/auth.service';
import { DatePipe } from '@angular/common';
import { TodoStates } from '../Helpers/Lists';
import { Router } from '@angular/router';



@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.page.html',
  styleUrls: ['./createtodo.page.scss'],
  providers: [DatePipe]
})
export class CreatetodoPage implements OnInit {

  todoStates: Object[];

  todoData: todoModel = new todoModel();
  private tokenUser: string;

  constructor(private storage: Storage,
    private todosService: TodosService,
    private router: Router,
    private pipe: DatePipe) {
    //Obtenemos el token de usuario
    this.storage.get('token').then((val) => {
      this.tokenUser = val;
    }, () => {
      this.tokenUser = "-UnAthorized";
    });


  }

  ngOnInit() {
    let todoStates = new TodoStates();
    this.todoStates = todoStates.getStates();
  }

  saveTodo() {
    let fechaHoy = new Date();
    this.todoData.fecha_creacion = this.pipe.transform(fechaHoy, 'yyyy-MM-dd'); //whatever format you need. 
    this.todoData.usuarioCreador = this.tokenUser;


    this.todoData.usuarioAsignado = (this.todoData.asignado) ? this.tokenUser : "";


    console.log("TOdo data", this.todoData);

    this.todosService.createTodo(this.todoData).subscribe(resp => {
      console.log("create todo", resp);
      this.router.navigate(['list']);
    });
  }

}
