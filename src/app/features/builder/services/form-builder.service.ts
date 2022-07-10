import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormItemComponent } from '../form-item-component';
import { FormItemType } from '../models/form-item-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  private _formItems: FormItemComponent[] = [];
  private _selectedFormItem: FormItemComponent | null = null;

  selectedFormItem$: Subject<FormItemComponent | null> = new BehaviorSubject<FormItemComponent | null>(null);
  formItem$: Subject<FormItemComponent[]> = new BehaviorSubject<FormItemComponent[]>([]);

  addFormItem(formItemComponent: FormItemComponent) {
    this._formItems.push(formItemComponent);
    this.formItem$.next(this._formItems);
  }
  selectItem(id: string) {
    this._selectedFormItem = this._formItems.find(f => f.data.id === id) ?? null;
    this.selectedFormItem$.next(this._selectedFormItem);
  }
  updateItemType(type: FormItemType) {
    if (this._selectedFormItem) this._selectedFormItem.data.type = type;
    this.formItem$.next(this._formItems);
  }

}
