import { Component } from '@angular/core';
import { Fan } from '../../models/fan.model';
import { FanService } from '../../tools/services/fan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
    fan! : Fan

    constructor(
        private fanService : FanService,
        private activatedRoute : ActivatedRoute
    ){
        let index = activatedRoute.snapshot.params['index']
        this.fan = this.fanService.getById(index)
    }
}
