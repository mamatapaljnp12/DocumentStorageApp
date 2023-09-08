import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentModel } from 'src/app/models/document-model';
import { DocumentService } from 'src/app/services/document.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent {

  documentName: string;
  description: string;
  selectedDocument: File;
  file: File | null | undefined;
  documentId: number;

  constructor(private route: ActivatedRoute, private dService: DocumentService, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      let document = Object.assign(data.routeResolver);
      this.documentName = document.documentName;
      this.description = document.description;
      this.documentId = document.id;
    })
  }

  back() {
    this.router.navigate(['/document']);
  }

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
    let document: DocumentModel = {
      documentName: this.documentName,
      description: this.description,
      documentUrl: 'http://localhost:4200/assets/images/documents/eAadhaar1.pdf',
      logoUrl: 'assets/images/documents/default.jpg',
      id: this.documentId
    }
    this.dService.updateDocument(document, this.documentId).subscribe(
      (response: any) => {
        Swal.fire({ icon: 'success', text: 'Document updated successfully' });
        this.router.navigate(['/document']);
      },
      (error: any) => {
        Swal.fire({ icon: 'error', text: 'Something went wrong' });
      }
    )
  }
}
