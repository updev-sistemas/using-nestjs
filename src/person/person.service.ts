import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person } from './entities/person.entity';
import { Model } from 'mongoose';
import { UpdatePersonDto } from './dto/update-person.dto';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {
  
  constructor(@InjectModel('people') private readonly srv: Model<Person>) {}

  async create(target: CreatePersonDto) : Promise<Person> {
    const result = new this.srv(target);
    return await result.save();
  }

  async findAll() : Promise<Person[]>{
    return await this.srv.find().exec();
  }

  async   findOne(id: string) : Promise<Person> {
    return await this.srv.findById(id).exec();
  }

  async update(id: string, target: UpdatePersonDto): Promise<Person> {
    return await this.srv.findByIdAndUpdate(id, target, { new: true });
  }

  async remove(id: string): Promise<Person> {
    return await this.srv.findByIdAndDelete(id);
  }
}
