import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail/:id', component: GifDetailComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
