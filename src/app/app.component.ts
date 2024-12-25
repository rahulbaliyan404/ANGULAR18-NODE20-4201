import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ANGULAR18-NODE20-4201';
  status: boolean = false;

  interpolationMethod() {
    return "It is a return type value of interpolation method.";
  }
  inputTypeValue: string = "Rahul";
  inputTypeValue2: string = "Kumar";
  hiddenValue: boolean = false;
  hiddenValue2: boolean = false;
  checkStatus: boolean = false;
  message : string ="";

  clickEvent() {
    //alert("Click Event Triggred.");
    this.message ="Click Event Triggred.";
  }
  onClickEvent(event : any)
  {
    console.log(event.target.value);
  }
  onClickEvent1(event: any)
  {

    this.message = event.target.value + "  Add to Cart";
  }
}
