import { AbstractControl, ValidatorFn } from "@angular/forms";

export function verificationAge(ageMinimum: number): ValidatorFn {
    return (control: AbstractControl) => {
        let dateNaissance: number = new Date(control.value).getFullYear()
        if (new Date().getFullYear() - ageMinimum <= dateNaissance) {
            return { ageMinimumError: "Vous avez moins de " + ageMinimum + " ans" }
        }
        return null
    }
}