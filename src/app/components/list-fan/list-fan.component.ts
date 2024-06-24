import { Component } from '@angular/core';
import { Fan } from '../../models/fan.model';
import { FanService } from '../../tools/services/fan.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-fan',
    templateUrl: './list-fan.component.html',
    styleUrl: './list-fan.component.scss'
})
export class ListFanComponent {

    listeFan: Fan[]

    constructor(private fanService: FanService, private router: Router) {
        this.listeFan = fanService.getAll()
    }

    // Afficher détail
    afficherDetail(index: number): void {
        this.router.navigate(['detail', index])
    }

    // Réaliser un update
    afficherUpdate(index: number): void {
        this.router.navigate(['update', index])
    }

    // Réaliser une suppression
    supprimerFan(index: number): void {
        this.fanService.delete(index)
    }
}
