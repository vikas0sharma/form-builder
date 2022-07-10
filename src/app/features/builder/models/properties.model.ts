import { FormItemType } from "./form-item-type.enum";

export class Properties {
	id: string = '';
	name: string = '';
	isRequired: boolean = false;
	type: FormItemType = FormItemType.TextField;

}