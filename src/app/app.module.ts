import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PassCodeComponent } from './components/pass-code/pass-code.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FooterBottomComponent } from './components/footer/footer-bottom/footer-bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PassCodeComponent,
    ResetPasswordComponent,
    FooterBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
