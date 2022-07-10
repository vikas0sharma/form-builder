import { Component, OnInit } from '@angular/core';
import { IFormItem } from '../../iform-item';
import { Properties } from '../../models/properties.model';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit, IFormItem {

  constructor() { }
  data?: Properties;
  ngOnInit(): void {
  }

}
