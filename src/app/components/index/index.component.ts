import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../user.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  emailPattern: EmailValidator;


  constructor(private router: Router) { }
  user: User;

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log(form.value);
    form.reset();
    // Login check here
    this.router.navigateByUrl('home');
  }

  onSignUp(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

}
