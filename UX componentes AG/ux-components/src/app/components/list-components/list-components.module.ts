import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from 'src/app/material.module';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { FabComponent } from './fab/fab.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SwitchFormControlComponent } from './switch-form-control/switch-form-control.component';
import { SwitchComponent } from './switch/switch.component';
import { BadgeComponent } from './badge/badge.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ListComponent } from './list/list.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressComponent } from './progress/progress.component';
import { TableComponent } from './table/table.component';
import { AccordionComponent } from './accordion/accordion.component';
import { StepperComponent } from './stepper/stepper.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { DialogComponent } from './dialog/dialog.component';
import { MenuComponent } from './menu/menu.component';
import { AngularModule } from '@sinco/angular';
import { ChipExample } from './chip/chip.component';

const components = [
  AutocompleteComponent,
  ButtonComponent,
  IconButtonComponent,
  FabComponent,
  ButtonGroupComponent,
  CheckboxComponent,
  RadioComponent,
  SelectComponent,
  SliderComponent,
  SwitchFormControlComponent,
  SwitchComponent,
  BadgeComponent,
  TextfieldComponent,
  ToggleButtonComponent,
  AvatarComponent,
  ChipExample,
  ListComponent,
  TooltipComponent,
  AlertComponent,
  ProgressComponent,
  TableComponent,
  AccordionComponent,
  StepperComponent,
  PaginatorComponent,
  EmptyStateComponent,
  ToastNotificationComponent,
  PageHeaderComponent,
  CardComponent,
  TabComponent,
  DialogComponent,
  MenuComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports:
    [AngularModule,
      CommonModule,
      MaterialModule
    ]
})
export class ListComponentsModule { }
