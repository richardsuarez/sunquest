import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-to-leave',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>) {}

  cancel(): void {
		this.dialogRef.close('Cancel');
	}

	save(): void {
		this.dialogRef.close('Success');
	}
}
