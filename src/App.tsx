import './App.css';

import Preview from './components/preview/preview';
import Range from './components/range/range';
import Checkbox from './components/checkbox/checkbox';
import Strength from './components/strength/strength';
import GenerateBtn from './components/generate/generateBtn';

function App() {

  return (
    <div className="App">
      <h1 className='title'>Password-inator</h1>
      <Preview />
      <Range />
      <Checkbox />
      <Strength />
      <GenerateBtn />
    </div>
  );
}

export default App;
