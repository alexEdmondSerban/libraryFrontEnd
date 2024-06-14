import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private apiUrl = "http://localhost:5000/books";

  constructor( private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  deleteBook(id: number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateBook(id: string, book: Book): Observable<Book>{
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }
}
