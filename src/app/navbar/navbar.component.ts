import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAdmin : boolean = true;
  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
