import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementGroups } from './management-groups';

describe('ManagementGroups', () => {
  let component: ManagementGroups;
  let fixture: ComponentFixture<ManagementGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementGroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementGroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
