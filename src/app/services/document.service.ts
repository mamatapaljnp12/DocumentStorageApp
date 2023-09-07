import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentModel } from '../models/document-model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  getDocuments() {

  }
}

let documents: DocumentModel[] = [
  {
    title: '',
    description: '',
    documentType: 'AadhaarCard'
  }
]
