# nestjs-ksqldb-client

This repo base on [ksqldb-client](@streaminy/ksqldb-client)  for [Nestjs](https://github.com/nestjs/nest)

ksqldb-client version is `^1.0.5`

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
  imports: [KsqldbModule.forRoot(KsqldbModule, { host: 'http://', port: 8088})], // Same as configuring an ksqldb-client
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

**2. Inject `KsqldbModule` (KsqldbClientService is a instance of KsqldbClient):**

```TypeScript
import { Injectable } from '@nestjs/common';
import { KsqldbClientService } from '@sigmaott/nestjs-ksqldb-client;

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
