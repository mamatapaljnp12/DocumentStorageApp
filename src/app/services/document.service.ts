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

  getDocumentById(id: number) {
    return documents.find(x => x.id == id);
  }
}

let documents: DocumentModel[] = [
  {
    id: 1,
    documentName: 'Aadhaar Card',
    description: 'Aadhaar Card',
    documentUrl: 'http://localhost:4200/assets/images/documents/eAadhaar1.pdf',
    logoUrl: 'assets/images/documents/aadhaar.png'
  },
  {
    id: 2,
    documentName: 'Pan Card',
    description: 'Pan Card',
    documentUrl: 'http://localhost:4200/assets/images/documents/eAadhaar1.pdf',
    logoUrl: 'assets/images/documents/pan.png'
  },
  {
    id: 3,
    documentName: 'Driving License',
    description: 'Driving License',
    documentUrl: 'http://localhost:4200/assets/images/documents/eAadhaar1.pdf',
    logoUrl: 'assets/images/documents/driving-licence.jpg'
  },
  {
    id: 4,
    documentName: 'Voter Id',
    description: 'Voter Id',
    documentUrl: 'http://localhost:4200/assets/images/documents/eAadhaar1.pdf',
    logoUrl: 'assets/images/documents/voterid.png'
  },
  {
    id: 5,
    documentName: 'B. Tech',
    description: 'Graduation',
    documentUrl: 'http://localhost:4200/assets/images/documents/eAadhaar1.pdf',
    logoUrl: 'assets/images/documents/degree.png'
  },
]
