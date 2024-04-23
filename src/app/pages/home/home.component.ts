import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/services/gifs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // creamos arreglo para almacenar los gifs en tendencia
  trendingGifs: any[] = [];
  constructor( private gifsService: GifsService, private router: Router ){}

  ngOnInit() {
    // Al inicializarse el componente, se llama a la función para obtener los gifs en tendencia
    this.getTrendingGifs();
  }

  getTrendingGifs() {
    this.gifsService.getTrendingGifs().subscribe(
      (response: any) => {// En caso de éxito, se asignan los gifs al arreglo trendingGifs
        this.trendingGifs = response.data;
      },
      (error) => {// En caso de error, se muestra un mensaje en la consola
        console.error("Error fetching trending GIFs:", error);
      }
    );
  }


// Metodo para mostrar los gifs buscados
  searchGifs(event: any) {
     // Obtenemos el valor del campo de búsqueda desde el evento
    const query = event.target.value;
    if (query && query.trim() !== '') {
      // Realizamos la búsqueda utilizando el servicio GifsService
      this.gifsService.searchGifs(query).subscribe(
        // En caso de éxito, asignamos los resultados a trendingGifs
        (response: any) => {
          this.trendingGifs = response.data;
        },
              // En caso de error, mostramos un mensaje de error en la consola
        (error) => {
          console.error("Error searching GIFs:", error);
        }
      );
      // Si el campo de búsqueda está vacío, mostramos los GIFs en tendencia
    } else {
      this.getTrendingGifs();
    }
  }

    // Creamos el metodo para dirigir a pagina /detail
    redirectToDetail(gifId: string){
      this.router.navigate(['/detail', gifId]);
      console.log(gifId);
    }
}
