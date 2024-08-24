import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { MainComponent } from './core/main/main.component';

export const routes: Routes = [
    {
        path: "login",
        component:LoginComponent
    },
    {
      path: '',
      component: MainComponent,
      canActivate: [AuthenticationGuard], // Protegendo as rotas com AuthGuard
      children: [
        {
          path: 'produto',
          canLoad: [AuthenticationGuard],
          data: {
            animationState: 'ProdutoModule',
          },
          loadChildren: () => import('./modules/produto/produto.module').then(m => m.ProdutoModule),
        },
        // Outras rotas protegidas vão aqui
      ]
    }
      
];
