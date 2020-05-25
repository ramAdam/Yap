import { Component, OnInit } from "@angular/core";
import { popUp } from "src/app/animations";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
  animations: [popUp],
})
export class ChatComponent implements OnInit {
  isOpen: boolean;
  arrowOpen: boolean;
  constructor() {
    this.isOpen = false;
    this.arrowOpen = this.isOpen;
  }

  ngOnInit(): void {}

  toggleAnimation(event: boolean) {
    // console.log(`${this.isOpen}`);
    this.isOpen = event;
    // console.log(`Chat window says ${this.isOpen}`);
  }
}
