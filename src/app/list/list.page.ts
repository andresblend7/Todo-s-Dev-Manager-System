import { Component, OnInit } from '@angular/core';
import { todoModel } from '../Models/todo.model';
import { TodosService } from '../services/todos.service';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TodoStates } from '../Helpers/Lists';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  private todosList: todoModel[] = [];
  private todoStates: any[] = []


  constructor(private todosService: TodosService,
    public alertController: AlertController,
    private router: Router) {


  }

  ngOnInit() {
    this.todosService.getAllTodos().subscribe(resp => {
      let respuestaTodos = Object.values(resp);
      
      this.todosList = respuestaTodos.sort(function (a, b) {
        if (a["fecha_creacion"] > b["fecha_creacion"]) {
          return -1;
        }
        if (b["fecha_creacion"] > a["fecha_creacion"]) {
          return 1;
        }
        return 0;
      }) as todoModel[];
    });

    let states = new TodoStates();
    this.todoStates = states.getStates();
  }

  goToCreateTodo() {
    this.router.navigate(['createtodo']);
  }

  getIconState(stateId) {
    var stateFilter = this.todoStates.filter((state) => state.id == stateId);

    return stateFilter[0];
  }


  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
