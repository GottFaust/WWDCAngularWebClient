import {Component, OnInit} from "@angular/core";
import {WWDCService} from "../Services/wwdc.service";
import {mod} from "../Model/mod";

@Component({
  selector: 'mods-grid',
  templateUrl: './Mods.component.html'
})

export class ModsComponent implements OnInit {

  mods : mod[];

  constructor(private wwdcService: WWDCService){}

  ngOnInit(): void {
    this.mods = this.wwdcService.mods;
  }
}
