import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth.service';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { LoginComponent } from './components/login/login.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';

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
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-document',
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
