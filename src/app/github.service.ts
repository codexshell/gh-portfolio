import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from './organization';

import { Repository } from './repository';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  readonly username = 'codexshell';
  private apiUrl = 'https://api.github.com';
  private userUrl = this.apiUrl + '/users/' + this.username;
  private reposUrl = this.userUrl + '/repos';
  private orgsUrl = this.userUrl + '/orgs';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.reposUrl);
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.orgsUrl);
  }
}
