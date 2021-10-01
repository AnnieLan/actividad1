import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  pagina1(){
    this.router.navigate(['/pagina1']);
  }
  pagina2(){
    this.router.navigate(['/pagina2']);
  }
  pagina3(){
    this.router.navigate(['/pagina3']);
  }
  pagina4(){
    this.router.navigate(['/pagina4']);
  }
  pagina5(){
    this.router.navigate(['/pagina5']);
  }
  pagina6(){
    this.router.navigate(['/pagina6']);
  }

}
