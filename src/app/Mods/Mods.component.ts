import {Component, Input} from "@angular/core";
import {mod} from "../Model/mod";
import {WWDCService} from "../Services/wwdc.service";

@Component({
  selector: 'mod-component',
  templateUrl: './Mods.component.html'
})

export class ModsComponent {

  @Input() mod: mod;
  @Input() wwdcService: WWDCService;

}
