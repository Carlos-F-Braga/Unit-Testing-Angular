import { HeroesComponent } from "./heroes/heroes.component";
import { of } from 'rxjs';

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
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
      expect(component.heroes[0].name).toEqual('SpiderDude');
      expect(component.heroes[1].name).toEqual('WonderfulGuy');
    })
  })

})
