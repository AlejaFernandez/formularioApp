import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { CustomMinDirective } from './directives/cutom-min.directive';
import { TooltipModule } from '../tooltip/tooltip.module';



@NgModule({
  declarations: [
    BasicosComponent,
    SwitchesComponent,
    DinamicosComponent,

    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule,
    TooltipModule
  ]
})
export class TemplateModule { }
