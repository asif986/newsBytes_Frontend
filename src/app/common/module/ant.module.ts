import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  exports: [
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
    NzInputModule,
    NzMessageModule,
    NzModalModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzTableModule,
    NzTransButtonModule,
    NzCardModule,
  ],
})
export class antModule {}
