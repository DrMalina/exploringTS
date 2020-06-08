import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

//Create obj that satisfies DataReader interface
/* const csvFileReader = new CsvFileReader('football.csv'); */

// Create instance of MatchReader and pass in smt satisfying DataReader interface
/* const matchReader = new MatchReader(csvFileReader);
matchReader.load(); */

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

//const summary = new Summary(new WinsAnalysis('Man City'), new HtmlReport());
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
