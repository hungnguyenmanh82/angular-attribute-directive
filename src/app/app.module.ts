import { TitleDirectiveDirective } from './title-directive.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestDirectiveDirective } from './test-directive.directive';

@NgModule({
  declarations: [AppComponent, TestDirectiveDirective, TitleDirectiveDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
