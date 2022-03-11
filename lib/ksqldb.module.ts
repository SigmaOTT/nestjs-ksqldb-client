import { Module } from '@nestjs/common';
import { createConfigurableDynamicRootModule } from '@golevelup/nestjs-modules';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import KsqldbClient from 'ksqldb-client';
import { KSQLDB_MODULE_OPTIONS } from './ksqldb.constants';
import { KsqldbModuleOptions } from './interfaces';

export class KsqlClientService extends KsqldbClient {}

@Module({
  exports: [KsqlClientService],
})
export class KsqldbModule extends createConfigurableDynamicRootModule<KsqldbModule, KsqldbModuleOptions>(
  KSQLDB_MODULE_OPTIONS,
  {
    providers: [
      {
        provide: KsqlClientService,
        useFactory: async (options) => {
          const ksqlClient = new KsqldbClient(options);
          return ksqlClient;
        },
        inject: [KSQLDB_MODULE_OPTIONS],
      },
    ],
    exports: [KsqlClientService],
  },
) {}
