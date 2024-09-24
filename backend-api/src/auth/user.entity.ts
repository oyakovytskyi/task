import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  ticket: number;

  @Column('decimal', { precision: 5, scale: 2 })
  yield: number;

  @Column()
  daysLeft: number;

  @Column('decimal', { precision: 5, scale: 2 })
  soldPercentage: number;

  @Column()
  imageURL: string;
}
