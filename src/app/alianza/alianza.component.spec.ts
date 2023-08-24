import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlianzaComponent } from './alianza.component';

describe('AlianzaComponent', () => {
  let component: AlianzaComponent;
  let fixture: ComponentFixture<AlianzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlianzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlianzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
