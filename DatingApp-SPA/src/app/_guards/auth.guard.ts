import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.toastr.error("You are not authorized");
    this.router.navigate(["/home"]);
    return false;
  }
}
