import { Body, Get, JsonController, Post } from "routing-controllers";

import { CarsEntity } from "../../models";
import {Vin} from '../../integrations/vin-integration'

type CreateCarInputType = Pick<CarsEntity,
  "licensePlate"|
  'color'|
  'description'|
  'currentMileage'|
  'currentValue'|
  'registration'|
  'vin'|
  'registrationState'|
  'registrationExpires'|
  'nameOnRegistration'
>

@JsonController("/cars-entity")
export class CarsController {
  @Get()
  get(): Promise<CarsEntity[]> {
    return CarsEntity.find();
  }

  @Post()
  async create(@Body() body: CreateCarInputType): Promise<CarsEntity> {
    // using the VIN, decode to acquire the year, make and model
    let vinIntegration = new Vin();
    let {year, make, model} = await vinIntegration.decode(body.vin)
    return CarsEntity.create({...body, year, make, model}).save();

  }
}
