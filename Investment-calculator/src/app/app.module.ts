import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";
import { HeaderModule } from "./header/header.module";
import {  InvestmentResultsModule } from "./investment-results/invest.module";
@NgModule({
  declarations:[AppComponent],
  bootstrap:[AppComponent],
  imports:[BrowserModule,UserInputModule,HeaderModule,InvestmentResultsModule],
})
export class AppModule{}
