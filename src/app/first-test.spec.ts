describe('my first test', () => {
  let sut;

  beforeEach(() => {
    sut = {}
  })

  it('should be true if true', () => {
    //arrange
    sut.a = false;

    //act
    sut.a = true;

    //assert
    expect(sut.a).toBe(true);
  }),

  it('should be false if false', () => {
    //arrange
    sut.b = true;

    //act
    sut.b = false;

    //assert
    expect(sut.b).toBe(false);
  }),

  it('should be boolean if boolean', () => {
    //arrange
    sut.c = false;

    //act
    sut.c = Boolean;

    //assert
    expect(sut.c).toBe(Boolean);
  }),

  it('should be array if array', () => {
    //arrange
    sut.d = {};

    //act
    sut.d = [];

    //assert
    expect(sut.d).toEqual([]);
  })
})

