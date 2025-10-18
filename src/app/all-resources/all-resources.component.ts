import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resource } from './resource';

@Component({
  selector: 'app-all-resources',
  imports: [CommonModule],
  template: `
    <h1>All Resources</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        @for (resource of resources; track resource.name) {
          <tr>
            <td>{{ resource.name }}</td>
            <td>{{ resource.type }}</td>
            <td>{{ resource.location }}</td>
            <td>{{ resource.status }}</td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: [`
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllResourcesComponent {
  public resources: Resource[] = Array.from({ length: 100 }, (_, i) => ({
    name: `Resource ${i + 1}`,
    type: `Type ${i % 5}`,
    location: `Location ${i % 3}`,
    status: i % 2 === 0 ? 'Active' : 'Inactive',
  }));
}
