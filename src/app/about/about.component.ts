import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { BlogsService } from '../blogs.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  model = new Contact();
  error: {};

  constructor(private blogService: BlogsService) { }

  ngOnInit() {
  }

  onSubmit() {
    return this.blogService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }


}
