import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-movies',
  templateUrl: './view-all-movies.component.html',
  styleUrls: ['./view-all-movies.component.css']
})
export class ViewAllMoviesComponent implements OnInit {

  constructor() { }

  imageArray = new Array(100000).fill("assets/large-movie4.jpg");

  ngOnInit(): void {
  }

}
