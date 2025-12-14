import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/feature/header/header.component';
import { NavigationComponent } from 'src/app/feature/navigation/navigation.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    HeaderComponent
  ],
})
export class SharedModule {}
