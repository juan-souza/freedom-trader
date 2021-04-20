import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export class FormsValidations {


    //Verifica Validações nos campos do Formulário
    //recursivamente
    static varifyFormsValidations(formGroup: FormGroup) {

        Object.keys(formGroup.controls).forEach(field => {
            const fieldControl = formGroup.get(field);
            fieldControl.markAsTouched();
            fieldControl.markAsDirty();

            if (fieldControl instanceof FormGroup) {
                this.varifyFormsValidations(fieldControl)
            }

        })

    }

    //Validação do campos se é valido e alterado
    static validTouched(field: AbstractControl) {
        return (!field.valid && (field.touched || field.dirty))
    }


    //Validação de dois campos como Password1 = Password2
    static equalsTo(otherField: string) {
        const validator = (formControl: FormControl) => {
            if (otherField == null) {
                throw new Error('É necessário informar um campo.');
            }

            if (!formControl.root || !(<FormGroup>formControl.root).controls) {
                return null;
            }

            const field = (<FormGroup>formControl.root).get(otherField);

            if (!field) {
                throw new Error('É necessário informar um campo válido.');
            }

            if (field.value !== formControl.value) {
                return { equalsTo: otherField };
            }

            return null;
        };
        return validator;
    }




    //Padronização de mensagens de Erros
    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
        const config = {
            'required': `${fieldName} é obrigatório.`,
            'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
            'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
            'email': 'E-mail inválido.',
            'cepInvalido': 'CEP inválido.',
            'emailInvalido': 'Email já cadastrado!',
            'equalsTo': 'Campos não são iguais',
            'pattern': 'Campo inválido'
        };

        return config[validatorName];
    }
}