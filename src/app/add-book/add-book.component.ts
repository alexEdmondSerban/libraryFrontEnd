import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../services/book-service.service';
import { Book } from '../models/book';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  bookForm: FormGroup;

  constructor(
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

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value).subscribe(
        () => this.router.navigate(['/admin']),
        error => console.error('Error creating book', error)
      );
    }
  }
}
