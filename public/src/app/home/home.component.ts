import { Component, OnInit } from "@angular/core";
declare var jQuery: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public show: boolean = false;
  public formName: any = "Show";

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
        "How much do you estimate you spend per month for car maintenance?",
    },
    {
      description:
        "Do you have any monthly health/dental expenses(including health insurance, medical bills, prescription drugs) ?",
    },
    {
      description:
        "How much do you estimate you spend on groceries and essential supplies per month",
    },
    {
      description: "Do you pay for a fitness membership?",
    },
    {
      description: "Do you pay for any streaming services?",
    },
    {
      description: "Do you pay a monthly phone bill?",
    },
    {
      description:
        "How much do you estimate you spend on dining out per month?",
    },
    {
      description: "Do you pay for child care or child support?",
    },
    {
      description: "Estimated monthly cost for reacreation and entertainment?",
    },
    {
      description:
        "Any other monthly expenses that aren't accounted for please add them here.",
    },
    {
      description: "What is your total household income after taxes?",
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
  allNumbs: any = [];
  newObj = {};
  newArry: any = [];
  mortgageRateFound: any;
  calculate: any;
  expenses: any;
  downPayment: any;
  income: any;
  newString: string = "";
  constructor() {}

  toggle() {
    let count = this.numbersInForm.length;
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) this.formName = "count";
    else this.formName = "count+1";
  }

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
    let downPayment = allNumbs[allNumbs.length-1];
    let calculate = 0;
    let expenses = allNumbs[0];
    let income = allNumbs[14];
    if (allNumbs.length = 18) {
      for (var j = 1; j <= 16; j++) {
        if (j < 14) {
        expenses += allNumbs[j];
        }
        if (j >= 15) {
          income += allNumbs[j];
        }
        calculate = income - expenses;
      }
    }
    console.log(expenses)
    console.log(income)
    console.log(calculate)
    console.log(downPayment)
  }
}
