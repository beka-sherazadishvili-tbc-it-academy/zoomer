import { NgModule } from '@angular/core';
import { NavigationRoutingModule } from './navigation-routing.module';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';
import { NavigationComponent } from './navigation.component';
import { SubmenuComponent } from './components/submenu/submenu.component';

@NgModule({
  declarations: [
    NavigationComponent,
    MenuItemComponent,
    SubmenuComponent
  ],
  imports: [
    NavigationRoutingModule,
    SharedModule,
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
