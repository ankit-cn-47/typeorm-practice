import {Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { Meeting } from "./meeting.entity";
import { Tasks } from "./tasks.entity";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Employee, employee => employee.directReporters, {onDelete: 'SET NULL'})
    manager: Employee;

    @OneToMany(() => Employee, employee => employee.manager)
    directReporters: Employee[];

    @OneToOne(() => ContactInfo, contactInfo => contactInfo.employee)
    contactInfo: ContactInfo;

    @OneToMany(() => Tasks, tasks => tasks.employee)
    tasks: Tasks[]

    @ManyToMany(() => Meeting, meeting => meeting.attendees)
    @JoinTable()
    meetings: Meeting[]

}
