import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowUsersComponent } from './fellow-users.component';

describe('FellowUsersComponent', () => {
  let component: FellowUsersComponent;
  let fixture: ComponentFixture<FellowUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FellowUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
