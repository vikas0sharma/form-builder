import { Component, OnInit } from '@angular/core';
import { FormItemComponent } from '../../form-item-component';
import { FormItemType } from '../../models/form-item-type.enum';
import { FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'form-item-options',
  templateUrl: './form-item-options.component.html',
  styleUrls: ['./form-item-options.component.css']
})
export class FormItemOptionsComponent implements OnInit {

  constructor(private formBuilderService: FormBuilderService) { }

  addSingleLineText() {
    this.formBuilderService.addFormItem(FormItemComponent.CreateComponent('single line text', FormItemType.TextField));
  }
  addParagraphText() {
    this.formBuilderService.addFormItem(FormItemComponent.CreateComponent('paragraph text', FormItemType.Paragraph));
  }
  ngOnInit(): void {
  }

}
