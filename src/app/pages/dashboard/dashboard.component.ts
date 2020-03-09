import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    div {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `],
})
export class DashboardComponent {
  constructor(private dialogService: NbDialogService) {}

  openDialog() {
    this.dialogService.open(SimpleDialogComponent);
  }
}
