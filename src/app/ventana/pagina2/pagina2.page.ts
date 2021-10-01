import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Regresar(){
    this.router.navigate(['/home']);
  }

}