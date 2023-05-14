import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TAPP';

  constructor(private router: Router){ }

  ngOnInit(): void {
    this.router.navigate(['/homev2']);
  }
  open: boolean = false;


  public abrirMenu() {
    this.open = !this.open;
  }
}
