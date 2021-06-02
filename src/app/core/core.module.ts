import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './views/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { LoadingToolbarComponent } from './components/loading-toolbar/loading-toolbar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    MainToolbarComponent,
    LoadingToolbarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ]
})
export class CoreModule {
  /**
  * Core Module can only be loaded once, do it from AppModule
  * @param parentModule the parent module, which is self (optional, and does not include self initialization)
  */
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
