import { DatabaseService } from '@infra/database/database.service';
import { Campaign } from '@prisma/client';
import { CreateCampaignDto } from '@modules/campaign/dto/create-campaign.dto';
import { UpdateCampaignDto } from '@modules/campaign/dto/update-campaign.dto';
import FindParams from '@app/interfaces/find-params.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CampaignService {
  constructor(private database: DatabaseService) {}
  async createCampaign(data: CreateCampaignDto) {
    return this.database.campaign.create({ data });
  }

  async findAllCampaigns(
    params: FindParams<Campaign> = {},
  ): Promise<Campaign[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.database.campaign.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOneCampaign(id: string): Promise<Campaign | null> {
    return this.database.campaign.findUnique({
      where: {
        id,
      },
    });
  }

  async updateCampaign(id: string, data: UpdateCampaignDto) {
    return this.database.campaign.update({
      data,
      where: {
        id,
      },
    });
  }

  async removeCampaign(id: string) {
    return this.database.campaign.delete({
      where: { id },
    });
  }
}
