import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/* Numbers */
// const numbersCollection = new NumbersCollection([11, 3, -5, 14, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
const numbersCollection = new NumbersCollection([11, 3, -5, 14, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

/* Strings */
// const charactersCollection = new CharactersCollection('XaaAyBcDE');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
const charactersCollection = new CharactersCollection('XaaAyBcDE');
charactersCollection.sort();
console.log(charactersCollection.data);

/* Linked List */
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
