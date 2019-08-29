import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";
import { ToastrService } from "ngx-toastr";
import { MemberListComponent } from "./member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthGuard } from "./_guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    ListsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      closeButton: true
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, ErrorInterceptorProvider, ToastrService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
