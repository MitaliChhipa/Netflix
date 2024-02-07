import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-image',
  templateUrl: './large-image.component.html',
  styleUrls: ['./large-image.component.css']
})
export class LargeImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imagePaths: string[] = [
    "assets/large-movie1.jpg",
    "assets/large-movie2.jpg",
    "assets/large-movie3.jpg",
    "assets/large-movie4.jpg",
    "assets/large-movie5.jpg",
    "assets/large-movie6.jpg",
    "assets/large-movie7.jpg",
    "assets/large-movie8.jpg",
    "assets/large-movie1.jpg",
    "assets/large-movie2.jpg",
    "assets/large-movie3.jpg",
    "assets/large-movie4.jpg",
    "assets/large-movie5.jpg",
    "assets/large-movie6.jpg",
    "assets/large-movie7.jpg",
    "assets/large-movie8.jpg",
  ];

}
