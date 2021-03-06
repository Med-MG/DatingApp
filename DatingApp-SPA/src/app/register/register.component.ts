import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private authServices: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  register() {
    this.authServices.register(this.model).subscribe(
      () => {
        this.toastr.success("registration successful");
      },
      error => {
        this.toastr.error(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
