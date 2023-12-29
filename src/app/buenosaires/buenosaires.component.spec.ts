import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenosairesComponent } from './buenosaires.component';

describe('BuenosairesComponent', () => {
  let component: BuenosairesComponent;
  let fixture: ComponentFixture<BuenosairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuenosairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuenosairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
