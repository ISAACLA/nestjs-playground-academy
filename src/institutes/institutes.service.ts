import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Institute } from "../entities/institute.entity";
import { Repository } from "typeorm";

@Injectable()
export class InstitutesService {
  constructor(
    @InjectRepository(Institute)
    private instituteRepository: Repository<Institute>
  ) {
  }

  async create(newInstituteDto: CreateInstituteDto) {
    try {
      return await this.instituteRepository.save(newInstituteDto);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async findAll() {
    try {
      return await this.instituteRepository.find({ withDeleted: true });
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async findOne(id: string) {
    try {
      // return await this.instituteRepository.findOneOrFail(id);
      // return await this.instituteRepository.findOne({ where: { id} });
      // return await this.instituteRepository.findByIds([id], {});
      return await this.instituteRepository.find({
        where: { id },
        withDeleted: true,
      });
    } catch (e) {
      throw new NotFoundException();
    }
  }

  async update(id: string, updateInstituteDto: UpdateInstituteDto) {

    const institute: Institute = await this.instituteRepository.findOneOrFail(id);

    if (!institute) {
      throw new NotFoundException();
    }

    const updatedInstitute = this.instituteRepository.merge(
      institute,
      updateInstituteDto,
    );

    try {
      return await this.instituteRepository.save(updatedInstitute);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async remove(id: string) {
    const institute: Institute = await this.instituteRepository.findOneOrFail(
      id,
    );

    if (!institute) {
      throw new NotFoundException();
    }

    institute.deletedAt = new Date(Date.now());

    try {
      return await this.instituteRepository.save(institute);
    } catch (e) {
      throw new BadRequestException();
    }
  }
}
