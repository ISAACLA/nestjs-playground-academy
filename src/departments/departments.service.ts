import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from '../entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    try {
      return await this.departmentRepository.save(createDepartmentDto);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async findAll(): Promise<Department[]> {
    try {
      return await this.departmentRepository.find();
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async findOne(id: string) {
    try {
      return await this.departmentRepository.find({
        where: { id },
        relations: ['institute'],
      });
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async update(
    id: string,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    const department: Department =
      await this.departmentRepository.findOneOrFail(id);

    if (!department) {
      throw new NotFoundException();
    }

    const updatedDepartment = this.departmentRepository.merge(
      department,
      updateDepartmentDto,
    );

    try {
      return await this.departmentRepository.save(updatedDepartment);
    } catch (e) {
      console.error(e);
      throw new BadRequestException();
    }
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
