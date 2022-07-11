import { Component, OnInit } from '@angular/core';
import { IFormItem } from '../../iform-item';
import { Properties } from '../../models/properties.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, IFormItem {

  constructor() { }
  data?: Properties | undefined;
  ngOnInit(): void {
  }

}
