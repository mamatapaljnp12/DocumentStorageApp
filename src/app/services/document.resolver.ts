import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DocumentModel } from '../models/document-model';
import { DocumentService } from './document.service';

@Injectable({ providedIn: 'root' })
export class DocumentResolver implements Resolve<any> {
  constructor(
    private service: DocumentService, private route: ActivatedRoute
  ) { }

  // resolve(
  // ): Observable<DocumentModel> {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   return this.service.getDocumentById(+id);
  // }
  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params["id"];
    return this.service.getDocumentById(+id);
  }
}
