import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from 'src/app/components/admin-sidebar/admin-sidebar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule  } from '@angular/material/list';
import { PieChartComponent } from 'src/app/components/widgets/pie-chart/pie-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ColumnComponent } from 'src/app/components/widgets/column/column.component';
import { LineComponent } from 'src/app/components/widgets/line/line.component';
import { ManageaccountComponent } from 'src/app/components/manageaccount/manageaccount.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminSidebarComponent,
    HeaderComponent,
    FooterComponent,
    PieChartComponent,
    ColumnComponent,
    LineComponent,
    ManageaccountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
    MatFormFieldModule,   
     FormsModule,

  ],
  exports : [
    AdminSidebarComponent,
    HeaderComponent,
    FooterComponent,
    PieChartComponent,
    ColumnComponent,
    LineComponent,
  ]
})
export class WidgetsModule { }
