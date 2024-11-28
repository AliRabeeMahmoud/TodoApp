import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRequest } from '../class/PostRequest';
import { Observable } from 'rxjs';
import { PostResponse } from '../interface/PostResponse';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080/api/v1/todo';

  constructor(private http: HttpClient) { }

  
  getPosts(): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(this.apiUrl); 

  }

  addPost(obj: PostRequest): Observable<PostResponse>{
    return this.http.post<PostResponse>(this.apiUrl, obj);
  }

  updatePost(postId: number, updatedPost: PostRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/${postId}`, updatedPost);
      
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${postId}`);
     
  }
}
