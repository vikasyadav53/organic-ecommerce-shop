import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderFooterModule } from './header-footer/header-footer.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    HeaderFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
