import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { popUp } from "src/app/animations";

@Component({
  selector: "app-chat-window",
  templateUrl: "./chat-window.component.html",
  styleUrls: ["./chat-window.component.scss"],
  animations: [
    trigger("slide", [
      state(
        "open",
        style({
          transform: "translateX(0)",
        })
      ),
      state("close", style({ transform: "translateX(80%)" })),
      transition("open<=>close", [animate("0.1s")]),
    ]),
    popUp,
  ],
})
export class ChatWindowComponent implements OnInit {
  @Output() btnStatus = new EventEmitter<boolean>();
  isOpen: boolean;
  public dummyData = [
    {
      message:
        "Sed enim velit, condimentum nec tincidunt non, elementum sed nisi.",
      createdAt: new Date(),
      sender: {
        firstName: "Steve",
        lastName: "Smith",
        photoUrl:
          "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      },
    },
    {
      message:
        "Quisque ornare dapibus convallis. Nam tempor dui a nisl lobortis, sed gravida lectus laoreet. Nullam ornare dui magna. Duis in nisi libero.",
      createdAt: new Date(),
      sender: {
        firstName: "Bob",
        lastName: "Anderson",
        photoUrl: "https://semantic-ui.com/images/avatar2/large/kristy.png",
      },
    },
    {
      message:
        "Ut eu elit sodales leo ultricies pulvinar. Fusce iaculis magna gravida tempus congue. Ut sit amet nulla sed nisi cursus mattis quis at lacus. Proin commodo, justo in elementum scelerisque, sem urna vulputate enim, ac posuere purus diam ac velit. Sed enim velit, condimentum nec tincidunt non, elementum sed nisi. Cras pharetra dui eu scelerisque pharetra. Curabitur auctor feugiat nibh eget molestie. Duis scelerisque auctor mi, sit amet efficitur magna vulputate quis. Quisque ornare dapibus convallis. Nam tempor dui a nisl lobortis, sed gravida lectus laoreet. Nullam ornare dui magna. Duis in nisi libero. Praesent eu tristique felis. Nunc vestibulum enim et justo dignissim lacinia nec et diam.",
      createdAt: new Date(),
      sender: {
        firstName: "Molly",
        lastName: "Jones",
        photoUrl: "https://semantic-ui.com/images/avatar2/large/molly.png",
      },
    },
    {
      message:
        "Quisque ornare dapibus convallis. Nam tempor dui a nisl lobortis, sed gravida lectus laoreet. Nullam ornare dui magna. Duis in nisi libero.",
      createdAt: new Date(),
      sender: {
        firstName: "Sally",
        lastName: "Jones",
        photoUrl: "https://semantic-ui.com/images/avatar2/large/elyse.png",
      },
    },
  ];

  constructor() {
    this.isOpen = false;
  }

  ngOnInit(): void {}

  toggleAnimation() {
    this.isOpen = !this.isOpen;
    this.btnStatus.emit(this.isOpen);
    // console.log(`Button clicked ${this.isOpen}`);
  }
}
