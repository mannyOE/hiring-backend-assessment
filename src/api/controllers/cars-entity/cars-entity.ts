import { BadRequestError, Body, JsonController, Post } from "routing-controllers";

import {
  createCarSchema
} from '../../validators/Cars';

import { CarsEntity, RegistrationEntity } from "../../models";
import {Vin} from '../../integrations/vin-integration'

type CreateCarInputType = Pick<CarsEntity,
  "licensePlate"|
  'color'|
  'description'|
  'currentMileage'|
  'currentValue'|
  'vin'
>

type CreatePayload = Pick<CarsEntity,
"licensePlate"|
'color'|
'description'|
'currentMileage'|
'currentValue'|
'vin'|
'year'|
'make'|
'model'|
'registration'
>

interface CarInputType extends  CreateCarInputType {
  registrationNumber: string;
  registrationState: string;
  nameOnRegistration: string;
  registrationExpires: string;
}



@JsonController("/cars")
export class CarsController {
  @Post()
  async create(@Body() body: CarInputType): Promise<CarsEntity> {
      // validate input data
      let result = createCarSchema.validate(body)
      if(result.error) {
        throw new BadRequestError(result.error.message)
      }else{
        let {licensePlate,color,description,currentMileage,currentValue,vin, registrationNumber,registrationState,nameOnRegistration,registrationExpires} = body
        // using the VIN, decode to acquire the year, make and model
        let {year, make, model} = await Vin.decode(vin)
        const reg = new RegistrationEntity()
        reg.nameOnRegistration = nameOnRegistration;
        reg.registrationNumber = registrationNumber;
        reg.registrationExpires = new Date(registrationExpires)
        reg.registrationState = registrationState

        let payload: CreatePayload = {
          licensePlate,color,description,currentMileage,currentValue,vin, year, make, model, registration: reg
        }
        const car = CarsEntity.create({...payload})
        await reg.save();
        await car.save();
        return car;
      }


  }
}
