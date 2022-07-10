import { Component, OnInit } from '@angular/core';
import { IFormItem } from '../../iform-item';
import { Properties } from '../../models/properties.model';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent implements OnInit, IFormItem {

  constructor() { }
  data?: Properties;

  ngOnInit(): void {
  }

}
