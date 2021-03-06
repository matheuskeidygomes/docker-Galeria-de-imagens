import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/layout";
import Area from "../../components/area";
import Header from "../../components/header";
import Content from "../../components/content";
import ImageItem from "../../components/imageItem";
import Input from "../../components/input";
import { api } from '../../services/api';
import Loading from '../../assets/loading.gif';

export default function Home() {

  const [title, setTitle] = useState('');
  const [imageList, setImageList] = useState([]);
  const fileField = useRef();
  const [loading, setLoading] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);

  useEffect(() => {
    getImages();
  }, []);

  async function submitImage(e) {

    if (fileField.current.files.length > 0 && title !== "") {

      e.preventDefault();

      setLoadingForm(true);

      const fData = new FormData();
      fData.append('imageTitle', title);

      if (fileField.current.files.length > 0) {
        for (let i = 0; i < fileField.current.files.length; i++) {
          fData.append('file', fileField.current.files[i]);
        }
      }

      let result = await fetch(`${api}upload`, {
        method: 'POST',
        body: fData
      });

      let json = await result.json();

      setLoadingForm(false);

      if (!json.error) {

        alert("Imagem adicionada com sucesso!");
        window.location.href = '/';

      } else {

        alert(json.error);
      }

    } else {

      alert("Por favor, insira um título e uma imagem válida!");

    }

  }

  async function getImages() {

    setLoading(true);
    let result = await fetch(`${api}images`);
    let json = await result.json();
    setImageList(json.images);
    setLoading(false);

  }

  return <>

    <Layout>

      <Area>

        <Header />

        <Input title={title} loadingForm={loadingForm} onChange={(e) => setTitle(e.target.value)} onSubmit={(e) => submitImage(e)} fileField={fileField} loading={loading} />

        <Content>

          {loading ? 

          <img src={Loading} alt="loading" />
          
          :

          imageList.map((image, index) => {
            return <ImageItem key={index} link={`${api}${image.path}`} title={`${image.imageTitle}`} id={image.id} />
          })

          }

        </Content>

      </Area>

    </Layout>

  </>
}

