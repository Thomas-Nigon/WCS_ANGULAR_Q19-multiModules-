import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbAdminComponent } from './dumb-admin.component';

describe('DumbAdminComponent', () => {
  let component: DumbAdminComponent;
  let fixture: ComponentFixture<DumbAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DumbAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DumbAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
