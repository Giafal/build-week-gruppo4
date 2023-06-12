import { NgModule } from '@angular/core';

import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Alarm, App, Bookmark } from 'ng-bootstrap-icons/icons';


const icons = {
  Alarm,
  App,
  Bookmark
};

@NgModule({
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }
