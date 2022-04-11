import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoPage } from './page/meteo/meteo.component'
import { HomePage } from './page/home/home.component'

const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'meteo', component: MeteoPage },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
