import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CampaignService } from '@modules/campaign/campaign.service';
import { CreateCampaignDto } from '@modules/campaign/dto/create-campaign.dto';
import { UpdateCampaignDto } from '@modules/campaign/dto/update-campaign.dto';
import FindParams from '@app/interfaces/find-params.interface';
import { Campaign } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('campaign')
@UseGuards(AuthGuard('jwt'))
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  create(@Body() createCampaignDto: CreateCampaignDto) {
    return this.campaignService.createCampaign(createCampaignDto);
  }

  @Get()
  findAll(@Body() params: FindParams<Campaign> = {}) {
    return this.campaignService.findAllCampaigns(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.campaignService.findOneCampaign(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCampaignDto: UpdateCampaignDto,
  ) {
    return this.campaignService.updateCampaign(id, updateCampaignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.campaignService.removeCampaign(id);
  }
}
