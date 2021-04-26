import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

// vd: <p appTitleDirective #variable2="titleDirective">
@Directive({
  selector: '[appTitleDirective]',
  // dùng cho #var reference
  exportAs: 'titleDirective',
})
export class TitleDirectiveDirective implements OnInit {
  // cách 2:
  // 'style.background-color': là css attribute của html tag chưa Directive nay
  @HostBinding('style.background-color')
  backgroundColor: string = 'yellow';

  ngOnInit(): void {}

  public highlight(color: string) {
    this.backgroundColor = color;
  }
}
