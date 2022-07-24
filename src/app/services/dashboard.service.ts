import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  agechart() {
    return[
        {
          name: '18-25',
          y: 61.41,
        },
        {
          name: '25-35',
          y: 11.84,
        },
        {
          name: '35-45',
          y: 10.85,
        },
        {
          name: '45+',
          y: 4.67,
        },
      ]
    }
  
  genderchart() {
    return[
        {
          name: 'female',
          y: 800,
        },
        {
          name: 'male',
          y: 687,
        },
      ]
  }
  Typechart() {
    return[
      {
        name: 'For vacancy',
        y: 887,
      },
        {
          name: 'Spontaneous',
          y: 200,
        },
      ]
  }
  Statuschart() {
    return[
        {
          name: 'Submitted',
          y: 609
        },
        {
          name: 'Shortlisted',
          y: 190,
        },
        {
          name: 'Interview',
          y: 97,
        },
      ]
    }
}
