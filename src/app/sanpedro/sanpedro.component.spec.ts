import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanpedroComponent } from './sanpedro.component';

describe('SanpedroComponent', () => {
  let component: SanpedroComponent;
  let fixture: ComponentFixture<SanpedroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanpedroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanpedroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
