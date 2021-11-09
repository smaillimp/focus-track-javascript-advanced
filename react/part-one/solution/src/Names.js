import { useState } from 'react';
import ClickedNames from './ClickedNames';

const firstNames = ['David', 'Peter', 'Max'];

const Names = () => {
  const [clickedNames, setClickedNames] = useState([]);

  const handleClick = (name) => {
    console.log(name);
    setClickedNames([...clickedNames, name]);
  };

  return (
    <div>
      <ul>
        {firstNames
          .filter((name) => !clickedNames.includes(name))
          .map((name) => (
            <li key={name} onClick={() => handleClick(name)}>
              {name}
            </li>
          ))}
      </ul>
      <ClickedNames names={clickedNames} />
    </div>
  );
};

export default Names;
