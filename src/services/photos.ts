// função para pegar as fotos do storage, que vai retornar uma lista de fotos

import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import {v4 as createId} from 'uuid';

export const getAll = async () => {
  // retorna uma promise de array de foto
  //async: quando trabalhamos com serviços externos devemos esperar suas repostas e promise: promessa, instaneo, e no futuro sera um array de foto
  let list: Photo[] = [];
  const imagesFolder = ref(storage, "Images");
  // imagesFolde cria referncia da pasta
  const photoList = await listAll(imagesFolder);
  // photoList le os arquivos que stao na pasta

  for (let i in photoList.items) {
    let photoUrl = await getDownloadURL(photoList.items[i]);
    //photoURL pega o arquivo de download, link direto para acessar a foto

    list.push({
      //monto meu array
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }
  console.log(list)
  return list;

  // retorno meu array
};


//envia as fotos:

export const insert = async (file: File) => {
  if(['image/jpg', 'image/jpeg', 'image/png'].includes(file.type)){
    let randomName = createId();
    let newFile = ref(storage, `Images/${randomName}`);
    let upload = await uploadBytes(newFile, file);
    let photoUrl = await getDownloadURL(upload.ref)

    return{ name: upload.ref.name, url: photoUrl,} as Photo;

  }else{
    return new Error('Tipo de arquivo não permitido.');
  }

}

export const deletePhoto = async (name: string) => {
  let photoRef = ref(storage, `Images/${name}`);
  await deleteObject(photoRef);
}