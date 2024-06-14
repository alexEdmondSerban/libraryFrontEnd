import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: any = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDetails() : void {
    this.router.navigate(['/books', this.book._id]);
  }

}
