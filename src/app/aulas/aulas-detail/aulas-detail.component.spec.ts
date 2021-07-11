import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasDetailComponent } from './aulas-detail.component';

describe('AulasDetailComponent', () => {
  let component: AulasDetailComponent;
  let fixture: ComponentFixture<AulasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulasDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AulasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
