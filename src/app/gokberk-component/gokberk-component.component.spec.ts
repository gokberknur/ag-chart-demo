import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GokberkComponentComponent } from './gokberk-component.component';

describe('GokberkComponentComponent', () => {
  let component: GokberkComponentComponent;
  let fixture: ComponentFixture<GokberkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GokberkComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GokberkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
