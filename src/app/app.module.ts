import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { MessagingComponent } from './components/messaging/messaging.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    UserpageComponent,
    MessagingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
