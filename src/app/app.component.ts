import { Component } from '@angular/core';
import {WWDCService} from "./Services/wwdc.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  wwdcService: WWDCService;

  constructor(private wwdcSVC: WWDCService){
    this.wwdcService = wwdcSVC;
  }
}
