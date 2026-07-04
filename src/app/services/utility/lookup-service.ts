import { Injectable } from '@angular/core';
import { ComponentViewEnum } from '../../models/enums/component-view.model';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  public componentView = ComponentViewEnum.None;
}
