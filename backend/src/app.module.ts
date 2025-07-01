import { Module } from '@nestjs/common';
import { CampaignModule } from '@modules/campaign/campaign.module';
import { DonationModule } from '@modules/donation/donation.module';
import { ContentModule } from '@modules/content/content.module';
import { UserModule } from '@modules/user/user.module';
import { InfraModule } from '@infra/infra.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    InfraModule,
    AuthModule,
    UserModule,
    CampaignModule,
    DonationModule,
    ContentModule,
  ],
})
export class AppModule {}
