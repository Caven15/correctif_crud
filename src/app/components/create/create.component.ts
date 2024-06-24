import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FanService } from '../../tools/services/fan.service';
import { verificationAge } from '../../tools/validators/verification-age.validator';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrl: './create.component.scss'
})
export class CreateComponent {
    createForm: FormGroup

    constructor(private fanService: FanService, private formBuilder: FormBuilder, private router: Router) {
        this.createForm = formBuilder.group({
            nom: ['', Validators.required],
            dateNaissance: ['',[ Validators.required, verificationAge(13)]],
            serieFavoris: formBuilder.array([])
        })
    }

    getSerieFavorisArray() : FormArray{
        return this.createForm.get('serieFavoris') as FormArray
    }

    ajout() : void {
        this.getSerieFavorisArray().push(this.formBuilder.control('', Validators.required))
    }

    delete(index : number) : void{
        this.getSerieFavorisArray().removeAt(index)
    }

    onSubmit(): void {
        console.log(this.createForm.value);
        this.fanService.create(this.createForm.value)
        console.log("Fan créer avec succès")
        this.router.navigate(['list'])
    }
}
