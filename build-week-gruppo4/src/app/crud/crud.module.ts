import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { EditBirdComponent } from './edit-bird/edit-bird.component';
import { EditHamsterComponent } from './edit-hamster/edit-hamster.component';

@NgModule({
  declarations: [CrudComponent, EditComponent, EditCatComponent, EditBirdComponent, EditHamsterComponent],
  imports: [CommonModule, CrudRoutingModule, FormsModule],
})
export class CrudModule {}
