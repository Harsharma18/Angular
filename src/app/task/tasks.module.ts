import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskwComponent } from './taskw/taskw.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [TaskComponent, NewTaskComponent, TaskwComponent],
  exports: [TaskComponent],
  imports:[FormsModule,SharedModule,CommonModule],
})
export class TasksModule {}
