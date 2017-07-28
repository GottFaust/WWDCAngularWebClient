import {Component, Input} from "@angular/core";
import {WWDCService} from "../Services/wwdc.service";

@Component({
  selector: 'result-component',
  templateUrl: './Results.component.html'
})

export class ResultsComponent {

  wwdcService: WWDCService;

  constructor(private wwdcSvc: WWDCService){
    this.wwdcService = wwdcSvc;
  }
}
