import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharatersList } from './charaters-list';

describe('CharatersList', () => {
  let component: CharatersList;
  let fixture: ComponentFixture<CharatersList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharatersList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharatersList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
