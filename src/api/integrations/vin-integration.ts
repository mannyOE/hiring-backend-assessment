
export type VinResponse = {
  year: string
  make: string
  model: string
}
export class Vin {


  async decode(vin: string):Promise<VinResponse>{

  }
}