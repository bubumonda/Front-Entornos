import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DatakyonCommonModule } from '../datakyon-common/datakyon-common.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginFormComponent } from './components/login/components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration/components/registration-form/registration-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NotificationComponent } from './components/login/components/notification/notification.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    HeaderLogoComponent,
    NotificationComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DatakyonCommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    HttpClientModule
  ],
})
export class AuthModule {}
