import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

/**
 * selector: '<appTestDirective>' để dùng directive như <component> chính là <div>
 *  Angular material component dùng cách này
 * vd:
 * <appTestDirective [textColor]="'red'" [backgroundColor]="'green'"> </appTestDirective>
 */

/**
 * selector: '[appTestDirective]' để dùng directive như @input attribute của html tag <div>, <input>, <p>...
 *              có thể dùng ở *.html với [] hoặc không. có [] là dùng với @input
 *
 * vd:
 *  <h1 appTestDirective [textColor]="'red'" [backgroundColor]="'green'">Directive:</h1>
 */
// vd: <p appTestDirective #variable1="testDirective">
@Directive({
  selector: '[appTestDirective]',
  // selector: '<appTestDirective>'
  // dùng cho #var reference
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
    /**
     * thay đổi các attribute của html Tag chuẩn ở source code
     */
    this.element.nativeElement.style.backgroundColor = color;
    this.element.nativeElement.style.color = 'blue';
  }
}
