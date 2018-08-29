import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { IndexComponent } from './components/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ShareComponent } from './components/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    MessagingComponent,
    IndexComponent,
    NavBarComponent,
    SummaryComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
