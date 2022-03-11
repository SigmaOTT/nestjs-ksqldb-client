import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { ClientOptions } from 'ksqldb-client';

export type KsqldbModuleOptions = ClientOptions;

export interface KsqldbOptionsFactory {
  createAgendaOptions(): Promise<KsqldbModuleOptions> | KsqldbModuleOptions;
}

export interface KsqldbModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<KsqldbModuleOptions>;
  useClass?: Type<KsqldbOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<KsqldbModuleOptions> | KsqldbModuleOptions;
  inject?: any[];
}
