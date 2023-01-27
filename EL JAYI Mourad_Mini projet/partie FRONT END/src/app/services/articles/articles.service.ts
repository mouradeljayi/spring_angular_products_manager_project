import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Article } from 'src/app/model/article';



@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private localUrl = environment.API_URL;


  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.localUrl}/articles`);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.localUrl}/articles${id}`);
  }

  createArticle(formData: FormData): Observable<Article> {
  

    return this.http.post<Article>(`${this.localUrl}/articles`, formData);
  }
}
