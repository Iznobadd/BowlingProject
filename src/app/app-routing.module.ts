import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page/page-home/page-home.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: '**', component: PageHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
