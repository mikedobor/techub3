import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { IndexComponent } from './components/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ShareComponent } from './components/share/share.component';
import { NewPostComponent } from './components/userpage/new-post/new-post.component';
import { UserDetailsComponent } from './components/userpage/user-details/user-details.component';
import { FeedComponent } from './components/userpage/feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    MessagingComponent,
    IndexComponent,
    NavBarComponent,
    SummaryComponent,
    ShareComponent,
    NewPostComponent,
    UserDetailsComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
