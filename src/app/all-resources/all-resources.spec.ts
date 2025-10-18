import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResources } from './all-resources';

describe('AllResources', () => {
  let component: AllResources;
  let fixture: ComponentFixture<AllResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllResources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
