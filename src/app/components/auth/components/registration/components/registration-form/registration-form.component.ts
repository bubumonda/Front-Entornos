import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { dataUsers } from 'src/app/data/users-config';
import { AuthService } from '../../../../services/auth.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  @Output() goSignIn: EventEmitter<any> = new EventEmitter();
  @Output() goForgotPassword: EventEmitter<any> = new EventEmitter();
  registrando: boolean = false;
  /**
   * formulario reactivo
   */
  form!: UntypedFormGroup;

  usuarios = dataUsers.users;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private titleService: Title,
    private router: Router,
    private authService:AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.titleService.setTitle('Registro - Ukyo');
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      fechaRegistro: [new Date()],
    });
  }

  registrar() {
    if (this.form.valid) {
      const username = this.form.value.usuario;
      const email = this.form.value.email;
      const password = this.form.value.password;

      // let fechaRegistro = this.form.value.fechaRegistro;
      // fechaRegistro = fechaRegistro.toLocaleDateString();
      // fechaRegistro.format('DD')
      this.authService.register({username,password,email})
        .pipe(
          catchError(err=> of(false) )

        )
        .subscribe(res=>{
          if(!res){
            this.form.controls.usuario.setErrors({ existe: true });
            this.form.controls.email.setErrors({ existe: true });
            this.form.controls.password.setErrors({ existe: true });
          }else{
            localStorage.setItem('token', res.token);
            localStorage.setItem('id',res.id);
            this.router.navigate(['/home']);
          }
        })


    }
  }
}
