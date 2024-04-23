import { Injectable } from "@angular/core"; //permite que una clase sea injectable. Es decir, que puede ser inyectada como una dependencia en otras clases.
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";//Es una clase en RxJS que representa una secuencia de valores que puede ser observada.


//{providedIn: 'root'}: Es una forma de proporcionar el servicio en el nivel raíz del módulo de la aplicación.
@Injectable( {providedIn: 'root'} )

export class GifsService{

  // private apiUrl = 'https://api.giphy.com/v1/gifs/trending';
  private apiUrl = 'https://api.giphy.com/v1/gifs';

  // private apiKey = 'z5kxQ2pe0gfAiWIj27rKSeqD9sQQDlhZ';
  private apiKey = 'L8yP0vnGVUFBiIpvw79LDvge7WJsx6vM';


    //definimos el constructor del servicio. Recibe una instancia del servicio HttpClient que se utilizará para realizar solicitudes HTTP.
  constructor( private http: HttpClient  ){}

  //Este metodo se encarga de obtener los gifs en tendencia, donde dejamos los de tendencia que se muestren automaticamente
  getTrendingGifs(): Observable<any> {
    // Definimos el maximo de gifs que deseamos mostrar
    const limit = 20
    const url = `${this.apiUrl}/trending?api_key=${this.apiKey}&limit=${limit}`;

    return this.http.get(url);


   }

  //  Se muestra el gif por id
   getGifsId(id: string){
    const url = `${this.apiUrl}/${id}?api_key=${this.apiKey}`;
      return this.http.get(url);
   }

    searchGifs(query: string):Observable<any>{
      // Definimos el maximo de gifs que deseamos mostrar
      const limit = 20;
      const url = `${this.apiUrl}/search?api_key=${this.apiKey}&q=${query}&limit=${limit}`;
      return this.http.get(url);
    }

}
