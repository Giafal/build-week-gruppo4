import { EditComponent } from './edit/edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { EditBirdComponent } from './edit-bird/edit-bird.component';
import { EditHamsterComponent } from './edit-hamster/edit-hamster.component';

const routes: Routes = [
  { path: '', component: CrudComponent },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'edit-cat/:id',
    component: EditCatComponent,
  },
  {
    path: 'edit-bird/:id',
    component: EditBirdComponent,
  },
  {
    path: 'edit-hamster/:id',
    component: EditHamsterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
