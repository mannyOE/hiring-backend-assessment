import {
  BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("Registrations")
export class RegistrationEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({unique: true})
  registrationNumber: string;

  @Column()
  registrationState: string;

  @Column()
  registrationExpires: Date;

  @Column()
  nameOnRegistration: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
