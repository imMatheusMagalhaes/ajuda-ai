import { Campaign } from '@prisma/client';

export type CreateCampaignDto = Omit<
  Campaign,
  'updatedAt' | 'createdAt' | 'id'
>;
