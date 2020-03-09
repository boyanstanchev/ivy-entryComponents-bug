import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
  ],
  entryComponents: [SimpleDialogComponent],
  declarations: [
    DashboardComponent,
    SimpleDialogComponent,
  ],
})
export class DashboardModule { }
