import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private toastr: ToastrService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        // this.alertify.success("logged in successfully");
        this.toastr.success("logged in successfully");
      },
      error => {
        // this.alertify.error(error);
        this.toastr.error(error);
      }
    );
  }

  loggin() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    // this.alertify.message("logged out");
    this.toastr.info("logged out");
  }
}
