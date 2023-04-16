import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevelopmentvaComponent } from './webdevelopmentva.component';

describe('WebdevelopmentvaComponent', () => {
  let component: WebdevelopmentvaComponent;
  let fixture: ComponentFixture<WebdevelopmentvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdevelopmentvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdevelopmentvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
