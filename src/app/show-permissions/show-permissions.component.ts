import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-permissions',
  templateUrl: './show-permissions.component.html',
  styleUrls: ['./show-permissions.component.scss'],
})
export class ShowPermissionsComponent implements OnInit {
  // ở Directive sẽ truy nhập Array này của <AppComponent>
  public permissions: string[] = ['ko có directive'];

  constructor() {}

  ngOnInit(): void {}
}
