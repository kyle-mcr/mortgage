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
  cards = [
    {
      title: "Expenses",
      description: "Do you have a monthly student payment?",
      value: 0,
    },
    {
      title: "Expenses",
      description: "Do you have a monthly car loan payment?",
      value: 0,
    },
    {
      title: "Expenses",
      description: "Do you have a monthly car insurance payment?",
      value: 0,
    },
    {
      title: "Expenses",
      description:
        "How much do you estimate you spend on gas for your car monthly?",
      value: 0,
    },
    {
      title: "Expenses",
      description: "How much do you estimate you spend per month for ",
      value: 0,
    },
    {
      title: "Expenses",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      value: 0,
    },
    {
      title: "Expenses",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      value: 0,
    },
    {
      title: "Expenses",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      value: 0,
    },
    {
      title: "Expenses",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      value: 0,
    },
  ];
  numbersInForm: any = {};
  newArry: any = [];
  mortgageRateFound: any;
  calculate: number;
  newString: string = "";
  constructor() {}

  ngOnInit() {
    (function ($) {
      $(document).ready(function () {
        $("button").click(function () {
          $("#jumbo, #fadeButton").hide(1000);
          $("form").show(900);
        });
      });
    })(jQuery);
  }

  getClicked() {
    this.mortgageRateFound = [];
    for (let key in this.numbersInForm) {
      if (this.numbersInForm[key] == true) {
        this.newArry.push(key);
      }
    }
  }
}
