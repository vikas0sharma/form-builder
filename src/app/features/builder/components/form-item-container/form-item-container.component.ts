import { Component, Input, OnInit } from '@angular/core';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'form-item-container',
  templateUrl: './form-item-container.component.html',
  styleUrls: ['./form-item-container.component.css']
})
export class FormItemContainerComponent implements OnInit {
  isSelected: boolean = false;
  constructor(private formBuilderService: FormBuilderService) { }
  @Input() id: string | undefined = '';
  ngOnInit(): void {
    this.formBuilderService.selectedFormItem$.subscribe(s => {
      this.isSelected = s?.data.id === this.id;
    });
  }

}
