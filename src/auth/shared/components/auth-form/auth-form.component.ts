import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "fitness-auth-form",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.scss"]
})
export class AuthFormComponent implements OnInit {
  @Output()
  submitted = new EventEmitter<FormGroup>();

  auth = this._fb.group({
    email: [null, [Validators.required, Validators.email]],
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
    this.submitted.emit(this.auth);
  }
}
