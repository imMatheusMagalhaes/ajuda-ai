import { Content } from '@prisma/client';

export type UpdateContentDto = Partial<
  Omit<Content, 'updatedAt' | 'createdAt' | 'id'>
>;
