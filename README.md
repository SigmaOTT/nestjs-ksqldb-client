# nestjs-ksqldb-client

This repo base on [ksqldb-client](https://github.com/hanFengSan/nestjs-agenda) and wrap decorator agenda job defined
[Agenda](https://github.com/agenda/agenda) module for [Nestjs](https://github.com/nestjs/nest)

Agenda version is `^4.1.3`

# Installation

```
npm i @sigmaott/nestjs-ksqldb-client
```

# Dependencies

Thank for @golevelup build the easy way to implement Dynamic Module and Discovery Module

# Usage

**1. Import `KsqldbModule`:**

_Sync register_:

```TypeScript
import { KsqldbModule } from '@sigmaott/nestjs-ksqldb-client';

@Module({
  imports: [KsqldbModule.forRoot(KsqldbModule, { host: 'http://', port: 8088})], // Same as configuring an agenda
  providers: [...],
})
export class FooModule {}
```

_Async register_:

```TypeScript
import { KsqldbModule } from '@sigmaott/nestjs-ksqldb-client';

@Module({
  imports: [
    KsqldbModule.forRootAsync(KsqldbModule, {
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        ...config.get('ksqldb'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [...],
})
export class FooModule {}
```

**2. Inject `KsqldbModule` (AgendaService is a instance of Agenda):**

```TypeScript
import { Injectable } from '@nestjs/common';
import { KsqldbClientService } from '@sigmaott/nestjs-agenda;

@Injectable()
export class FooService {
  constructor(private readonly ksqldbClient: KsqldbClientService) {
    // schedule a job
  }

  private async testClient(job: any, done: any): Promise<void> {
    ksqldbClient
  }
}
```
