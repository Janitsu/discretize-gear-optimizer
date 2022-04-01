import { characterLT, OptimizerCore } from './optimizerCore';

const isArrayDifferent = (a, b) => {
  if (a.length !== b.length) return true;
  return a.some((_, i) => a[i] !== b[i]);
};

// eslint-disable-next-line import/prefer-default-export
export function* calculate(combinations) {
  for (const combination of combinations) {
    combination.list = [];
    combination.core = new OptimizerCore(combination.settings);
    combination.calculation = combination.core.calculate();
  }

  const { rankby, runsAfterThisSlot } = combinations[0].core.settings;
  const globalCalculationTotal = runsAfterThisSlot[0] * combinations.length;

  let i = 0;
  let globalList = [];
  let globalFilteredList = [];

  let globalWorstScore = 0;

  while (true) {
    const combination = combinations[i];

    const currentIndex = i;
    i = (i + 1) % combinations.length;

    if (combination.done) continue;

    const { value: { isChanged, calculationRuns, newCharacters } = {}, done } =
      combination.calculation.next();

    if (done) {
      combination.done = true;
    }

    for (const character of newCharacters) {
      character.settings = combination.minimalSettings;
    }

    if (isChanged) {
      combination.list = [...combination.list, ...newCharacters]
        // eslint-disable-next-line no-loop-func
        .filter((character) => character.attributes[rankby] >= globalWorstScore)
        .sort((a, b) => characterLT(a, b, rankby))
        .slice(0, 50);

      const newGlobalList = combinations
        .flatMap(({ list }) => list || [])
        // eslint-disable-next-line no-loop-func
        .filter((character) => character.attributes[rankby] >= globalWorstScore)
        .sort((a, b) => characterLT(a, b, rankby))
        .slice(0, 50);

      if (newGlobalList.length === 50)
        globalWorstScore = newGlobalList[newGlobalList.length - 1].attributes[rankby];

      if (isArrayDifferent(globalList, newGlobalList)) {
        globalList = newGlobalList;
      }

      const newGlobalFilteredList = combinations
        .map(({ list }) => list?.[0])
        .filter(Boolean)
        .sort((a, b) => characterLT(a, b, rankby));

      if (isArrayDifferent(globalFilteredList, newGlobalFilteredList)) {
        globalFilteredList = newGlobalFilteredList;
      }
    }

    console.log(`option ${currentIndex} progress: ${calculationRuns} / ${runsAfterThisSlot[0]}`);

    combination.calculationRuns = calculationRuns;

    const globalCalculationRuns = combinations.reduce(
      (prev, cur) => prev + (cur.calculationRuns ?? 0),
      0,
    );
    console.log(`total progress: ${globalCalculationRuns} / ${globalCalculationTotal}`);

    const result = {
      percent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
      isChanged,
      list: globalList,
      filteredList: globalFilteredList,
    };

    if (combinations.some((comb) => !comb.done)) {
      yield result;
    } else {
      return result;
    }
  }
}
