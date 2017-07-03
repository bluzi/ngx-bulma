import { BoxComponent } from './components/box.component';
import { SubtitleComponent } from './components/subtitle.component';
import { TitleComponent } from './components/title.component';
import { SizeDirective } from './directives/size.directive';
import { ColorDirective } from './directives/color.directive';
import { TagComponent } from './components/tag.component';
import { DeleteComponent } from './components/delete.component';
import { ButtonComponent } from './components/button.component';
import { NgModule } from '@angular/core';

let publicDirectives = [
  ButtonComponent,
  DeleteComponent,
  TagComponent,
  TitleComponent,
  SubtitleComponent,
  BoxComponent,
];

let privateDirectives = [
  ColorDirective,
  SizeDirective,
];

@NgModule({
  declarations: [...publicDirectives, ...privateDirectives],
  exports: publicDirectives,
})
export class NgxBulmaModule { }