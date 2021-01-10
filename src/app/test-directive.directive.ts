import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

// vd: <p appTestDirective #variable1="testDirective">
@Directive({
  selector: '[appTestDirective]',
  exportAs: 'testDirective',
})
export class TestDirectiveDirective implements OnInit {
  // @input[], @output() dùng giống hệt như với Angular Component
  // <h1 appTestDirective [textColor]="'red'" [backgroundColor]="'green'">Directive:</h1>
  @Input() textColor: string;
  @Input() backgroundColor: string;

  // element chinh la HTMLElement chứa Directive này
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    // chú ý các tên chính là tên ở CSS => rất dễ tra cứu
    // nếu ko ta có thể ép kiểu để show tên hàm ok
    if (this.backgroundColor) {
      this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    }
    if (this.textColor) {
      this.element.nativeElement.style.color = this.textColor;
    }
  }

  // bắt event liên quan tới HTMLElement
  // 'mouseenter': là event
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  // bắt event liên quan tới HTMLElement
  // 'mouseleave': là event
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('white');
  }

  public highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
    this.element.nativeElement.style.color = 'blue';
  }
}
