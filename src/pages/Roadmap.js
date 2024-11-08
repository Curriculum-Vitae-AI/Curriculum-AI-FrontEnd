import { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { downloadPdf } from '../utils/PdfUtils.js';
import { getRoadMap } from '../services/RoadMapService.js'
import { showToastSuccess, showToastError } from '../components/Toaster.js';

function Roadmap() {

  const [job, setJob] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = {
      job: job
    };
    try {
      const pdf = await getRoadMap(request);
      const fileName = `Roadmap_${format(new Date(), 'dd-MM-yyyy_HH-mm')}`;
      downloadPdf(pdf, fileName);
      showToastSuccess('RoadMap gerado com sucesso!');
      cleanFields();
    } catch (exception) {
      const error = JSON.parse(await exception.response.data.text());
      showToastError(error.error)
    } finally {
      setLoading(false);
    }
  };

  const cleanFields = () => {
    setJob('');
  }

  return (
    <div className="Roadmap">
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Vaga <span>*</span></h1>
          <textarea
            placeholder="Qual vaga quer se candidatar?"
            required
            value={job}
            onChange={(e) => setJob(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className="botoes">
          <Link to="/">
            <button className="btnVoltar">VOLTAR</button>
          </Link>
          <button
            className={loading ? "btnLoading" : "btnDownload"}
            type="submit"
          >
            {loading ? (
              <span className="loader"></span>
            ) : (
              'DOWNLOAD'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Roadmap;