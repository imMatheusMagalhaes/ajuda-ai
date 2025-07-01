import { Donation } from '@prisma/client';

export type CreateDonationDto = Omit<
  Donation,
  'createdAt' | 'updatedAt' | 'id'
>;
