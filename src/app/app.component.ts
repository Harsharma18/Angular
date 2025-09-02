import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';
import { NgClass,NgFor,NgIf,NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TaskComponent,NgClass,NgStyle,NgFor,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
constructor(){
  console.log(this.users);
}
loading = false;
selecteduserId !: string;
get SelectedUserId(){
  return this.users.find((user)=>user.id===this.selecteduserId)!;
}
OnSelectedUser(id:string){
  console.log('user selected id is :',id);
  this.loading = true;
  setTimeout(()=>{
   this.selecteduserId = id;
      this.loading = false;
  },1000)

}
}
