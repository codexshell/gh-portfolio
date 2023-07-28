import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Repository } from './repository';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  readonly username = 'codexshell';
  private apiUrl = 'https://api.github.com';
  private userUrl = this.apiUrl + '/users/' + this.username;
  private repoUrl = this.userUrl + '/repos';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.repoUrl);
  }
}
