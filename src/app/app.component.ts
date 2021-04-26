import { TestDirectiveDirective } from './test-directive.directive';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'b4-directive';



  /**
   * <p appTestDirective #variable1="testDirective">
   * cách gọi #varaible từ TypeScript giống hệt component
   */
  @ViewChild('variable1') directive: TestDirectiveDirective;
  public highlight(color: string) {
    this.directive.highlight(color);
  }
}
