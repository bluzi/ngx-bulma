import { SubtitleDirective } from './directives/subtitle.directive';
import { TileDirective } from './directives/tile.directive';
import { MessageComponent } from './components/message.component';
import { CommonModule } from '@angular/common';  

import { NotificationComponent } from './components/notification.component';
import { ImageComponent } from './components/image.component';
import { IconComponent } from './components/icon.component';
import { BoxComponent, BoxDirective } from './components/box.component';
import { SmallDirective, NormalDirective, MediumDirective, LargeDirective } from './directives/size.directive';
import { TagComponent } from './components/tag.component';
import { DeleteComponent } from './components/delete.component';
import { NgModule } from '@angular/core';
import { TabsComponent, TabDirective } from './components/tabs.component';
import { ColumnsComponent, ColumnComponent } from './components/columns.component';
import { ButtonDirective } from './directives/button.directive';
import { TitleDirective } from './directives/title.directive';
import { 
  DangerDirective, WarningDirective, SuccessDirective, 
  InfoDirective, PrimaryDirective, BlackDirective, 
  DarkDirective, WhiteDirective 
} from './directives/color.directive';

const publicDirectives = [
  ButtonDirective,
  DeleteComponent,
  TagComponent,
  TitleDirective,
  SubtitleDirective,
  BoxComponent,
  BoxDirective,
  IconComponent,
  ImageComponent,
  NotificationComponent, 
  MessageComponent,
  TabsComponent,
  TabDirective,
  ColumnsComponent,
  ColumnComponent,
  TileDirective,

  DangerDirective,
  WarningDirective,
  SuccessDirective,
  InfoDirective,
  PrimaryDirective,
  BlackDirective,
  DarkDirective,
  WhiteDirective,

  SmallDirective,
  NormalDirective,
  MediumDirective,
  LargeDirective,
];

const privateDirectives = [
];

@NgModule({
  imports: [CommonModule],
  declarations: [...publicDirectives, ...privateDirectives],
  exports: publicDirectives,
})
export class NgxBulmaModule { }
