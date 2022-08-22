const {getNextGeneration, checkCell} = require('../index');

const ALIVE = "ALIVE";
const DEAD = "DEAD";

const ARRAY_STILL_BOARD = [
    [DEAD, DEAD, DEAD, DEAD],
    [DEAD, ALIVE, ALIVE, DEAD],
    [DEAD, ALIVE, ALIVE, DEAD],
    [DEAD, DEAD, DEAD, DEAD]
  ];

  const ARRAY_OSC_BOARD = [
    [DEAD, DEAD, DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD, DEAD, DEAD],
    [DEAD, ALIVE, ALIVE, ALIVE, DEAD],
    [DEAD, DEAD, DEAD, DEAD, DEAD],
    [DEAD, DEAD, DEAD, DEAD, DEAD]
]

describe('Game of life - checkCell 1 neighbor', () => {
    it('a cell with one neighbor should be dead', () => {
        const oneNeighbor = [
            [ ALIVE, DEAD, DEAD],
            [ DEAD, DEAD, DEAD],
            [ DEAD, DEAD, DEAD]
        ]
        
        const cell = checkCell(1, 1, oneNeighbor);
        expect(cell).toEqual(DEAD);
    })
})

describe('Game of life - checkCell 1 neighbor', () => {
    it('a dead cell with two neighbors should be dead', () => {
        const twoNeighbor = [
            [ ALIVE, ALIVE, DEAD],
            [ DEAD, DEAD, DEAD],
            [ DEAD, DEAD, DEAD]
        ]
        
        const cell = checkCell(1, 1, twoNeighbor);
        expect(cell).toEqual(DEAD);
    })
})

describe('Game of life - checkCell 1 neighbor', () => {
    it('an alive cell with two neighbors should be alive', () => {
        const twoNeighbor = [
            [ ALIVE, ALIVE, DEAD],
            [ DEAD, ALIVE, DEAD],
            [ DEAD, DEAD, DEAD]
        ]
        
        const cell = checkCell(1, 1, twoNeighbor);
        expect(cell).toEqual(ALIVE);
    })
})

describe('Game of life - checkCell 1 neighbor', () => {
    it('a dead cell with three neighbors should be alive', () => {
        const twoNeighbor = [
            [ ALIVE, ALIVE, DEAD],
            [ ALIVE, DEAD, DEAD],
            [ DEAD, DEAD, DEAD]
        ]
        
        const cell = checkCell(1, 1, twoNeighbor);
        expect(cell).toEqual(ALIVE);
    })
})

describe('Game of life - checkCell 1 neighbor', () => {
    it('an alive cell with over three neighbors should be dead', () => {
        const twoNeighbor = [
            [ ALIVE, ALIVE, ALIVE],
            [ ALIVE, ALIVE, DEAD],
            [ DEAD, DEAD, DEAD]
        ]
        
        const cell = checkCell(1, 1, twoNeighbor);
        expect(cell).toEqual(DEAD);
    })
})

// If you want to use Jest for unit testing, add some tests to this file
describe('Game of Life - getNextGeneration', () => {
    it('a still life should not change across multiple generations', () => {
        const generationOne = ARRAY_STILL_BOARD;
        const generationTwo = getNextGeneration(generationOne);
        const generationThree = getNextGeneration(generationTwo);

        expect(generationOne).toEqual(generationTwo);
        expect(generationTwo).toEqual(generationThree);
        expect(generationThree).toEqual(ARRAY_STILL_BOARD);
    });
  });

  describe('Game of Life - getNextGeneration', () => {
    it('an oscilator should change across multiple generations, but eventually be the same again', () => {
        const generationOne = ARRAY_OSC_BOARD;
        const generationTwo = getNextGeneration(generationOne);
        const generationThree = getNextGeneration(generationTwo);

        expect(generationOne).not.toEqual(generationTwo);
        expect(generationOne).toEqual(generationThree);
    });
  });