import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCkeckComponent } from './default-ckeck.component';

describe('DefaultCkeckComponent', () => {
  let component: DefaultCkeckComponent;
  let fixture: ComponentFixture<DefaultCkeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCkeckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCkeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
