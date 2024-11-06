import { useState } from 'react';
import { Link } from 'react-router-dom';

function Roadmap() {
  const [loading, setLoading] = useState(false);

  const handleDownloadClick = () => {
    setLoading(true);

    //setTimeout(() => {
      //setLoading(false);
    //}, 2000);
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
    </div>
  );
}

export default Roadmap;