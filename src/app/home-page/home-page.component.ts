import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  LargeimagePath:string= "assets/large-movie3.jpg";
  SmallimagePath:string="assets/small-movie4.jpg";
  imageArray: string[] = [
    "assets/large-movie1.jpg",
       "assets/large-movie2.jpg",
        "assets/large-movie3.jpg",
        "assets/large-movie4.jpg",
        "assets/large-movie5.jpg",
       "assets/large-movie6.jpg" ,
        "assets/large-movie7.jpg" ,
        "assets/large-movie8.jpg",
        "assets/large-movie1.jpg" ,
       "assets/large-movie2.jpg" ,
        "assets/large-movie3.jpg"  ,
       "assets/large-movie4.jpg"  ,
        "assets/large-movie5.jpg" ,
        "assets/large-movie6.jpg"  ,
        "assets/large-movie7.jpg",
        "assets/large-movie8.jpg" ]
  


  ngOnInit(): void {
  }

}
