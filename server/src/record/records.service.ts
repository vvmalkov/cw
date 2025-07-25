import { Injectable } from '@nestjs/common';
import { Record } from './records.interface';

@Injectable()
export class RecordsService {
  private records: Record[] = [];

  getRecords():Record[] {
    return this.records.slice(0, 10); // top 10
  }

  addRecord(record: Record) {
    const existingRecordIndex = this.records.findIndex((rec) => rec.name === record.name)
    if (existingRecordIndex >= 0){
      if (record.score > this.records[existingRecordIndex].score){
        this.records[existingRecordIndex] = record;
      }
    } else {
      this.records.push(record);
    }
    this.records.sort((a, b) => b.score - a.score);
    return { success: true };
  }
}
