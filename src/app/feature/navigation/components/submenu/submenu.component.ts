import { Component, Input } from '@angular/core';
import { InnerList } from '../../models/navigation.model';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent {
  @Input() submenu: InnerList[] | null;
}
