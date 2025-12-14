import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu, MenuItems } from './models/navigation.model';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private http: HttpClient) {}

  public getMenuItems(): Observable<MenuItems[]> {
    return this.http.get<MenuItems[]>(`${environment.menuApiUrl}/menu`)
  }
}
