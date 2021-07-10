import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  click() {
    window.location.replace("http://localhost:4200/login/");
}
  click1() {
    
    window.location.assign("https://www.youtube.com/watch?v=1fr1iyhkyVs");
    
}

}
