import { NgModule } from '@angular/core';
import { XplatSampleElectronRouting5ElectronCoreModule } from '@xplat-sample-electron-routing5/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, XplatSampleElectronRouting5ElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
