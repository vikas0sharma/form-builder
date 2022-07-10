import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DynamicFormDirective } from './builder/directives/dynamic-form.directive';
import { IFormItem } from './builder/iform-item';
import { FormBuilderService } from './builder/services/form-builder.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css'],
})
export class BuilderComponent implements OnInit {

  @ViewChild(DynamicFormDirective, { static: true }) dynamicFormHost!: DynamicFormDirective;

  constructor(private formBuilderService: FormBuilderService) { }
  ngOnInit(): void {
    const viewContainerRef = this.dynamicFormHost?.viewContainerRef;
    if (viewContainerRef) {
      this.formBuilderService.formItem$.subscribe(items => {
        viewContainerRef.clear();
        items.forEach(item => {
          const componentRef = viewContainerRef.createComponent<IFormItem>(item.component);
          componentRef.instance.data = item.data;
          // add `click` event handler to the component
          fromEvent(componentRef.location.nativeElement, 'click')
            .subscribe(() => this.formBuilderService.selectItem(item.id));
        });
      });
    }
  }

}
