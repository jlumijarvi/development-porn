import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DpComponent } from './dp.component';
import { ThemeWrapperComponent } from './theme-wrapper/theme-wrapper.component';
import { ThemeService } from '../themes/theme.service';

@NgModule({
  declarations: [
    DpComponent,
    ThemeWrapperComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ThemeService],
  bootstrap: [DpComponent]
})
export class AppModule { }
