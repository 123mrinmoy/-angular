import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';
import { Blogpost } from '../blogpost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Blogpost[];
  blogpost = new Blogpost();
  error: string;
  constructor(private blogservice: BlogsService) { }

  ngOnInit() {
    this.blogservice.getBlogPosts().subscribe(
      (data: Blogpost[]) => this.posts = data,
      error => this.error = error
    );
  }

}
