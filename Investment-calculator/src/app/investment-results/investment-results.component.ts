import { CurrencyPipe } from '@angular/common';
import { Component, Inject, input, Input,inject, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

// @Component({
//   selector: 'app-investment-results',
//   standalone: true,
//   imports: [FormsModule,CurrencyPipe],
//   templateUrl: './investment-results.component.html',
//   styleUrl: './investment-results.component.css'
// })
@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
// @Input() results!:{
//      year:number,
//       interest: number,
//       valueEndOfYear: number,
//       annualInvestment: number,
//       totalInterest: number,
//       totalAmountInvested: number,
// }[];

//using signals
// results=input<{
//      year:number,
//       interest: number,
//       valueEndOfYear: number,
//       annualInvestment: number,
//       totalInterest: number,
//       totalAmountInvested: number,
// }[]>();

// using services
private investmentservice = inject(InvestmentService);
// get results(){
//   return this.investmentservice.resultdata;
// }

//using signal
// get results(){
//   return this.investmentservice.resultdata;
// }
 // computed signal: auto updates when service signal changes
results = computed(()=>this.investmentservice.resultdata());
}
