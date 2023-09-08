import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentModel } from 'src/app/models/document-model';
import { DocumentService } from 'src/app/services/document.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent {

  documentName: string;
  description: string;
  selectedDocument: File;
  file: File | null | undefined;

  constructor(private dService: DocumentService, private router: Router) { }

  showPreviewForDocument(event: any) {
    if (event.target.files && event.target.files[0]) {
      let size = event.target.files[0].size /1024/1024 ;
      // Maximum 1 MB file allowed
      if(size > 1){
        Swal.fire({ title: 'Error', text: 'Maximum size should be 1 MB.', icon: 'error', heightAuto: false });
        this.file = null;
        this.file = undefined;
        return;
      }
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

  submit() {
    if (this.documentName == undefined || this.documentName.trim() == '') {
      Swal.fire({ icon: 'warning', text: 'Invalid document name' });
      return;
    }
    if (this.description == undefined || this.description.trim() == '') {
      Swal.fire({ icon: 'warning', text: 'Invalid description' });
      return;
    }
    if (this.selectedDocument == undefined) {
      Swal.fire({ icon: 'warning', text: 'Please upload a document' });
      return;
    }
    let document: Partial<DocumentModel> = {
      documentName: this.documentName,
      description: this.description,
      documentUrl: 'http://localhost:4200/assets/images/documents/eAadhaar1.pdf',
      logoUrl: 'assets/images/documents/default.jpg'
    }
    this.dService.addNewDocument(document).subscribe(
      (response: any) => {
        Swal.fire({ icon: 'success', text: 'Document added successfully' });
        this.router.navigate(['/document']);
      },
      (error: any) => {
        Swal.fire({ icon: 'error', text: 'Something went wrong' });
      }
    )
  }

}
