import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth.service';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { EditDocumentComponent } from './components/edit-document/edit-document.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DocumentDetailsComponent,
    FooterComponent,
    NavBarComponent,
    CreateDocumentComponent,
    ViewDocumentComponent,
    EditDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, PdfViewerModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
