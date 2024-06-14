import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
   books: Book[] = [];
  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
        console.log('Books fetched from backend:', this.books); // Log fetched books
      },
      error => console.error('Error fetching books', error)
    );
  }
}
