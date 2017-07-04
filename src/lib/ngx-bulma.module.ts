import { TileComponent } from './components/tiles.component';
import { MessageComponent } from './components/message.component';
import { ProgressComponent } from './components/progress.component';
import { CommonModule } from '@angular/common';  

import { NotificationComponent } from './components/notification.component';
import { ImageComponent } from './components/image.component';
import { IconComponent } from './components/icon.component';
import { BoxComponent } from './components/box.component';
import { SubtitleComponent } from './components/subtitle.component';
import { TitleComponent } from './components/title.component';
import { SizeDirective } from './directives/size.directive';
import { ColorDirective } from './directives/color.directive';
import { TagComponent } from './components/tag.component';
import { DeleteComponent } from './components/delete.component';
import { ButtonComponent } from './components/button.component';
import { NgModule } from '@angular/core';
import { TabsComponent, TabDirective } from './components/tabs.component';
import { ColumnsComponent, ColumnComponent } from './components/columns.component';

const publicDirectives = [
  ButtonComponent,
  DeleteComponent,
  TagComponent,
  TitleComponent,
  SubtitleComponent,
  BoxComponent,
  IconComponent,
  ImageComponent,
  NotificationComponent, 
  ProgressComponent,
  MessageComponent,
  TabsComponent,
  TabDirective,
  ColumnsComponent,
  ColumnComponent,
  TileComponent,
];

const privateDirectives = [
  ColorDirective,
  SizeDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...publicDirectives, ...privateDirectives],
  exports: publicDirectives,
})
export class NgxBulmaModule { }
