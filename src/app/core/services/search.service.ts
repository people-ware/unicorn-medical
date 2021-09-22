import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface ISoResponse {
  quota_remaining: number;
  quota_max: number;
}

export interface ISearchResultItem {
  answer_count: number;
  closed_date: number;
  closed_reason: string;
  creation_date: number;
  is_answered: boolean;
  last_activity_date: number;
  link: string;
  score: number;
  tags: Array<string>;
  title: string;
  view_count: number;
}

@Injectable()
export class SearchService {

  private static readonly apiUrl =
    'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=';

  constructor(private http: HttpClient) {
  }

  search(keyword: string): Observable<ISoResponse> {
    return this.http.get<ISoResponse>(SearchService.apiUrl + keyword).pipe(tap(data => {
      console.log('API USAGE: ' + data.quota_remaining + ' of ' + data.quota_max + ' requests available')
    }));
  }

}