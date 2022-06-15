import {
  BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("Cars")
export class CarsEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  licensePlate: string;

  @Column()
  registration: string;

  @Column()
  registrationState: string;

  @Column()
  vin: string;

  @Column()
  currentValue: string;

  @Column()
  currentMileage: string;

  @Column()
  description: string;

  @Column()
  color: string;

  @Column()
  registrationExpires: Date;

  @Column()
  nameOnRegistration: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
