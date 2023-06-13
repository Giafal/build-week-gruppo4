import { Component , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterData } from 'src/app/interfaces/register-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('f')
  form!: NgForm

  constructor(private authsvc: AuthService){

  }

  data:RegisterData = {
    email:'',
    password:'',
    name:'',
    surname: '',
  }

  register(){
    this.authsvc.signUp(this.data).subscribe(accessData => {
      alert(accessData.user.name)

    })
  }

  ngOnInit():void{

  }

}



