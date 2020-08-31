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
  count: number = 0;
  expenses: any;
  leftSide: number;
  rightSide: number;
  isNaN: Function = Number.isNaN;
  monthlyPayment: number;
  formula: number;
  brackets: number;
  house: any;
  currentValue: any;
  downPayment: any;
  income: any;
  mortgage: any;
  newString: string = "";
  visibleIndex:number = 0;


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
    this.mortgageRateFound = 0.0025;
    this.leftSide = Math.pow(1 + this.mortgageRateFound, 360);
    this.rightSide = Math.pow(1 + this.mortgageRateFound, 360) - 1;
    this.brackets = (this.mortgageRateFound * this.leftSide) / (this.rightSide);
    this.formula = this.calculate / this.brackets + this.downPayment;
    this.finalAnswer = Math.trunc(this.formula);
    this.commas = this.finalAnswer.toLocaleString();
    console.log("yoou can afford", this.commas);
    this.expenses = this.expenses.toLocaleString();
    this.income = this.income.toLocaleString();
    this.calculate = this.calculate.toLocaleString();
    this.downPayment =this.downPayment.toLocaleString();
  }
}
