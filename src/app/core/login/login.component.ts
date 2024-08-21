import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../shared/components/login-layout/login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginLayoutComponent,
            ReactiveFormsModule
  ],
  providers:[
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup
  constructor(
    private loginService: LoginService,
    private toastService: ToastrService,
    private router: Router
  ){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
      
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: (value) => {
        this.toastService.success(value.descricao)
        this.router.navigate(['/produto'])
      },
      error: (value) => this.toastService.error(value.error.descricao ? value.error.descricao : 'Não foi possível se conectar aos nossos servidores, por favor, tente mais tarde!')
    })
  }
}
