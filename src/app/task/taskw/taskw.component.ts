import { Component, Input } from '@angular/core';
import { Task } from './taskw.model';
@Component({
  selector: 'app-taskw',
  standalone: true,
  imports: [],
  templateUrl: './taskw.component.html',
  styleUrl: './taskw.component.css'
})
export class TaskwComponent {
@Input({required:true}) task!:Task;
}
