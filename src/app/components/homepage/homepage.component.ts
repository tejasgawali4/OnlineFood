import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit 
{
  posts:Post[];

  constructor() 
  { 

  }

  ngOnInit() {


  }

}

interface Post{
  id: number,
  title:string,
  body:string,
  userId:number
}
