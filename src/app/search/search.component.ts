import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  books: Book[] = [];
  filteredBooks: Book[] = [];

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void{
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
        this.filteredBooks = data; //Initialize filteredBooks with all books
      },
      error => console.error('Error fetching books', error)
    );
  }

  filterBooks(): void{
    this.filteredBooks = this.books.filter(book => 
      book.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(this.searchTerm.toLowerCase()) 
    );
  }

}
