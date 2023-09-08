import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth.service';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { LoginComponent } from './components/login/login.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';
import { DocumentResolver } from './services/document.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'document',
    component: DocumentDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'view-document/:id',
    component: ViewDocumentComponent,
    canActivate: [AuthGuardService],
    resolve: {
      routeResolver: DocumentResolver
    }
  },
  {
    path: 'edit-document/:id',
    component: EditDocumentComponent,
    canActivate: [AuthGuardService],
    resolve: {
      routeResolver: DocumentResolver
    }
  },
  {
    path: 'new-document',
    component: CreateDocumentComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
