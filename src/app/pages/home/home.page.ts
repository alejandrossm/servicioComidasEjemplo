import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/comidas';
import { ComidaService } from '../../services/comida.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  categorias: Category[] = [];

  constructor(private comidasrv: ComidaService) { }

  ngOnInit() {
    this.comidasrv.getCategorias().subscribe(resp => {
      //console.log(resp.categories);
      this.categorias.push(...resp.categories);
      //console.log(this.categorias);

    });
  


  }

}
