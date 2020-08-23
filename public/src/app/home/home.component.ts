import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
declare var jQuery: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  selectedIndex = -1;
  showContent(evt, index) {
    this.selectedIndex = index;
  }
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
      description:
        "Do you pay for a fitness membership?",
    },
    {
      description:
        "Do you pay for any streaming services?",
    },
    {
      description:
        "Do you pay a monthly phone bill?",
    },
    {
      description:
        "How much do you estimate you spend on dining out per month?",
    },
    {
      description:
        "Do you pay for child care or child support?",
    },
    {
      description:
        "Estimated monthly cost for reacreation and entertainment?",
    },
    {
      description:
        "Any other monthly expenses that aren't accounted for please add them here.",
    },
    {
      description:
        "What is your monthyl income per month after taxes?",
    },
    {
      description:
        "What is your total household income after taxes?",
    },
    {
      description:
        "Do you have income from any sources other than salary?",
    },
    {
      description:
        "Do you recieve any other monthly benefits(social security benefits, disability income, etc) ?",
    },
    {
      description:
        "Do you have any other sources of perpetual monthly income?",
    },
  
  ];
  numbersInForm: any = {};
  newObj = {};
  newArry: any = [];
  mortgageRateFound: any;
  calculate: number;
  newString: string = "";
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
    this.mortgageRateFound = [];
    const out = Object.assign(
      {},
      ...Object.values(this.numbersInForm).map((v, i) => ({ [i + 1]: v }))
    );
    console.log(out);
  }
}
