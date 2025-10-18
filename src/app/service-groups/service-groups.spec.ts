import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceGroups } from './service-groups';

describe('ServiceGroups', () => {
  let component: ServiceGroups;
  let fixture: ComponentFixture<ServiceGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceGroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceGroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
