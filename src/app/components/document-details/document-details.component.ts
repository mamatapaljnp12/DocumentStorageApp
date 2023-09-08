import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentModel } from 'src/app/models/document-model';
import { DocumentService } from 'src/app/services/document.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {

  documents: DocumentModel[] = [];

  constructor(private dService: DocumentService, private router: Router) { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments() {
    this.dService.getDocuments().subscribe(
      (result: any) => {
        this.documents = result;
      },
      (error: any) => {
        Swal.fire({ icon: 'error', text: 'Something went wrong' });
      }
    )
  }

  viewDetails(doc: DocumentModel) {
    this.router.navigate(['/view-document', doc.id]);
  }

  editDetails(doc: DocumentModel) {
    this.router.navigate(['/edit-document', doc.id]);
  }

  deleteDocument(doc: DocumentModel) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dService.deleteDocument(doc.id)
          .subscribe(
            (response: any) => {
              Swal.fire({ text: 'Document deleted.', icon: 'success' });
              this.loadDocuments();
            },
            (error: any) => {
              Swal.fire({ text: 'Something went wrong', icon: 'error' });
            }
          )
      }
    })
  }

}
