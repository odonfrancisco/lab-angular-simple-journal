import { Component, OnInit } from '@angular/core';
import { RetrieveEntriesService } from '../services/retrieve-entries.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: any;

  constructor(private receiveEntries: RetrieveEntriesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id: any;
    this.route.params.subscribe(e => id = e.id);
    this.receiveEntries.getEntry(id)
      .subscribe(entry => {
        this.entry = entry
      })
  }

  home(){
    this.router.navigate([''])
  }

}
