import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AboutComponent } from './components/about/about.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { AuthGuard } from './auth/auth.guard';
import { CatsComponent } from './components/cats/cats.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { BirdsComponent } from './components/birds/birds.component';
import { HamstersComponent } from './components/hamsters/hamsters.component';

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
  { path: 'features', component: FeaturesComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'animals', component: AnimalsComponent },
  {
    path: 'birds',
    component: BirdsComponent,
  },
  {
    path: 'hamsters',
    component: HamstersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
