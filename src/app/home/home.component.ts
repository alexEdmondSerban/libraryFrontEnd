import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  // Sample data for featured books (replace with actual data)
  featuredBooks = [
    {
      title: 'Book 1',
      description: 'Description of Book 1',
      imageUrl: 'assets/book1.jpg'
    },
    {
      title: 'Book 2',
      description: 'Description of Book 2',
      imageUrl: 'assets/book2.jpg'
    },
    {
      title: 'Book 3',
      description: 'Description of Book 3',
      imageUrl: 'assets/book3.jpg'
    }
  ];


  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(){
    this.bookService.getBooks().subscribe( data => {
      this.books = data;
    });
  }

}
