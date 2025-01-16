import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralCodeInputComponent } from './referral-code-input.component';

describe('ReferralCodeInputComponent', () => {
  let component: ReferralCodeInputComponent;
  let fixture: ComponentFixture<ReferralCodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferralCodeInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferralCodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
