import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchResults = new EventEmitter();
  search_string:string;
  constructor(private _peopleService: PeopleService) { }

  ngOnInit(): void {
  }

  getResults()
  {
    this._peopleService.loading = true;
    this._peopleService._searchPeople(this.search_string).subscribe((response:any)=>{
      this._peopleService.loading = false;
      this.searchResults.emit(response);
    },error=>{
      this._peopleService.loading = false;
    })
  }
}
