import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@xplat-sample-electron-routing5/web';

@Component({
  selector: 'xplat-sample-electron-routing5-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
