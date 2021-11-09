import CatsImages from './CatsImages';
import Counter from './Counter';
import Names from './Names';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Counter />
      <Names />
      <CatsImages initalBreedId="char" />
    </div>
  );
}

export default App;
