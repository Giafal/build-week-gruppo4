import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [CrudComponent, EditComponent],
  imports: [CommonModule, CrudRoutingModule, FormsModule],
})
export class CrudModule {}
