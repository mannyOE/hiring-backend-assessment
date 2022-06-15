import {
  BaseEntity, Column, OneToOne, JoinColumn, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";



import {RegistrationEntity} from '../registration-entity/registration-entity'

@Entity("Cars")
export class CarsEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  licensePlate: string;

  @OneToOne(()=>RegistrationEntity)
  @JoinColumn()
  registration: RegistrationEntity;

  @Column()
  vin: string;

  @Column()
  currentValue: number;

  @Column()
  currentMileage: number;

  @Column()
  description: string;

  @Column()
  color: string;


  @Column()
  make: string;


  @Column()
  model: string;

  @Column()
  year: string;



  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
