import { Component, OnInit } from '@angular/core';
import { ComidaService } from '../../services/comida.service';

@Component({
  selector: 'app-tiposcomida',
  templateUrl: './tiposcomida.page.html',
  styleUrls: ['./tiposcomida.page.scss'],
})
export class TiposcomidaPage implements OnInit {

  tipo:string='';

  constructor(private comidasrv:ComidaService) { }

  ngOnInit() {

    this.comidasrv.getComidasxCategoria(this.tipo).subscribe(r=>
      {
        console.log(r);
      });
  }

}
