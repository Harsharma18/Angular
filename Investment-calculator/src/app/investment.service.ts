import { Injectable,signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  //  resultdata?:{
  //    year:number,
  //     interest: number,
  //     valueEndOfYear: number,
  //     annualInvestment: number,
  //     totalInterest: number,
  //     totalAmountInvested: number,
  // }[];
   resultdata = signal<{
     year:number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number,
   }[] | undefined>(undefined);
OncalculateInvestmentResults(data:{initialInvestment:number,duration:number,expectedReturn:number,annualInvestment:number}) {
      const { initialInvestment, duration, expectedReturn, annualInvestment } = data;
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }
  // this.resultdata = annualData;
  this.resultdata.set(annualData);
 console.log("result data ",this.resultdata);
}

}
