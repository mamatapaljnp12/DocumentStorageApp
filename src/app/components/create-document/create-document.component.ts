import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent {

  selectedDocument: File;
  file: File | null | undefined;

  showPreviewForDocument(event: any) {
    if (event.target.files && event.target.files[0]) {
      let mimeType = event.target.files[0].type;
      switch (mimeType) {
        case 'application/pdf':
          this.selectedDocument = event.target.files[0];
          break;
        default:
          Swal.fire({ title: 'Error', text: 'Only pdf files are supported.', icon: 'error', heightAuto: false });
          this.file = null;
          this.file = undefined;
      }
    }
  }

}
