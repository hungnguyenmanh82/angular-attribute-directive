import { HostDirectiveDirective } from './host-directive.directive';
import { TitleDirectiveDirective } from './title-directive.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { ShowPermissionsComponent } from './show-permissions/show-permissions.component';

@NgModule({
  declarations: [AppComponent, TestDirectiveDirective, TitleDirectiveDirective, HostDirectiveDirective, ShowPermissionsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
