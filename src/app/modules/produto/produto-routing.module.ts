import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoComponent,
    // canActivate: [PermissaoGuard],
    //canLoad: [AuthenticationGuard],
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
