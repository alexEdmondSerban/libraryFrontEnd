import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'books', component: BookListComponent},
  { path: 'books/:id', component: BookDetailsComponent},
  { path: 'search' , component: SearchComponent},
  { path: 'admin', component: AdminDashboardComponent},
  { path: 'admin/new', component: AddBookComponent },
  { path: 'admin/edit/:id', component: EditBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
