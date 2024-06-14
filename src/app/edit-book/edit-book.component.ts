import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookServiceService } from '../services/book-service.service';
import { Book } from '../models/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  bookForm: FormGroup;
  bookId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private bookService: BookServiceService,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      genre: ['', Validators.required],
      imageUrl: ['', Validators.required],
      pdf: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.getBookDetails();
  }

  getBookDetails(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');
    if (this.bookId) {
      this.bookService.getBook(this.bookId).subscribe(
        data => {
          this.bookForm.patchValue({
            title: data.title,
            author: data.author,
            description: data.description,
            genre: data.genre,
            imageUrl: data.imageUrl,
            pdf: data.pdf
          });
        },
        error => console.error('Error fetching book details', error)
      );
    }
  }

  saveBook(): void {
    if (this.bookForm.valid && this.bookId) {
      this.bookService.updateBook(this.bookId, this.bookForm.value).subscribe(
        () => this.router.navigate(['/admin']),
        error => console.error('Error updating book', error)
      );
    }
  }

}
