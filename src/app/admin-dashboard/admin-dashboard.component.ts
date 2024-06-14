import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookServiceService } from '../services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
      },
      error => console.error('Error fetching books', error)
    );
  }

  editBook(id: number): void {
    this.router.navigate(['/admin/edit', id]);
  }

  deleteBook(id: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe(
        () => {
          this.books = this.books.filter(book => book._id !== id);
        },
        error => console.error('Error deleting book', error)
      );
    }
  }
}
