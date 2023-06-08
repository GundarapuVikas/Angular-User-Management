import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have the h1 tag with user Management systems context',()=>{
    const compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Users Management');
  })

  it('should have a p tag text',(()=>{
    const text=fixture.debugElement.nativeElement.querySelector('p');
    expect(text.textContent).toContain('Welcome to Users Management system');
  }))
});
