import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

import { Model } from 'mongoose';
import { ListUsersInput } from './dto/page-data.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}
  create(createUserInput: CreateUserInput): Promise<User> {
    const user = new this.userModel(createUserInput);
    return user.save();
  }

  findAll(paginationQuery: ListUsersInput): Promise<User[]> {
    const { offset, limit } = paginationQuery;
    return this.userModel.find().skip(offset).limit(limit).exec();
  }
  async findAllWithCursor(paginationQuery: ListUsersInput) {
    const count = await this.userModel.estimatedDocumentCount();
    const users = await this.findAll(paginationQuery);

    return { users, count };
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById({ _id: id }).exec();
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  async update(updateUserInput: UpdateUserInput): Promise<User> {
    const id = updateUserInput._id;
    const user = await this.userModel
      .findOneAndUpdate(
        { _id: id },
        {
          $set: updateUserInput,
        },
        {
          new: true,
        },
      )
      .exec();

    if (!user) throw new NotFoundException(`User ${id} not found`);

    return user;
  }

  remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
