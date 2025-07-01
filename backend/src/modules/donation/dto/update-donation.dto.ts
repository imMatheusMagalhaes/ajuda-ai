import { Donation } from '@prisma/client';

export type UpdateDonationDto = Partial<
  Omit<Donation, 'createdAt' | 'updatedAt' | 'id'>
>;
