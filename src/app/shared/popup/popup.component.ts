import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-to-leave',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) readonly data: {
      title: string,
      messahe: string,
      cancelButton: string,
      successButton: string,
    }
  ) {}

  cancel(): void {
		this.dialogRef.close('Cancel');
	}

	save(): void {
		this.dialogRef.close('Success');
	}
}
