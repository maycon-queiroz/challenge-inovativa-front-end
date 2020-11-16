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
  const [resume, setResume] = useState('');
  const [area, setArea] = useState(true);
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
    data.append('resume', resume);
    data.append('open_on_weekends', String(area));

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
            <legend>Dados da startup</legend>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input 
              id="name" 
              value={name} 
              onChange={event => setName(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="resume">Resumo</label>
              <textarea 
              id="resume" 
              maxLength={300} 
              value={resume} 
              onChange={event => setResume(event.target.value)} />
            </div>
            
            <div className="input-block">
              <label htmlFor="area">Área de atuação</label>
              <select 
              id="areaAtuacao"
              //value={this.state.value}
              //onChange={event => setArea(event.target.value)} 
              >
                <option value="fintech" selected>Fintech</option>
                <option value="foodtech">Foodtech</option>
                <option value="rhtech">RHtech</option>
                <option value="agrotech">Agrotech</option>
                <option value="edutech">Edutech</option>
              </select>
            </div>

            <div className="input-block">
              <label htmlFor="images">Logotipo</label>

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
