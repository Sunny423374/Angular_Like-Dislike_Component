import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCodilityComponent } from './angular-codility.component';

describe('AngularCodilityComponent', () => {
  let component: AngularCodilityComponent;
  let fixture: ComponentFixture<AngularCodilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCodilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCodilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
