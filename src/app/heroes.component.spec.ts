import { HeroesComponent } from "./heroes/heroes.component";
import { of } from 'rxjs';
import fixture from 'fixture';
import { HeroComponent } from './hero/hero.component';
import { query } from "@angular/animations";
import { By } from "@angular/platform-browser";

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {
        id:1,
        name: 'SpiderDude',
        strength: 8
      },
      {
        id:2,
        name: 'WonderfulGuy',
        strength: 24
      },
      {
        id:3,
        name: 'SpiderDude',
        strength: 55
      }
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    component = new HeroesComponent(mockHeroService);
  })

  describe('delete', () => {

    it('should remove the indicated hero from the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
      expect(component.heroes[0].name).toEqual('SpiderDude');
      expect(component.heroes[1].name).toEqual('WonderfulGuy');
    })

    it('should call deleteHero with right parameter', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      let value = HEROES[2];

      component.delete(value);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(value);
    })

    it('should call heroService.deleteHero when the Hero componen\'s button  is called', () => {
      spyOn(fixture.componentInstance, 'delete');
      mockHeroService.deleteHero.and.returnValue(of(HEROES));
      component.heroes = HEROES;


      fixture.detectChanges();

      const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent))
      heroComponents[0].query(By.css('button')).triggerEventHandler('click', {stopPopagation: () => {}} )

      expect(fixture.componentInstance.delete).toHaveBeenCalledWith(HEROES[1]);
    })

  })

describe('heroes', () => {

  it('should have all heroes', () => {
    component.heroes = HEROES;

    let value = HEROES;

    expect(component.heroes).toEqual(value);
  })
})

})
