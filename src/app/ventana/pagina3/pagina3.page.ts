import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  Regresar(){
    this.router.navigate(['/home']);
  }
}
