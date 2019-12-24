import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {

  searchText: string;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    console.log("go to subjec" + this.searchText);
    this.searchService.searchSubject.next(this.searchText);
  }
}
