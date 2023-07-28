import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gh-portfolio';
  username: string | undefined;

  constructor(
    private githubService: GithubService,
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.username = this.githubService.username;
    this.titleService.setTitle('Github Portfolio app');
    this.meta.addTags([
      {
        name: 'description',
        content: `${this.username}'s Github portfolio`,
      },
      {
        name: 'author',
        content: this.username,
      },
    ]);
  }
}
