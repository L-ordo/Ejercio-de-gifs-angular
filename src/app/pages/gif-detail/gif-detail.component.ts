// import { Component } from '@angular/core';
// import { GifsService } from 'src/app/services/gifs.service';

// @Component({
//   selector: 'gif-detail',
//   templateUrl: './gif-detail.component.html',
//   styleUrls: ['./gif-detail.component.css']
// })
// export class GifDetailComponent {

//   constructor( private gifService: GifsService ){}

// ngOnInit(){
//   // this.getGifsId();
// }


// }

import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.css']
})
export class GifDetailComponent implements OnInit {
  gifId: string='';
  gifDetail: any;

  constructor(private gifService: GifsService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el ID del gif de los parámetros de la URL
    this.route.params.subscribe(params => {
      this.gifId = params['id'];
      // Llamar al servicio para obtener los detalles del gif utilizando el ID
      this.getGifDetail();
    });
  }

  getGifDetail() {
    this.gifService.getGifsId(this.gifId).subscribe(
      (response: any) => {
        // Asignar los detalles del gif al gifDetail para su uso en la plantilla
        this.gifDetail = response.data;
      },
      (error) => {
        console.error("Error fetching GIF detail:", error);
      }
    );
  }
}

