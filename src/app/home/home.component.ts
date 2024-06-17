// home.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[] = []; // Replace with your actual data structure

  constructor() { }

  ngOnInit(): void {
    // Example posts (replace with your API call or actual data retrieval)
    this.posts = [
      { imageUrl: 'path-to-image.jpg', comments: 'Great post!', tags: ['nature', 'photography'] },
      { imageUrl: 'path-to-image2.jpg', comments: 'Awesome!', tags: ['travel', 'mountains'] }
    ];
  }
}
