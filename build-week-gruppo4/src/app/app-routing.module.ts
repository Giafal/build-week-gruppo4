import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AboutComponent } from './components/about/about.component';
import { DogsComponent } from './components/dogs/dogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule),
    canActivate: [AuthGuard],
  },
  {path: 'features',
  component: FeaturesComponent},
  {path: 'faqs',
  component: FaqsComponent},
  {path: 'about',
  component: AboutComponent},
  {path: 'dogs',
  component: DogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
