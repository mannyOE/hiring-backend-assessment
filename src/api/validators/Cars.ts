import joi from 'joi'


export const schema = joi.object().keys({
  licensePlate: joi.string().required(),
  color: joi.string().required(),
  description: joi.string().required(),
  currentMileage: joi.number().required(),
  currentValue: joi.number().required(),
  vin: joi.string().required(),
  registrationNumber: joi.string().required(),
  registrationState: joi.string().required(),
  nameOnRegistration: joi.string().required(),
  registrationExpires: joi.date().required(),
})

