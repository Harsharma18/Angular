import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
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
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.dummyTasks = JSON.parse(storedTasks);
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }

  getUseridTask(userId: string) {
    return this.dummyTasks.filter(task => task.userId === userId);
  }

  //  Task add karna
  addTask(taskData: { title: string; date: string; summary: string }, userId: string) {
    const newTask = {
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    };
    this.dummyTasks.unshift(newTask);
    this.saveToLocalStorage();
  }

  // 🔹 Task delete karna
  deleteTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter(t => t.id !== id);
    this.saveToLocalStorage();
  }

  // 🔹 Task update karna
  updateTask(updatedTask: { id: string; title: string; summary: string; date: string }) {
    this.dummyTasks = this.dummyTasks.map(t =>
      t.id === updatedTask.id
        ? { ...t, title: updatedTask.title, summary: updatedTask.summary, dueDate: updatedTask.date }
        : t
    );
    this.saveToLocalStorage();
  }
}
