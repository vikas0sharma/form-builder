import { Component, Input, OnInit } from '@angular/core';
import { FormItemType } from '../../models/form-item-type.enum';
import { Properties } from '../../models/properties.model';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'form-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  constructor(private formBuilderService: FormBuilderService) {
  }
  properties: any;
  id: string | undefined = '';

  ngOnInit(): void {
    this.formBuilderService.selectedFormItem$.subscribe(selected => {
      this.properties = selected?.data;
      this.id = selected?.data.id;
    });
  }
  onTypeChange($event: any) {
    const value = Number($event.value);
    if (value != -1) {
      this.formBuilderService.updateItemType(value);
    }
  }

}
