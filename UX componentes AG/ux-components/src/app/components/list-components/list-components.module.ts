import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './button/button.component';
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
import { ListComponent } from './list/list.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressComponent } from './progress/progress.component';
import { TableComponent } from './table/table.component';
import { AccordionComponent } from './accordion/accordion.component';
import { StepperComponent } from './stepper/stepper.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { EmptyStateExample } from './empty-state/empty-state.component';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { PageHeaderExample } from './page-header/page-header.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { DialogComponent } from './dialog/dialog.component';
import { MenuComponent } from './menu/menu.component';
import { AngularModule } from '@sinco/angular';
import { ChipExample } from './chip/chip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ProgressERP } from './progress-erp/progress-erp.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarExampleComponent } from './avatar/avatar-example/avatar-example.component';
import { IconComponent } from './icon/icon.component';
import { FooterActionExample } from './footer-action/footer-action.component';
import { HeaderComponents } from './header-components/header-components.component';
import {  SincoModalComponent } from './modal/modal.component';
import { SincoAdjuntarComponent } from './sinco-adjuntar/sinco-adjuntar.component';



@NgModule({
  declarations: [
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
    ChipExample,
    ListComponent,
    TooltipComponent,
    AlertComponent,
    ProgressComponent,
    TableComponent,
    AccordionComponent,
    StepperComponent,
    PaginatorComponent,
    EmptyStateExample,
    ToastNotificationComponent,
    PageHeaderExample,
    CardComponent,
    TabComponent,
    MenuComponent,
    SnackbarComponent,
    IconComponent,
    ProgressERP,
    AvatarExampleComponent,
    AvatarComponent,
    DialogComponent,
    ToastNotificationComponent,
    FooterActionExample,
    HeaderComponents,
    SincoModalComponent,
    SincoAdjuntarComponent
  ],
  exports: [],
  imports:
    [
      AngularModule,
      CommonModule
    ]
})
export class ListComponentsModule { }
