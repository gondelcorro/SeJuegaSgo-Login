import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //Cuando la ruta sea la especificada en el path, redirigime al componente o a una ruta en particular
  {path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], //El use # lo agrego como estrategia en las URL
  exports: [RouterModule]
})
export class AppRoutingModule { }
