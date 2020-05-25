import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ChatComponent } from "./pages/chat/chat.component";
import { ChatInputComponent } from "./pages/chat/components/chat-input/chat-input.component";
import { ChatWindowComponent } from "./pages/chat/components/chat-window/chat-window.component";
import { ChatroomMessageComponent } from "./pages/chat/components/chatroom-message/chatroom-message.component";
import { ChatroomTitleBarComponent } from "./pages/chat/components/chatroom-title-bar/chatroom-title-bar.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { ChatroomListComponent } from "./pages/chat/components/chatroom-list/chatroom-list.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    ChatComponent,
    ChatWindowComponent,
    ChatInputComponent,
    ChatroomTitleBarComponent,
    ChatroomMessageComponent,
    ChatroomListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
