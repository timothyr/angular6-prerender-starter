import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <p>
      shell works!
      <button mat-raised-button class="primary-button">Primary</button>
    </p>
  `,
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
