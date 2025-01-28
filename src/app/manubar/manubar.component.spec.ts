import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManubarComponent } from './manubar.component';

describe('ManubarComponent', () => {
  let component: ManubarComponent;
  let fixture: ComponentFixture<ManubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManubarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
