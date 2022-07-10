import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicFormHost]'
})
export class DynamicFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
