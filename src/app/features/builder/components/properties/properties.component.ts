import { Component, Input, OnInit } from '@angular/core';
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
      this.id = selected?.id;
    });
    //setInterval(() =>{if(this.properties) this.properties.name ='changed' },1000)
  }

}
