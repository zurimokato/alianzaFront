import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-dialog',
  templateUrl: './mensaje-dialog.component.html',
  styleUrls: ['./mensaje-dialog.component.css']
})
export class MensajeDialogComponent {

  @Input() message: string="";


}
