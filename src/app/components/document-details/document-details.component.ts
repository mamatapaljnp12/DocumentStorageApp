import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentModel } from 'src/app/models/document-model';
import { DocumentService } from 'src/app/services/document.service';

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
    this.documents = this.dService.getDocuments();
  }

  viewDetails(doc: DocumentModel) {
    this.router.navigate(['/view-document', doc.id]);
  }

}
