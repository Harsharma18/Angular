import { Component, EventEmitter, Input, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

// @Component({
//   selector: 'app-user-input',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './user-input.component.html',
//   styleUrl: './user-input.component.css',
// })
@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  ///using services
  constructor(private investmentservice:InvestmentService){

  }
  // @Output() calculate = new EventEmitter<{
  //   initialInvestment:number,
  //   duration:number,
  //   expectedReturn:number,
  //   annualInvestment:number,
  // }>();
  //using signal
  //   calculate = output<{
  //   initialInvestment:number,
  //   duration:number,
  //   expectedReturn:number,
  //   annualInvestment:number,
  // }>();
  enterinitialInvestment = '0';
  enterannualInvestment = '0';
  enterexpectedReturn = '5';
  enterduration = '10';

  //  enterinitialInvestment = signal('0');
  // enterannualInvestment = signal('0');
  // enterexpectedReturn = signal('5');
  // enterduration = signal('10');
  OnSubmit() {
  //  this.calculate.emit({
    // initialInvestment:+this.enterinitialInvestment,
    // duration:+this.enterduration,
    // annualInvestment:+this.enterannualInvestment,
    // expectedReturn:+this.enterexpectedReturn,
    //using signal
  //    initialInvestment:+this.enterinitialInvestment(),
  //   duration:+this.enterduration(),
  //   annualInvestment:+this.enterannualInvestment(),
  //   expectedReturn:+this.enterexpectedReturn(),
  //  });
  //  this.enterinitialInvestment.set('0');
  //  this.enterannualInvestment.set('0');
  //  this.enterduration.set('10');
  //  this.enterexpectedReturn.set('5');

 // }
 this.investmentservice.OncalculateInvestmentResults({
  initialInvestment:+this.enterinitialInvestment,
    duration:+this.enterduration,
    annualInvestment:+this.enterannualInvestment,
    expectedReturn:+this.enterexpectedReturn,
 })
}

}
