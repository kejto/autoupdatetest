import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@xplat-sample-electron-routing5/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  providers: [...ELECTRON_PROVIDERS]
})
export class XplatSampleElectronRouting5ElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: XplatSampleElectronRouting5ElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(
      parentModule,
      'XplatSampleElectronRouting5ElectronCoreModule'
    );
  }
}
