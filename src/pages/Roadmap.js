import { useState } from 'react';
import { Link } from 'react-router-dom';
import { showToastSuccess, showToastError } from '../components/toastService';

function Roadmap() {
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = () => {
    setLoading(true);

    //setTimeout(() => {
      //setLoading(false);
    //}, 2000);
  };

  const handleSuccessClick = () => {
    showToastSuccess("Operação realizada com sucesso!");
  };

  const handleErrorClick = () => {
    showToastError("Ocorreu um erro!");
  };

  return (
    <div className="Roadmap">
      <div>
        <h1>Vaga</h1>
        <textarea placeholder="Qual vaga quer se candidatar?" />
      </div>
      <div className="botoes">
        <Link to="/Curriculum-AI-FrontEnd">
          <button className="btnVoltar">VOLTAR</button>
        </Link>
        <button 
          className={loading ? "btnLoading" : "btnDownload"}
          onClick={handleDownloadClick}
        >
          {loading ? (
            <span className="loader"></span>
          ) : (
            'DOWNLOAD'
          )}
        </button>
      </div>
      <button onClick={handleSuccessClick}>Mostrar Sucesso</button>
      <button onClick={handleErrorClick}>Mostrar Erro</button>
    </div>
  );
}

export default Roadmap;