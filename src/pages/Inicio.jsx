// pages/Inicio.jsx
import React from 'react';
import ImageTextSection from '../components/section-components/Section-image-text';
import ImageTextSimple from '../components/image-text/ImageTextSimple';
import LanguageSelector from '../components/LanguageSelector-components/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Inicio = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <div className="d-flex justify-content-end mb-3">
            <LanguageSelector />
          </div>
          <h1 className="display-4 fw-bold mb-4">{t("titulo-pagina")}</h1>
          <p className="lead mb-5">
            {t("subtitulo")}
          </p>
          
          
          <ImageTextSimple />
          <ImageTextSection />          
        </div>
      </div>
    </div>
  );
};

export default Inicio;
