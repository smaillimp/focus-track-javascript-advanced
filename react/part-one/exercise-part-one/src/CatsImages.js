import { useEffect, useState } from "react";

const CatsImages = () => {
  const [breeds, setBreeds] = useState([]);
  const [Images, setImages] = useState("");
  const [breedsId, setBreedsId] = useState("");
 

  function getBreeds() {
    fetch(`https://api.thecatapi.com/v1/breeds`)
      .then((response) => response.json())
      .then((breedsInformation) => {
        setBreeds(breedsInformation);
      });
  }

  function getBreedsImages() {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedsId}`)
      .then((response) => response.json())
      .then((breedsImages) => {
        setImages(breedsImages[0].url)
      });
  };

  function eventHandler(e){
    setBreedsId(e.target.value)
  }

  useEffect(() => {
    getBreeds();
    getBreedsImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breedsId]);

  return (
    <div>
    <form>
      <select onChange={eventHandler} >
        {breeds.map((breed) => {
          return (
            <option key={breed.id} value={breed.id}>
              {breed.name}
            </option>
          );
        })}
      </select>
    </form>
    <img src={Images} alt="cat"></img>
    </div>

  );
};

export default CatsImages;
