import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "fitness-auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.scss"]
})
export class AuthFormComponent implements OnInit {
  @Output()
  submit = new EventEmitter<FormGroup>();

  auth = this._fb.group({
    email: [null, Validators.email],
    password: [null, Validators.required]
  });

  get emailFormat() {
    const control = this.auth.get("email") as AbstractControl;
    return control.touched && control.hasError("email");
  }

  get passwordInvalid() {
    const control = this.auth.get("password") as AbstractControl;
    return control.touched && control.hasError("required");
  }
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    if (this.auth.invalid) {
      return;
    }
    this.submit.emit(this.auth);
  }
}
