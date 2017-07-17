import {Component} from "@angular/core";
import {WWDCService} from "../Services/wwdc.service";

@Component({
  selector: 'weapon-stats',
  templateUrl: './WeaponStats.component.html'
})

export class WeaponStatsComponent {

  wwdcService: WWDCService;

  constructor(private wwdcSvc: WWDCService){
    this.wwdcService = wwdcSvc;
  }
}
