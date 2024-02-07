import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
imagePath: any;

  constructor() { }

  ngOnInit(): void {
  }
  imagePaths: string[] = [
    "assets/small-movie1.jpg",
    "assets/small-movie2.jpg",
    "assets/small-movie3.jpg",
    "assets/small-movie4.jpg",
    "assets/small-movie5.jpg",
    "assets/small-movie6.jpg",
    "assets/small-movie7.jpg",
    "assets/small-movie8.jpg",
    "assets/small-movie1.jpg",
    "assets/small-movie2.jpg",
    "assets/small-movie3.jpg",
    "assets/small-movie4.jpg",
    "assets/small-movie5.jpg",
    "assets/small-movie6.jpg",
    "assets/small-movie7.jpg",
    "assets/small-movie8.jpg",
  ];

}
