import { useState } from 'react';
import Cat from './components/Cat';
import Example from './components/Example';

function App() {
  const [isExampleShown, setIsExampleShown] = useState(true);

  const showHideExample = () => {
    console.log(123);
    // if (isExampleShown === true) {
    //   setIsExampleShown(false);
    // } else {
    //   setIsExampleShown(true);
    // }
    setIsExampleShown(!isExampleShown); // toggle
  };

  return (
    <div className="App">
      <button onClick={showHideExample}>Показать / скрыть Example</button>
      {/* <Cat /> */}
      {isExampleShown && <Example />}
    </div>
  );
}

export default App;
