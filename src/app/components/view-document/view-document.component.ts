import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentModel } from 'src/app/models/document-model';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css']
})
export class ViewDocumentComponent implements OnInit {

  document: DocumentModel = <DocumentModel>{};

  constructor(private route: ActivatedRoute, private dService: DocumentService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getDocumentById(+id)
  }

  getDocumentById(id: number) {
    this.document = this.dService.getDocumentById(id);
  }

  back() {
    this.router.navigate(['/document']);
  }

}
