import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPopup } from './settings-popup';

describe('SettingsPopup', () => {
  let component: SettingsPopup;
  let fixture: ComponentFixture<SettingsPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
