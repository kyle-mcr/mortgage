import { Component, OnInit } from "@angular/core";
declare var jQuery: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  cards = [
    {
      description: "Do you have a monthly student loan payment?",
    },
    {
      description: "Do you have a monthly car loan payment?",
    },
    {
      description: "Do you have a monthly car insurance payment?",
    },
    {
      description:
        "How much do you estimate you spend on gas for your car monthly?",
    },
    {
      description:
        "How much do you estimate you spend on average, for car maintenance/repair per month?",
    },
    {
      description:
        "Do you have any monthly health/dental expenses(including health insurance, medical bills, prescription drugs) ?",
    },
    {
      description:
        "How much do you estimate you spend on groceries and essential supplies per month?",
    },
    {
      description: "Do you pay for a monthly fitness membership?",
    },
    {
      description: "Do you pay for any monthly streaming services?",
    },
    {
      description: "Do you pay for a monthly phone bill?",
    },
    {
      description:
        "How much do you estimate you spend on dining out per month?",
    },
    {
      description: "Estimated monthly cost for reacreation and entertainment?",
    },
    {
      description: "Do you pay for child care or child support?",
    },
    {
      description:
        "Any other monthly expenses that weren't accounted for please add them here(other than rent, electricity, and internet/cable).",
    },
    {
      description: "What is your total household monthly income after taxes?",
    },
    {
      description:
        "Do you recieve any other monthly benefits(social security benefits, disability income, etc) ?",
    },
    {
      description: "Do you have any other sources of perpetual monthly income?",
    },
    {
      description:
        "How much money do you have saved that you can put towards a downpayment on a house?",
    },
  ];
  numbersInForm: any = {};
  hideme = [];
  allNumbs: any = [];
  newObj = {};
  newArry: any = [];
  mortgageRateFound: any;
  calculate: any;
  finalAnswer: number;
  commas: any;
  thirtyCommas: any;
  fiftyCommas: any;
  thirtyLeftover: number;
  FiftyLeftover: number;
  thirtyLeft: any;
  fiftyLeft: any;
  count: number = 0;
  expenses: any;
  leftSide: number;
  rightSide: number;
  isNaN: Function = Number.isNaN;
  monthlyPayment: number;
  formula: number;
  percentage: number;
  finalFormula: number;
  brackets: number;
  thirty: number;
  fifty: number;
  house: any;
  currentValue: any;
  downPayment: any;
  income: any;
  propTax: number;
  propTax50: number;
  propTax50m: number;
  propTax30: number;
  propTax30m: number;
  mortgage: any;
  dpPercent: number;
  dpPercent5: number;
  dpPercent3: number;
  newString: string = "";
  visibleIndex:number = 0;
  minusDp:number;
  dpPercentage: number;
  pmi: number;
  pmi3: number;
  pmi5: number;
  pmiMonthly: number;
  pmiMonthly5: number;
  pmiMonthly3: number;



  constructor() {}

  ngOnInit() {
    (function ($) {
      $(document).ready(function () {
        $("button").click(function () {
          $("#jumbo, #fadeButton").hide(200, "linear");
          $("form").show(200, "linear");
        });
      });
    })(jQuery);
  }

  getClicked() {
    this.newObj = {};
    const newObj = Object.assign(
      {},
      ...Object.values(this.numbersInForm).map((v, i) => ({ [i + 1]: v }))
    );
    let allNumbs = Object.values(newObj);
    console.log(allNumbs);
    this.downPayment = allNumbs[allNumbs.length - 1];
    this.calculate = 0;
    this.house = 0;
    this.expenses = allNumbs[0];
    this.income = allNumbs[14];
    if ((allNumbs.length = 18)) {
      for (var j = 1; j <= 16; j++) {
        if (j < 14) {
          this.expenses += allNumbs[j];
        }
        if (j >= 15) {
          this.income += allNumbs[j];
        }
        this.calculate = this.income - this.expenses;
      }
    }
    console.log("expenses",this.expenses);
    console.log("income", this.income);
    console.log("income-expenses", this.calculate);
    console.log("downpayment", this.downPayment);
    this.calculateHouse()
  }

  counting(){
    this.count ++;
    console.log("count is", this.count)
  }
  back(){
    if(this.count>=0){
    this.count--;
    }
  }

  calculateHouse() {
  
    // 100% of net income calculation //
    this.mortgageRateFound = 0.0025;
    this.leftSide = Math.pow(1 + this.mortgageRateFound, 360);
    this.rightSide = Math.pow(1 + this.mortgageRateFound, 360) - 1;
    this.brackets = (this.mortgageRateFound * this.leftSide) / (this.rightSide);
    console.log("brackets", this.brackets);
    this.formula = (this.downPayment * this.brackets) + this.calculate;
    console.log("formula", this.formula);
    this.finalFormula = (this.formula / this.brackets);
    console.log("finalformula,", this.finalFormula);


    // 100% of net income calculation - estimated property tax//
    this.propTax = (this.finalFormula/30/12) * .22;
    this.propTax = (this.propTax * 30 * 12);
    this.pmi = (this.finalFormula * .08);
    this.pmiMonthly = Math.trunc(this.pmi / 30 / 12);
    console.log("PMI", this.pmi);
    this.finalFormula = (this.finalFormula - this.propTax);
     this.dpPercent = Math.trunc((this.downPayment / this.finalFormula) * 100);
    console.log("down payment percentage", this.dpPercent)
    console.log("final formula", this.finalFormula)
    console.log("100", this.finalFormula)
    if(this.dpPercent< 20){
      this.finalFormula = (this.finalFormula - this.pmi);
    }
    console.log("down payment percent", this.dpPercent);
    console.log("proptx", this.propTax)
    console.log("100", this.finalFormula)


    // 50% of net income calculation - estimated property tax//
    this.fifty = Math.trunc((this.calculate / 2) / this.brackets + this.downPayment);
    this.propTax50 = (this.fifty/30/12) * .22;
    this.propTax50m = this.propTax50;
    this.propTax50 = (this.propTax50 * 30 * 12);
    this.pmi5 = (this.fifty * .08);
    this.pmiMonthly5 = Math.trunc(this.pmi5 / 30 / 12);
    console.log("proptax50", this.propTax50);
    console.log("PMI50", this.pmi5);
    console.log("50 down payment and fifty ", this.downPayment, this.fifty)
    this.fifty = (this.fifty - this.propTax50);
    this.dpPercent5 = Math.trunc(( this.downPayment / this.fifty) * 100);
    console.log("doen payment percent 50%", this.dpPercent5);
    console.log("fifty", this.fifty)
    if(this.dpPercent5< 20){
      this.fifty = (this.fifty - this.pmi);
    }
    console.log("fifty", this.fifty)
    this.fiftyCommas = this.fifty.toLocaleString();


    // 30% of net income calculation - estimated property tax//
    this.thirty = Math.trunc((this.calculate * .3) / this.brackets + this.downPayment);
    this.propTax30 = (this.thirty/30/12) * .22;
    this.propTax30m = this.propTax30;
    this.propTax30 = (this.propTax30 * 30 * 12);
    this.pmi3 = (this.thirty * .08);
    this.pmiMonthly3 = Math.trunc(this.pmi3 / 30 / 12);
    console.log("proptax30", this.propTax30);
    console.log("PMI30", this.pmi3);
    console.log("30 down payment and thirty ", this.downPayment, this.thirty)
    this.thirty = (this.thirty - this.propTax30);
    this.dpPercent3 = Math.trunc(( this.downPayment / this.thirty) * 100);
    console.log("doen payment percent 30%", this.dpPercent3);
    console.log("thirty", this.thirty)
    if(this.dpPercent3< 20){
      this.thirty = (this.thirty - this.pmi);
    }
    console.log("thirty", this.thirty)
    this.thirtyCommas = this.thirty.toLocaleString();


    // Calculation of left over amount after mortgage payment for 30% & 50%//
    this.thirtyLeftover = Math.trunc(this.calculate - (this.calculate * .3) - this.propTax30m);
    this.thirtyLeft = this.thirtyLeftover.toLocaleString();
    this.FiftyLeftover = Math.trunc(this.calculate - (this.calculate / 2) - this.propTax50m);
    this.fiftyLeft = this.FiftyLeftover.toLocaleString();
    console.log("100%", this .formula)
    console.log("50%", this .fifty)
    console.log("30%", this .thirty)
    console.log("30 left", this.thirtyLeft);
    console.log("50 left", this.fiftyLeft);

    // final calculations of 100% mortgage and other data for display //
    this.finalAnswer = Math.trunc(this.finalFormula);
    this.commas = this.finalAnswer.toLocaleString();
    console.log("yoou can afford", this.commas);
    this.expenses = this.expenses.toLocaleString();
    this.income = this.income.toLocaleString();
    this.calculate = this.calculate.toLocaleString();
    this.downPayment =this.downPayment.toLocaleString();
  }
}
