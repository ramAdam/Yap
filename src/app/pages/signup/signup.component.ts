import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createSignUpForm();
  }

  ngOnInit(): void {}

  private createSignUpForm() {
    this.signUpForm = this.fb.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    const { firstName, lastName, email, password } = this.signUpForm.value;
    console.log(`first name: ${firstName}, last name: ${lastName}`);
  }

  get firstName() {
    return this.signUpForm.get("firstName");
  }
  get lastName() {
    return this.signUpForm.get("lastName");
  }
  get email() {
    return this.signUpForm.get("email");
  }

  get password() {
    return this.signUpForm.get("password");
  }
}
