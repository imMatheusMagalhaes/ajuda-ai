import { Content } from '@prisma/client';

export type CreateContentDto = Omit<Content, 'updatedAt' | 'createdAt' | 'id'>;
