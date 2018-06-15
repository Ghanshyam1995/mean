import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { routing } from './app.routing.model';
import { FileUploadModule } from 'primeng/fileupload';
import { SpinnerModule } from 'primeng/spinner';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PaginationModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DataTableModule } from 'primeng/datatable';
import { PaginatorModule } from 'primeng/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

// import { MatTableDataSource } from '@angular/material';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ModalModule } from 'ngx-bootstrap';
import { ToolbarModule } from 'primeng/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from 'primeng/editor';





@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
  
    
],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    SpinnerModule,
    AutoCompleteModule,
    SelectButtonModule,
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BlockUIModule.forRoot(),
    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    ModalModule.forRoot(),
    NgxDatatableModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    DataTableModule,
    PaginatorModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    // MatTableDataSource
    ToolbarModule,
    HttpClientModule,
    EditorModule

  ],
  // exports: [MatTableDataSource],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
