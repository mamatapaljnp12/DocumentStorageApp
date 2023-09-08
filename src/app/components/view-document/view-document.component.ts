import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentModel } from 'src/app/models/document-model';
import { DocumentService } from 'src/app/services/document.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css']
})
export class ViewDocumentComponent implements OnInit {

  document: DocumentModel = <DocumentModel>{};

  constructor(private route: ActivatedRoute, private dService: DocumentService, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.document = Object.assign(data.routeResolver);
    })
  }

  back() {
    this.router.navigate(['/document']);
  }

}
