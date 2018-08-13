import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';

import { RetrieveEntriesService } from './services/retrieve-entries.service';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

const routes: Routes = [
  {path: '', component: EntryListComponent},
  {path: ':id', component: SingleEntryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [RetrieveEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
