import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './components/main-page/main-page.component';
import { AutocompleteComponent } from './components/list-components/autocomplete/autocomplete.component';
import { ButtonComponent } from './components/list-components/button/button.component';
import { IconComponent } from './components/list-components/icon/icon.component';
import { FabComponent } from './components/list-components/fab/fab.component';
import { ButtonGroupComponent } from './components/list-components/button-group/button-group.component';
import { CheckboxComponent } from './components/list-components/checkbox/checkbox.component';
import { RadioComponent } from './components/list-components/radio/radio.component';
import { SelectComponent } from './components/list-components/select/select.component';
import { SliderComponent } from './components/list-components/slider/slider.component';
import { SwitchComponent } from './components/list-components/switch/switch.component';
import { SwitchFormControlComponent } from './components/list-components/switch-form-control/switch-form-control.component';
import { BadgeComponent } from './components/list-components/badge/badge.component';
import { TextfieldComponent } from './components/list-components/textfield/textfield.component';
import { ToggleButtonComponent } from './components/list-components/toggle-button/toggle-button.component';
import { AvatarComponent } from './components/list-components/avatar/avatar.component';
import { ChipComponent } from './components/list-components/chip/chip.component';
import { IconButtonComponent } from './components/list-components/icon-button/icon-button.component';
import { TooltipComponent } from './components/list-components/tooltip/tooltip.component';
import { AlertComponent } from './components/list-components/alert/alert.component';
import { ProgressComponent } from './components/list-components/progress/progress.component';
import { TableComponent } from './components/list-components/table/table.component';
import { AccordionComponent } from './components/list-components/accordion/accordion.component';
import { ListComponent } from './components/list-components/list/list.component';

const routes: Routes = [
  {path: " ", component: MainPageComponent  },
  {path: "autocomplete", component: AutocompleteComponent  },
  {path: "button", component:  ButtonComponent },
  {path: "icon", component: IconComponent  },
  {path: "fab", component:  FabComponent },
  {path: "buttonGropu", component: ButtonGroupComponent  },
  {path: "checkbox", component: CheckboxComponent  },
  {path: "radio", component: RadioComponent  },
  // {path: "rating", component: RatingComponent  },
  {path: "select", component:  SelectComponent },
  {path: "slider", component: SliderComponent },
  {path: "switchFormControl", component:SwitchFormControlComponent },
  {path: "switch", component: SwitchComponent },
  {path: "badge", component: BadgeComponent },
  {path: "textfield", component:  TextfieldComponent },
  {path: "toggleButton", component:ToggleButtonComponent },
  {path: "avatar", component: AvatarComponent },
  {path: "chip", component: ChipComponent },
  {path: "icon", component: IconButtonComponent },
  {path: "list", component: ListComponent },
  {path: "tooltip", component: TooltipComponent },
  {path: "alert", component: AlertComponent },
  {path: "progress", component: ProgressComponent },
  {path: "table", component: TableComponent },
  {path: "accordion", component:  AccordionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
