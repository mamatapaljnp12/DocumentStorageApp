import { Component, OnInit } from '@angular/core';
import { DocumentModel } from 'src/app/models/document-model';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {

  documents: DocumentModel[] = [];

  constructor(private dService: DocumentService) { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments() {
    this.documents = this.dService.getDocuments();
  }

}
