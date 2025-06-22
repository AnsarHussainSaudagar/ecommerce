import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenWordsValidator() : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const name = control.value;

        if(name === "admin"){
            return {nameForbidden : {name}}
        }
        
        return null;
    }
}