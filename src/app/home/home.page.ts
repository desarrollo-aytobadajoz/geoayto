import { Component } from '@angular/core';

//7 Importo el plugin geolocation
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public coords : any;

  public latitud: number = 0;
  public longitud: number = 0;
  public precision: number = 0;
  public altitud: number = 0;
  public altitudPrecision: number = 0;
  public velocidad: number = 0;
  public cabecera: number = 0;

  constructor() {

    this.tomaUbicacion();

  }

  /*7 const printCurrentPosition =  7*/
  async tomaUbicacion() /*7 => 7*/ {
    const coordinates = await Geolocation.getCurrentPosition();
  
    //7 console.log('Current position:', coordinates);

    this.coords = coordinates.coords;
    this.latitud = coordinates.coords.latitude;
    this.longitud = coordinates.coords.longitude;
    this.precision = coordinates.coords.accuracy;
    if (coordinates.coords.altitude) this.altitud = coordinates.coords.altitude;
    if (coordinates.coords.altitudeAccuracy) this.altitudPrecision = coordinates.coords.altitudeAccuracy;
    if (coordinates.coords.speed) this.velocidad = coordinates.coords.speed;
    if (coordinates.coords.heading) this.cabecera =coordinates.coords.heading;
  };

}
