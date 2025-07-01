import { Global, Module } from '@nestjs/common';
import { DatabaseService } from '@infra/database/database.service';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService],
})
@Global()
export class InfraModule {}
