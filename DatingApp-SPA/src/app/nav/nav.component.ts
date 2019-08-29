import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.toastr.success("logged in successfully");
      },
      error => {
        this.toastr.error(error);
      },
      () => {
        this.router.navigate(["/members"]);
      }
    );
  }

  loggin() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    this.toastr.info("logged out");
    this.router.navigate(["/home"]);
  }
}
