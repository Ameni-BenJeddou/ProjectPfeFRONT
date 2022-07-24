import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {}

  ngOnInit(): void {
    
  this.chartOptions = {
    title: {
      text: 'Application per month',
    },


    yAxis: {
      title: {
        text: 'Number of Applications',
      },
    },

    
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
      },
    },
    exporting: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        name: 'Spontaneous applications',
        data: [100, 231, 190, 209, 238, 290, 276, 300,323,409,766,500],
      },
      {
        name: 'Vacancy applications',
        data: [200, 311, 220, 289, 308, 340, 322, 409,420,501,601,720],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300);
}
}
