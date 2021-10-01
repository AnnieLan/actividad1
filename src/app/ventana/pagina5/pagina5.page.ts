import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.page.html',
  styleUrls: ['./pagina5.page.scss'],
})
export class Pagina5Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Regresar(){
    this.router.navigate(['/home']);
  }

}