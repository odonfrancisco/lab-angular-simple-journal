import { Component, OnInit } from '@angular/core';
import { RetrieveEntriesService } from '../services/retrieve-entries.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  formBtn:Object;
  formHide:Object={'display': 'none'};

  constructor(
    private retrieveEntries: RetrieveEntriesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitEntry(form){
    // console.log(form.value);
    this.retrieveEntries.submitEntry(form.value)
      .subscribe(entry => this.router.navigate(['', entry._id]))
  }

  showForm(){
    this.formBtn = {'display': 'none'};
    this.formHide = {};
  }

}
