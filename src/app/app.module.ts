import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthService } from './services/auth/auth.service'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { Gpt3Component } from './modules/components/gpt3/gpt3.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // Gpt3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [HttpClientModule]
})
export class AppModule { }
