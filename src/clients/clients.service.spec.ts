import { Test, TestingModule } from '@nestjs/testing';
import { ClientsService } from './clients.service.js';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Client } from './entities/client.entity.js';

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientsService,
        { provide: getRepositoryToken(Client), useValue: {} },
      ],
    }).compile();

    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
