import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})

export class OffersComponent implements OnInit {

  posts:posts[];

  constructor(private foodService:FoodService) 
  {

  }

  ngOnInit() 
  {
    console.log('ngOnInit cj');

    this.foodService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    })
    
  }

}

interface posts
{
  id:number;
  title:string;
  body:string;
  userid :number;
}