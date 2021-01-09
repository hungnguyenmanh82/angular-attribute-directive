import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTitleDirective]',
  // vd: <p appTitleDirective >
  exportAs: 'titleDirective',
})
export class TitleDirectiveDirective implements OnInit {
  // 'style.background-color': là css attribute của html tag chưa Directive nay
  @HostBinding('style.background-color')
  backgroundColor: string = 'yellow';

  ngOnInit(): void {}

  public highlight(color: string) {
    this.backgroundColor = color;
  }
}
