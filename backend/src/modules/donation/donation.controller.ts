import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DonationService } from '@modules/donation/donation.service';
import { CreateDonationDto } from '@modules/donation//dto/create-donation.dto';
import { UpdateDonationDto } from '@modules/donation//dto/update-donation.dto';
import FindParams from '@app/interfaces/find-params.interface';
import { Donation } from '@prisma/client';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Post()
  create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationService.createDonation(createDonationDto);
  }

  @Get()
  findAll(@Body() params: FindParams<Donation> = {}) {
    return this.donationService.findAllDonations(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donationService.findOneDonation(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDonationDto: UpdateDonationDto,
  ) {
    return this.donationService.updateDonation(id, updateDonationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donationService.removeDonation(id);
  }
}
