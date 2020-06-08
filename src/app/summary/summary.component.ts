import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Application} from '../shared/application';
import {Property} from '../shared/property';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnChanges {

  properties: Property[] = [
    {name: 'loanAmount', description: 'Paskolos suma'},
    {name: 'loanDuration', description: 'Paskolos terminas'},
    {name: 'paymentDay', description: 'Paskolos terminas'},
    {name: 'netSalary', description: 'Mėnesinis atlyginimas atskaičius mokesčius'},
    {name: 'phone', description: 'Telefonas'}
  ];

  columns: string[];

  @Input() applicationData: Application;

  public application: Application;

  constructor() {
  }

  ngOnInit(): void {
    this.application = this.applicationData;
    if (this.application !== undefined) {
      this.columns = Object.keys(this.application);
    }
  }

  ngOnChanges() {
    this.application = this.applicationData;
    if (this.application !== undefined) {
      this.columns = Object.keys(this.application);
    }
  }

  filterProperties(matchProperty: string) {
    const filteredProperty: Property = this.properties.filter(property => property.name === matchProperty)[0];
    if (filteredProperty !== undefined) {
      return filteredProperty.description;
    }
  }

  filterShownData(columns: string[]) {
    const shownPropertiesNames: string[] = [];
    for (const property of this.properties) {
      shownPropertiesNames.push(property.name);
    }
    const columnsToShow: string[] = columns.filter(column => shownPropertiesNames.includes(column));
    return columnsToShow;
  }
}
