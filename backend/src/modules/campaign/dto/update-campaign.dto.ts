import { Campaign } from '@prisma/client';

export type UpdateCampaignDto = Partial<
  Omit<Campaign, 'updatedAt' | 'createdAt' | 'id'>
>;
