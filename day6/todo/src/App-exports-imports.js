import Zzzzz from './CatalogItem';
import { Card } from './Card';
import data, {
  print,
  printWithStars,
  a,
  printWithSlash as superPrint,
} from './common';
import { API_URL } from './constants';

function App() {
  print(111);
  printWithStars(111);
  console.log(a);
  console.log(API_URL);
  console.log(data);
  superPrint(888);

  return (
    <div className="App">
      123
      <Zzzzz />
      <Card />
    </div>
  );
}

export default App;
