import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { dataUsers } from 'src/app/data/users-config';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { catchError, of, pipe } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/auth/services/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() goSignIn: EventEmitter<any> = new EventEmitter();
  @Output() goForgotPassword: EventEmitter<any> = new EventEmitter();

  /**
   * formulario reactivo
   */
  form!: UntypedFormGroup;

  /**
   * número de veces que se ha intentado loguear
   */
  numberTries = { tries: 0 };
  maxNumberTries = 3;

  usuarios = dataUsers.users;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private titleService: Title,
    public dialog: MatDialog,
    private authService:AuthService,
    private router:Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.titleService.setTitle('Login - Datakyon');
    if (localStorage.getItem('token')) {
      //location.href = 'http://www.datakyon.com:54766/';
    }
    localStorage.removeItem('token');
    console.log(this.usuarios);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]],
    });
  }

  ingresar() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.authService.login({username, password})
        .pipe(
          catchError(err=> of(false) )

        )
        .subscribe(res=>{
          if(res){
            this.openDialog(username, '');
            localStorage.setItem('token', res.token);
            localStorage.setItem('id',res.id);
            this.router.navigate(['/home']);
          }else{
            this.numberTries.tries++;
            if (this.numberTries.tries === 3) {
              this.form.controls.username.disable();
              this.form.controls.password.disable();
              alert('Ha superado el número de intentos permitidos');
            } else {
              this.form.controls.username.setErrors({ incorrect: true });
            }
          }
        })

      // const usuario = this.usuarios.find(
      //   (user) => user.email === email && user.password === password
      // );
      // if (usuario) {
      //   this.openDialog(usuario.name, '');
      //   setTimeout(() => {
      //     localStorage.setItem('token', usuario.token);
      //     location.href = 'http://www.datakyon.com:54766/';
      //   }, 4910);
      //  }else {
      //   this.numberTries.tries++;
      //   if (this.numberTries.tries === 3) {
      //     this.form.controls.email.disable();
      //     this.form.controls.password.disable();
      //     alert('Ha superado el número de intentos permitidos');
      //   } else {
      //     this.form.controls.email.setErrors({ incorrect: true });
      //   }
      // }
    }
  }

  openDialog(nameUser: string, tipo: string): void {
    const dialogRef = this.dialog.open(NotificationComponent, {
      data: { name: nameUser, tipo: tipo },
    });
  }
}
