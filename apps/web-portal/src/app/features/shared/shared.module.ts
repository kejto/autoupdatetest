import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@xplat-sample-electron-routing5/web';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
