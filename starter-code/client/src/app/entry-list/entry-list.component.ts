import { Component, OnInit } from '@angular/core';
import { RetrieveEntriesService } from '../services/retrieve-entries.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: any;

  constructor(private retrieveEntries: RetrieveEntriesService) { }

  ngOnInit() {
    this.retrieveEntries.getEntries()
      .subscribe(entries => {
        this.entries = entries;
      })
    console.log(this.entries)
  }

}
