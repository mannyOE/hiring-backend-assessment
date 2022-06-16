import axios from 'axios'
const API_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/'
export type VinResponse = {
  year: string
  make: string
  model: string
}
export class Vin {
  static async decode(vin: string):Promise<VinResponse>{
    let year = '', make = '', model = '';
    // make api call to decode here
    let {data} = await axios.get(`${API_URL}${vin}?format=json`);
    model = data.Results.find(x=>x.Variable==='Model').Value;
    year = data.Results.find(x=>x.Variable==='Model Year').Value;
    make = data.Results.find(x=>x.Variable==='Make').Value;
    return {
      year, make, model
    }
  }
}