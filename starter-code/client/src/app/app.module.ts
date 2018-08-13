import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';

import { RetrieveEntriesService } from './services/retrieve-entries.service';
import { SingleEntryComponent } from './single-entry/single-entry.component';

const routes: Routes = [
  {path: '', component: EntryListComponent},
  {path: ':id', component: SingleEntryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieveEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
