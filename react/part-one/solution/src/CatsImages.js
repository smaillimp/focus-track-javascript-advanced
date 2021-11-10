import { useEffect, useState } from 'react';
import './Cats-Images.css';

const CatsImages = ({ initalBreedId }) => {
  const [breeds, setBreeds] = useState([]);
  const [breedId, setBreedId] = useState(initalBreedId);
  const [catImageUrl, setCatImageUrl] = useState('');

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then((res) => res.json())
      .then((breedsInformation) => {
        const breedNamesAndIds = breedsInformation.map((breedInfo) => ({
          name: breedInfo.name,
          id: breedInfo.id,
        }));

        setBreeds(breedNamesAndIds);
      });
  }, []);

  useEffect(() => {
    if (!breedId) {
      return;
    }

    async function loadCatImage() {
      const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
      const json = await res.json();

      setCatImageUrl(json[0].url);
    }

    loadCatImage();
  }, [breedId]);

  return (
    <div>
      <form>
        <select onChange={(event) => setBreedId(event.target.value)} value={breedId}>
          <option />
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          ))}
        </select>
      </form>
      {catImageUrl && <img src={catImageUrl} alt="Cat" />}
    </div>
  );
};

export default CatsImages;
