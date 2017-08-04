import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DpComponent } from './dp.component';
import { ThemeWrapperComponent } from './theme-wrapper/theme-wrapper.component';
import { ThemeService } from '../themes/theme.service';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    DpComponent,
    ThemeWrapperComponent,
    ContentWrapperComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ThemeService],
  bootstrap: [DpComponent]
})
export class AppModule { }
