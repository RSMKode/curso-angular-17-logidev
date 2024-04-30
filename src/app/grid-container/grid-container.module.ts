import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridContainerComponent } from './grid-container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationModule } from '../notification/notification.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GridContainerComponent, NavComponent, HeaderComponent],
  imports: [CommonModule, NotificationModule, FormsModule],
  exports: [GridContainerComponent],
})
export class GridContainerModule {}
