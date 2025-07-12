import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecordsService } from './records.service';
import { Record } from './records.interface';


@Controller('records')
export class RecordsController {
  constructor(private recordsService: RecordsService) {}

  @Get()
  getAll(): Record[] {
    return this.recordsService.getRecords();
  }

  @Post()
  save(@Body() record: Record) {
    return this.recordsService.addRecord(record);
  }
}
