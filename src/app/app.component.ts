import { Component, OnInit } from '@angular/core';
import { PeopleService } from './services/people/people.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  peoples: Array<any> = [];
  constructor(public _peopleService: PeopleService) { }
  title = 'swapi-search';
  p: number = 1;//page number
  total: number;

  ngOnInit() {
    this._peopleService.loading = true;
    this._peopleService._getAllPeople().subscribe((response: any) => {
      this._peopleService.loading = false;
      this.peoples = response.results;
      this.total = response.count;
    },error=>{
      this._peopleService.loading = false;
      alert("Please reload the page")
    })
  }
  /**
   * 
   * @param event => number of page that i clicked on it
   */
  pageChanged(event) {
    this.p = event;
    this.peoples = [];
    this._peopleService.loading = true;
    this._peopleService._getPeopleByPage(event).subscribe((response: any) => {
      this._peopleService.loading =false;
      this.peoples = response.results;
    },error=>{
      this._peopleService.loading = false;
      alert("please try again")
    })
  }

  /**
   * 
   * @param event => the response of search
   */
  getSearchResults(event) {
    this.peoples = event.results;
    this.total = event.count;
  }
  /**
   * 
   * @param event => item selected to change its position
   */
  drop(event) {
    console.log("previousEvent=> ",event.previousIndex);
    console.log("currentEvent=> ",event.currentIndex);
    moveItemInArray(this.peoples, event.previousIndex, event.currentIndex);
  }
}
