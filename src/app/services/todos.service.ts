import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { todoModel } from '../Models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private bdEndPoint:string  ="https://fast-issues-and-fixes-manager.firebaseio.com";
  private bdExtData:string =".json";

  constructor(private http: HttpClient) {

   }

   //Método para obtener todas las tareas
   getAllTodos():any{
    return this.http.get(this.getUri("TODOS"));
   }

   createTodo(todo:todoModel):any{
     return this.http.post(this.getUri("TODOS"), todo);
   }

   private getUri(method:string){
    return `${this.bdEndPoint}/${method}${this.bdExtData}`;
   }

}
