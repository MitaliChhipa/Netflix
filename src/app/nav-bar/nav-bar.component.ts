import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  scrolled=false;

  @HostListener('window:scroll',[])
  scroll(){
    this.scrolled= window.scrollY>10;
  }

  ngOnInit(): void {
  }

}
