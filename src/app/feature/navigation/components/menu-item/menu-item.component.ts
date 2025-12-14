import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() name: string;
  @Input() id: number;
  @Output() hoverId = new EventEmitter<number>;

  public sendHoverId() {
    this.hoverId.emit(this.id);
  }
}
