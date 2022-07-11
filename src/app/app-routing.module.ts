import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './components/root/root.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'root',
    loadChildren : () => import('./components/root/root.module').then(m => m.RootModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
