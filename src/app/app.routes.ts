import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
    {
        path: "login",
        component:LoginComponent
    },
    {
        path: 'produto',
        canLoad: [AuthenticationGuard],
        data: {
          animationState: 'ProdutoModule',
        },
        loadChildren: () => import('./modules/produto/produto.module').then(m => m.ProdutoModule),
      },
];
