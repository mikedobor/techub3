import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Sign in form handler
  onSignIn(form: any) {
    console.log(JSON.stringify(form.value));
  }

}
