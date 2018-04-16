import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recipient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  receivedAt: Date;
}
