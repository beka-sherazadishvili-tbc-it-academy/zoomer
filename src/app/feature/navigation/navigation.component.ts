import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { last, map, Observable, tap } from 'rxjs';
import { InnerList, MenuItems, MenuList } from './models/navigation.model';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public menuItems$: Observable<MenuItems[]>;
  public menuList$: Observable<MenuList[]>;
  public childItems$: Observable<InnerList[]>;
  public isVisible: boolean = false;
  public lastId: number;
  constructor(private navService: NavigationService) {}

  public ngOnInit(): void {
    this.loadMenuItems();
    this.getMenuItemNames();
  }

  public loadMenuItems(): void {
    this.menuItems$ = this.navService.getMenuItems();
  }

  public getMenuItemNames(): void {
    this.menuList$ = this.menuItems$.pipe(
      map((names) =>
        names.map((value) => {
          return { id: value.id, name: value.name };
        })
      )
    );
  }

  public onHover(id: number): void {
    this.getChildItemsWithInnerNames(id);
  }

  private getMenuItemById(id: number): Observable<MenuItems | undefined> {
    return this.menuItems$.pipe(
      map((names) => names.find((value) => value.id === id))
    );
  }

  public getChildItemsWithInnerNames(id: number): void {
    this.childItems$ = this.getMenuItemById(id).pipe(
      map(
        (menuItem) =>
          menuItem?.childItems?.map((child) => ({
            type: child.name,
            subtype: child.childItems.map((inner) => inner.name),
          })) ?? []
      ),
      tap((value) => console.log(value))
    );
  }
}
