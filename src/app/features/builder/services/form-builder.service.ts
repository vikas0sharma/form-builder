import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormItemComponent } from '../form-item-component';
import { FormItemType } from '../models/form-item-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {
  private _formItems: FormItemComponent[] = [FormItemComponent.createComponent('Untitled Form', FormItemType.Form)];
  private _selectedFormItem: FormItemComponent | null = null;

  selectedFormItem$: Subject<FormItemComponent | null> = new BehaviorSubject<FormItemComponent | null>(null);
  formItem$: Subject<FormItemComponent[]> = new BehaviorSubject<FormItemComponent[]>(this._formItems);

  addFormItem(formItemComponent: FormItemComponent) {
    this._formItems.push(formItemComponent);
    this.formItem$.next(this._formItems);
  }
  selectItem(id: string) {
    debugger;
    this._selectedFormItem = this._formItems.find(f => f.data.id === id) ?? null;
    this.selectedFormItem$.next(this._selectedFormItem);
  }
  updateItemType(type: FormItemType) {
    if (this._selectedFormItem) this._selectedFormItem.data.type = type;
    this.formItem$.next(this._formItems);
  }
  deleteItem(id: string) {
    this._formItems = this._formItems.filter(f => f.data.id !== id);
    this.formItem$.next(this._formItems);
  }
  cloneItem(id: string) {
    debugger;
    const original = this._formItems.find(f => f.data.id === id);
    const clone = original?.clone() as FormItemComponent;
    const index = this._formItems.indexOf(original as FormItemComponent);
    this._formItems.splice(index + 1, 0, clone);
    this.formItem$.next(this._formItems);
  }

}
