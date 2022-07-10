import { Type } from "@angular/core";
import { ParagraphComponent } from "./components/paragraph/paragraph.component";
import { TextFieldComponent } from "./components/text-field/text-field.component";
import { FormItemType } from "./models/form-item-type.enum";
import { Properties } from "./models/properties.model";

export class FormItemComponent {
	id: string;

	get component(): Type<any> {
		switch (this.formItemType) {
			case FormItemType.TextField: {
				return TextFieldComponent;
			}
			case FormItemType.Paragraph: {
				return ParagraphComponent;
			}
		}
	}

	private constructor(public formItemType: FormItemType, public data: Properties) {
		this.id = this.uuidv4();
	}

	private uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
	public static CreateComponent(name: string, type: FormItemType) {
		const property = new Properties();
		property.name = name;
		property.type = type;
		return new FormItemComponent(type, property);
	}
}
