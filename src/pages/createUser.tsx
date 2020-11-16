import React, { FormEvent, useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import Sidebar from '../pages/components/topBar/TopBar';

import '../styles/pages/createStartup.css';
//import '../styles/pages/create-nursingHome.css';

import api from "../services/api";

export default function CreateNursingHome() {

  const history = useHistory();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if(!event.target.files){
      return;
    }    

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('phone', phone);

    images.forEach(image => {
      data.append('images', image);
    });

    await api.post('nursingHome', data);

    alert('Cadastro realizado com sucesso!');

    history.push('/app');
  }

  return (
    <div id="page-create-startup">

      <main>
        <form onSubmit={handleSubmit} className="create-startup-form">
          <fieldset>
            
            <div className="input-block">

              <div className="images-container">
                {previewImages.map(image => {
                  return (
                    <img key={image} src={image} alt={image} />
                  )
                })}
                <label htmlFor="images[]" className="new-image">
                  <FiPlus size={24} color="#343AB5" />
                </label>

              </div>

                <input onChange={handleSelectImages} type="file" id="images[]"/>
            </div>

            <span>A imagem enviada deve ter 500 pixels de largura e 500 pixels de comprimento</span>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input 
              id="name" 
              value={name} 
              onChange={event => setName(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="email">Email</label>
              <input 
              id="email" 
              value={email} 
              onChange={event => setEmail(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="phone">Telefone</label>
              <input 
              type="tel"
              id="phone" 
              value={phone} 
              onChange={event => setPhone(event.target.value)} />
            </div>

          </fieldset>

          <button className="confirm-button" type="submit">
            Salvar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
