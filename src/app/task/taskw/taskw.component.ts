import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './taskw.model';
import { NgStyle } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
@Component({
  selector: 'app-taskw',
  standalone: true,
  imports: [NgStyle, DatePipe, CardComponent],
  templateUrl: './taskw.component.html',
  styleUrl: './taskw.component.css',
})
export class TaskwComponent {
  @Input({ required: true }) task!: Task;
  @Output() completeTask = new EventEmitter<string>();
@Output() editTask = new EventEmitter<{id:string, title:string, summary:string, date:string}>();

OnEditTask(){
  this.editTask.emit({
    id: this.task.id,
    title: this.task.title,
    summary: this.task.summary,
    date: this.task.dueDate,

  });
   console.log("this.edittask.id",this.task.id);
}

  OnCompleteTask() {
    this.completeTask.emit(this.task.id);
     console.log("deleete task id",this.task.id);
  }


}
