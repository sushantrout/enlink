import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';

@Component({
  selector: 'app-transaction-map',
  templateUrl: './transaction-map.component.html',
  styleUrls: ['./transaction-map.component.css'],
})
export class TransactionMapComponent implements OnInit {
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    /* const myAPIKey = '07af25abc78043fb942ef7aaa31640ca';
    const mapStyle = 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';

    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4,
    };

    const map = new L.Map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    map.attributionControl
      .setPrefix('')
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );

    L.mapboxGL({
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      accessToken: 'no-token',
    }).addTo(map); */
    var map = L.map('map').setView([12.35264476196476, 76.60936755115493], 4);

    var tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(map);

    /* const shadowUrl = 'assets/images/map/marker-icon.png'; */
    const iconUrl = 'assets/images/map/marker-icon.png';
    let LeafIcon = L.Icon.extend({
      options: {
          shadowUrl: undefined,
          iconUrl: iconUrl,
          iconSize:     [38, 95],
          shadowSize:   [50, 64],
          iconAnchor:   [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor:  [-3, -76],
      }
  });
  let icon = new LeafIcon();

    var marker = L.marker([12.35264476196476, 76.60936755115493],{
      icon,
      alt:"Not Found"
    })
      .addTo(map)
      .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');
  }
}
