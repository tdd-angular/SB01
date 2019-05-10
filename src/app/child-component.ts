import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-component',
  template: 'this is {{ name }} child!   <div *ngFor="let item of array; let i=index">{{i}}</div>'
})
export class ChildComponent {
  @Input() name = "";

  @Input() length = 0;

  public array;
  ngOnInit() {
    console.log(`  > ${this.name} on init`);
   this.array = new Array(this.length);
  }

  ngOnDestroy() {
    console.log(`  > ${this.name} on destroy`);
  }
}