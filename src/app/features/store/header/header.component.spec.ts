import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHeader } from './header.component';

describe('StoreHeader', () => {
  let component: StoreHeader;
  let fixture: ComponentFixture<StoreHeader>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreHeader]
    });
    fixture = TestBed.createComponent(StoreHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
