import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {

  @Input() title:string;
  constructor() { }

  ngOnInit(): void {
  }

}
