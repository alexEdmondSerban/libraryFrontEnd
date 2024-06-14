import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../services/book-service.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getBookDetails();
  }

  getBookDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBook(id).subscribe(
        data => this.book = data,
        error => console.error('Error fetching book details', error),
      );
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}