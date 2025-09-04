// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "../app.module";
platformBrowser().bootstrapModule(AppModule);
