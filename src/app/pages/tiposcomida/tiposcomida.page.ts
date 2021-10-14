import { Component, OnInit } from '@angular/core';
import { ComidaService } from '../../services/comida.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/interfaces/comidas';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tiposcomida',
  templateUrl: './tiposcomida.page.html',
  styleUrls: ['./tiposcomida.page.scss'],
})
export class TiposcomidaPage implements OnInit {

  categoria: string = '';
  comidas:Meal[]=[];


  constructor(private comidasrv: ComidaService, 
    private actrouter: ActivatedRoute, 
    private router: Router,
    private iab: InAppBrowser,
    public actionSheetController: ActionSheetController,
    private socialSharing:SocialSharing) { }

  ngOnInit() {

    this.actrouter.queryParams.subscribe(datos => {
      this.categoria = this.router.getCurrentNavigation().extras.state.cat;
      console.log(this.categoria);
    });

    if (this.categoria !== '') {
      this.comidasrv.getComidasxCategoria(this.categoria).subscribe(r => {
        console.log('cargar comidas....');
        this.comidas.push(...r.meals);
        console.log(this.comidas);
      });
    }
    else{
      console.log("Poner una alerta");
    }
  }

  onClick(id:string)
  {
    const browser = this.iab.create('https://www.themealdb.com/meal/' + id,'_system');
  }

  compartir(id:string)
  {
    this.socialSharing.share('Mira esta receta','Probando app',null,'https://www.themealdb.com/meal/' + id);
  }

  async abrirMenu(id:string)
  {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      //cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'Compartir',
        icon: 'share-social',
        handler: () => {
          this.compartir(id);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

  }

}
