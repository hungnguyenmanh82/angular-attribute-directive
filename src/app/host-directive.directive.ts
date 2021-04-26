import { ShowPermissionsComponent } from './show-permissions/show-permissions.component';
import { AppComponent } from './app.component';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

// vd: <p appTitleDirective #variable2="titleDirective">
@Directive({
  selector: '[appHostDirective]',
  // dùng cho #var reference
  exportAs: 'HostDirective',
})
export class HostDirectiveDirective implements OnInit {
  /**
   * Ứng dụng cho mục đích Validation Form rất hay
   */
  constructor(private host: ShowPermissionsComponent) {}

  ngOnInit(): void {
    this.host.permissions = ['có directive1', 'truy cập Host component', 'permissions'];
  }
}
