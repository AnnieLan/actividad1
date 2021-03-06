import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./ventana/pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./ventana/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina3',
    loadChildren: () => import('./ventana/pagina3/pagina3.module').then( m => m.Pagina3PageModule)
  },
  {
    path: 'pagina4',
    loadChildren: () => import('./ventana/pagina4/pagina4.module').then( m => m.Pagina4PageModule)
  },
  {
    path: 'pagina5',
    loadChildren: () => import('./ventana/pagina5/pagina5.module').then( m => m.Pagina5PageModule)
  },
  {
    path: 'pagina6',
    loadChildren: () => import('./ventana/pagina6/pagina6.module').then( m => m.Pagina6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
