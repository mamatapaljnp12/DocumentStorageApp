import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentModel } from '../models/document-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getDocuments() {
    return this.http.get(this.baseUrl + 'documents');
  }

  getDocumentById(id: number): Observable<DocumentModel> {
    return this.http.get<DocumentModel>(this.baseUrl + `documents/${id}`);
  }

  addNewDocument(document: Partial<DocumentModel>) {
    return this.http.post(this.baseUrl + `documents`, document);
  }

  deleteDocument(documentId: number) {
    return this.http.delete(this.baseUrl + `documents/${documentId}`);
  }

  updateDocument(document: DocumentModel, documentId: number) {
    return this.http.put(this.baseUrl + `documents/${documentId}`, document);
  }
}
