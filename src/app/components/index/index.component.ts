import { Component, OnInit } from '@angular/core';
import { NgForm, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  emailPattern: EmailValidator;


  constructor() { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

  onSignUp(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

}
