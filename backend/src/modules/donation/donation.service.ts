import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from '@modules/donation/dto/create-donation.dto';
import { UpdateDonationDto } from '@modules/donation/dto/update-donation.dto';
import { DatabaseService } from '@infra/database/database.service';
import { Donation } from '@prisma/client';
import FindParams from '@app/interfaces/find-params.interface';

@Injectable()
export class DonationService {
  constructor(private database: DatabaseService) {}
  async createDonation(data: CreateDonationDto) {
    return this.database.donation.create({ data });
  }

  async findAllDonations(
    params: FindParams<Donation> = {},
  ): Promise<Donation[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.database.donation.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOneDonation(id: string): Promise<Donation | null> {
    return this.database.donation.findUnique({
      where: {
        id,
      },
    });
  }

  async updateDonation(id: string, data: UpdateDonationDto) {
    return this.database.donation.update({
      data,
      where: {
        id,
      },
    });
  }

  async removeDonation(id: string) {
    return this.database.donation.delete({
      where: { id },
    });
  }
}
