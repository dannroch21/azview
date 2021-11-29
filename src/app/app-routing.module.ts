import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'covid',
    loadChildren: () => import('./pages/covid/covid.module').then( m => m.CovidPageModule)
  },
  {
    path: 'ebola',
    loadChildren: () => import('./pages/ebola/ebola.module').then( m => m.EbolaPageModule)
  },
  {
    path: 'hantavirus',
    loadChildren: () => import('./pages/hantavirus/hantavirus.module').then( m => m.HantavirusPageModule)
  },
  {
    path: 'h5n1',
    loadChildren: () => import('./pages/h5n1/h5n1.module').then( m => m.H5n1PageModule)
  },
  {
    path: 'dengue',
    loadChildren: () => import('./pages/dengue/dengue.module').then( m => m.DenguePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
