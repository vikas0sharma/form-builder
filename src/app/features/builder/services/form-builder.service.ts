import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormItemComponent } from '../form-item-component';

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
    this._selectedFormItem = this._formItems.find(f => f.id === id) ?? null;
    this.selectedFormItem$.next(this._selectedFormItem);
  }

}
