import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
   taskToEdits?: { id: string; title: string; summary: string; date: string };

  @Input() set taskToEdit(
    value:
      | {
          id: string;
          title: string;
          summary: string;
          date: string;
        }
      | undefined
  ) {
    this.taskToEdits = value;
    if (value) {
      this.enteredTitle = value.title;
      this.enteredSummary = value.summary;
      this.enteredDate = value.date;
    } else {
      this.enteredTitle = '';
      this.enteredSummary = '';
      this.enteredDate = '';
    }
  }

  // get taskToEdit() {
  //   return this.taskToEdits;
  // }

  @Output() close = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<{
    title: string;
    summary: string;
    date: string;
  }>();

  @Output() updateTask = new EventEmitter<{
    id: string;
    title: string;
    summary: string;
    date: string;
  }>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onclosetask() {
    this.close.emit();
  }

  OnSubmitForm() {
    if (this.taskToEdits) {
      // EDIT MODE
      this.updateTask.emit({
        id: this.taskToEdits.id,
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      });
    } else {
      // ADD MODE
      this.addTask.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      });
    }
  }
}

// import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-new-task',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './new-task.component.html',
//   styleUrl: './new-task.component.css',
// })
// export class NewTaskComponent implements OnChanges {
//   @Input() taskToEdit?: { id: string; title: string; summary: string; date: string };

//   @Output() close = new EventEmitter<void>();
//   @Output() addTask = new EventEmitter<{ title: string; summary: string; date: string }>();
//   @Output() updateTask = new EventEmitter<{ id: string; title: string; summary: string; date: string }>();

//   enteredTitle = '';
//   enteredSummary = '';
//   enteredDate = '';

//   // When parent passes taskToEdit → prefill
//   ngOnChanges(changes: SimpleChanges) {
//     if (changes['taskToEdit']) {
//       if (this.taskToEdit) {
//         this.enteredTitle = this.taskToEdit.title;
//         this.enteredSummary = this.taskToEdit.summary;
//         this.enteredDate = this.taskToEdit.date;
//       } else {
//         this.enteredTitle = '';
//         this.enteredSummary = '';
//         this.enteredDate = '';
//       }
//     }
//   }

//   onclosetask() {
//     this.close.emit();
//   }

//   OnSubmitForm() {
//     if (this.taskToEdit) {
//       // EDIT MODE
//       this.updateTask.emit({
//         id: this.taskToEdit.id,
//         title: this.enteredTitle,
//         summary: this.enteredSummary,
//         date: this.enteredDate,
//       });
//     } else {
//       // ADD MODE
//       this.addTask.emit({
//         title: this.enteredTitle,
//         summary: this.enteredSummary,
//         date: this.enteredDate,
//       });
//     }
//   }
// }
