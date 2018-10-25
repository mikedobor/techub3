import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {


  currentAd: string;

  user = {
    fullname: 'James Edwards',
    title: 'UI/UX Designer',
    followers: 400,
    following: 80,
    posts: 32
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentAd = 'DevUps is looking for a designer to handle their product designs. Both full-time and freelance application is welcomed. Ad ...';
  }

  onOpenAd() {
    this.router.navigate(['']);
  }

}
