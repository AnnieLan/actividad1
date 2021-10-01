import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Regresar(){
    this.router.navigate(['/home']);
  }

}