import React, { FormEvent, useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import SideBar from "./components/sideBar/SideBar";

import perfil from "../images/ProfilePicture.svg";

import "../styles/pages/createStartup.css";
//import '../styles/pages/create-nursingHome.css';

import api from "../services/api";

export default function CreateNursingHome() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);

    images.forEach(image => {
      data.append("images", image);
    });

    await api.post("nursingHome", data);

    alert("Cadastro realizado com sucesso!");

    history.push("/app");
  }

  return (
    <div id="page-create-startup">
      <SideBar isLogo={false} />
      <main>
        <form onSubmit={handleSubmit} className="create-startup-form">
          <div className="input-block">
            <div className="images-container">
              <span>
                <label htmlFor="images[]" className="new-image">
                  <FiPlus size={24} color="#343AB5" />
                </label>
              </span>
            </div>

            <input onChange={handleSelectImages} type="file" id="images[]" />
          </div>

          <span>A imagem: 500x500 pixels</span>

          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="phone">Telefone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
          </div>

          <button
            className="confirm-button"
            type="submit"
            onClick={() => {
              history.push("dashboard");
            }}
          >
            Salvar
          </button>
        </form>
      </main>
    </div>
  );
}
