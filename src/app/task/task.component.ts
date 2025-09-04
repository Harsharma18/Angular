import { Component,input,Input } from '@angular/core';
import { TaskwComponent } from './taskw/taskw.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskwComponent,NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) usersid!:string;
  @Input({required:true}) name!:string;
  isaddtask:boolean= false;
   dummyTasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
]
constructor(){
  const storedTasks = localStorage.getItem('tasks');
  if(storedTasks){
    this.dummyTasks = JSON.parse(storedTasks);
  }
}
savedLocalStorageTask(){
  localStorage.setItem('tasks',JSON.stringify(this.dummyTasks));
}
onDeleteTask(id:string){
  this.dummyTasks = this.dummyTasks.filter((d)=> d.id!=id);
  console.log("delete task is",id)
  this.savedLocalStorageTask();
}
addtaskopen(){
  this.isaddtask = true;
  this.editTask = undefined;
}
onCloseTask(){
  this.isaddtask=false;
  this.editTask = undefined;
}
OnAddTask(taskData:{title:string,date:string,summary:string}){
  this.dummyTasks.unshift({
    id:new Date().getTime().toString(),
    userId:this.usersid,
    title:taskData.title,
    summary:taskData.summary,
    dueDate:taskData.date,
  })
this.isaddtask = false;
this.savedLocalStorageTask();
}
editTask?: { id:string; title:string; summary:string; date:string };

OnEditTask(taskss: { id: string; title: string; summary: string; date: string }) {
  // this.editTask = {
  //   id: task.id,
  //   title: task.title,
  //   summary: task.summary,
  //   date: task.dueDate
  // };
   this.editTask = { ...taskss};
  this.isaddtask = true;
}

OnUpdateTask(updatedTask: { id: string; title: string; summary: string; date: string }) {
  this.dummyTasks = this.dummyTasks.map(t =>
    t.id === updatedTask.id
      ? { ...t, title: updatedTask.title, summary: updatedTask.summary, dueDate: updatedTask.date }
      : t
  );
  this.savedLocalStorageTask();
  this.isaddtask = false;
  this.editTask = undefined;
}




get userselectedtask(){
  return this.dummyTasks.filter((taskid)=>taskid.userId===this.usersid)
}
}
