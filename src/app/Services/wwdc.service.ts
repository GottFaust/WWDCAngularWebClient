import {Injectable} from "@angular/core";
import {mod} from "../Model/mod";

@Injectable()
export class WWDCService {
  mods: mod[] = [
    new mod("Mod One"),
    new mod("Mod Two"),
    new mod("Mod Three"),
    new mod("Mod Four"),
    new mod("Mod Five"),
    new mod("Mod Six"),
    new mod("Mod Seven"),
    new mod("Mod Eight")
  ];
}
