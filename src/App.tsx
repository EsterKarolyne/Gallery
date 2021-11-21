import { useState, useEffect, FormEvent } from "react";
import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";

const App = () => {
  const [uploading, setUploading] = useState(false);

  const [loading, setLoading] = useState(false);
  //state que dira se esta carregando ou nao

  const [photos, setPhotos] = useState<Photo[]>([]);

  // react nao recomenda, excutar codigo de async diretamente no useEffec, entao deve criar uma função
  //se estiver carregando ele mostra, se nao ele para
  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.name} - ${result.message}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  };

  const handleDeleteClick = async (name: string) => {
    await Photos.deletePhoto(name);
    getPhotos();
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Galeria de fotos</C.Header>
        <C.UploadForm onSubmit={handleFormSubmit}>
          <input type="file" name="image"></input>
          <input type="submit" value="Enviar"></input>
          {uploading && "Enviando..."}
        </C.UploadForm>

        {loading && (
          <C.ScreenWarning>
            <div className="emoji">👋</div>
            <div>Carregando...</div>
          </C.ScreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem
                key={index}
                url={item.url}
                name={item.name}
                onDelete={handleDeleteClick}
              />
            ))}
          </C.PhotoList>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenWarning>
            <div className="emoji">😣</div>
            <div>não há fotos cadastradas.</div>
          </C.ScreenWarning>
        )}
      </C.Area>
    </C.Container>
  );
};

export default App;

