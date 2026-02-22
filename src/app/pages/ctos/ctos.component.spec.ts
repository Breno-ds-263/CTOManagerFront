import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtosComponent } from './ctos.component';

describe('CtosComponent', () => {
  let component: CtosComponent;
  let fixture: ComponentFixture<CtosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
