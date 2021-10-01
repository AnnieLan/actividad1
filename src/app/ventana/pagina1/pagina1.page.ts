import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Regresar(){
    this.router.navigate(['/home']);
  }

}