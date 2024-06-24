import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fan } from '../../models/fan.model';
import { FanService } from '../../tools/services/fan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { verificationAge } from '../../tools/validators/verification-age.validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {

    updateForm! : FormGroup
    fanToUpdate! : Fan
    index! : number

    constructor(
        private fanService : FanService,
        private router : Router,
        private formBuilder : FormBuilder,
        private activatedRoute : ActivatedRoute
    ){
        // récupère l'index transmis par la route
        this.index = activatedRoute.snapshot.params['index']

        // récupérer un fan par rapport a son id
        this.fanToUpdate = this.fanService.getById(this.index)

        // définition du formbuiler => formGroup
        this.updateForm = formBuilder.group({
            nom: [this.fanToUpdate.nom, Validators.required],
            dateNaissance: [this.fanToUpdate.dateNaissance,[ Validators.required, verificationAge(13)]],
            serieFavoris: formBuilder.array([])
        })

        this.fanToUpdate.serieFavoris?.forEach(element => {
            this.getSerieFavorisArray().push(this.formBuilder.control(element, Validators.required))
        })
    }

    getSerieFavorisArray() : FormArray{
        return this.updateForm.get('serieFavoris') as FormArray
    }

    ajout() : void {
        this.getSerieFavorisArray().push(this.formBuilder.control('', Validators.required))
    }

    delete(index : number) : void{
        this.getSerieFavorisArray().removeAt(index)
    }

    onSubmit() : void{
        this.fanService.update(this.index, this.updateForm.value)
    }
}
