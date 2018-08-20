import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';
import { UserpageComponent } from '../components/userpage/userpage.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: UserpageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
