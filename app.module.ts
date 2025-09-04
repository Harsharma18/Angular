import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './src/app/app.component';

// Standalone components
import { HeaderComponent } from './src/app/header/header.component';
import { UserComponent } from './src/app/user/user.component';
import { SharedModule } from './src/app/shared/shared.module';
import { TasksModule } from './src/app/task/tasks.module';

@NgModule({
  declarations: [
    AppComponent, //only non-standalone component
    HeaderComponent,
    UserComponent,
  ],
  imports: [BrowserModule, TasksModule, SharedModule],
  bootstrap: [AppComponent],
  // declarations: [
  //   AppComponent, //only non-standalone component
  // ],
  // imports: [
  //   BrowserModule,
  //   FormsModule,
  //   CommonModule,
  //   HeaderComponent,
  //   TaskComponent,
  //   NewTaskComponent,
  //   TaskwComponent,
  //   UserComponent,
  //   CardComponent,
  // ],
  // bootstrap: [AppComponent],
})
export class AppModule {}
