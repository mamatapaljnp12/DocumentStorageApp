import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentModel } from '../models/document-model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  getDocuments() {
    return documents;
  }
}

let documents: DocumentModel[] = [
  {
    documentName: 'Aadhaar Card',
    description: 'Aadhaar Card',
    documentUrl: 'assets/images/documents/aadhaar.png'
  },
  {
    documentName: 'Pan Card',
    description: 'Pan Card',
    documentUrl: 'assets/images/documents/pan.png'
  },
  {
    documentName: 'Driving License',
    description: 'Driving License',
    documentUrl: 'assets/images/documents/pan.png'
  },
  {
    documentName: 'Voter Id',
    description: 'Voter Id',
    documentUrl: 'assets/images/documents/pan.png'
  },
  {
    documentName: 'B. Tech',
    description: 'Graduation',
    documentUrl: 'assets/images/documents/pan.png'
  },
]
