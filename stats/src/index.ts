import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

//Create obj that satisfies DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// Create instance of MatchReader and pass in smt satisfying DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United has won ${manUnitedWins} games`);
