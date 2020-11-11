import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-readmail',
  templateUrl: './readmail.component.html',
  styleUrls: ['./readmail.component.scss']
})
export class ReadmailComponent implements OnInit {

  mail = {};

  constructor(public searchserv: SearchService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges() {
    this.mail = this.searchserv.singleMail;
  }

}
