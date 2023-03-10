import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat  } from 'ol/proj';

const form = document.forms[0]!;
const addressInput = document.getElementById('address')! as HTMLInputElement;


type NominatimResponse = {
  lat: number,
  lon: number
}

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;
  
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURI(enteredAddress)}`)
    .then(res => res.json())
    .then((res: NominatimResponse[]) => {
      const { lat, lon } = res[0];
      document.getElementById('map')!.innerHTML = '';
      new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: fromLonLat([lon, lat]),
          zoom: 16
        })
      });
    })
}

form.addEventListener('submit', searchAddressHandler);