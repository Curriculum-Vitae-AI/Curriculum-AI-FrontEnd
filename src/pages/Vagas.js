import { useState } from 'react';
import { Link } from 'react-router-dom';

import { listVacancy } from '../services/VacancyService.js';
import { showToastSuccess, showToastError } from '../components/Toaster.js';

function Vagas() {

    const [role, setRole] = useState('');
    const [locality, setLocality] = useState('');
    const [seniority, setSeniority] = useState('');

    const [jobLinks, setJobLinks] = useState([]);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setJobLinks([]);

        const request = {
            role: role,
            locality: locality,
            seniority: seniority
        };
        try {
            const jobs = await listVacancy(request);
            setJobLinks(jobs);
            showToastSuccess('Vagas encontradas com sucesso!');
            cleanFields();
        } catch (exception) {
            showToastError(exception.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    const cleanFields = () => {
        setRole('');
        setLocality('');
        setSeniority('');
    }

    const transformLink = (link) => {
        const match = link.match(/www\.(.*?)\.com/);
        if (match) {
            const siteName = match[1];
            const capitalizedSiteName = siteName.charAt(0).toUpperCase() + siteName.slice(1);
            return capitalizedSiteName;
        }
        return link;
    };

    return (
        <div className="Vagas">
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <h1>Cargo desejado *</h1>
                        <input
                            placeholder="Informe o nome do cargo desejado para realizar a busca"
                            required
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            maxLength={30}
                        />
                    </div>
                    <div>
                        <h1>Localidade *</h1>
                        <input
                            placeholder="Informe o local da vaga, ou digite 'remoto' para buscar vagas em todo o país"
                            required
                            value={locality}
                            onChange={(e) => setLocality(e.target.value)}
                            maxLength={30}
                        />
                    </div>
                    <div>
                        <h1>Senioridade da vaga *</h1>
                        <input
                            placeholder="Júnior, Pleno, Sênior e  etc..."
                            required
                            value={seniority}
                            onChange={(e) => setSeniority(e.target.value)}
                            maxLength={15}
                        />
                    </div>
                    {jobLinks.length > 0 ? (
                        <div>
                            <h1>Links gerados:</h1>
                            <ul>
                                {jobLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            {transformLink(link)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : undefined}
                </div>
                <div className="botoes">
                    <Link to="/"><button className="btnVoltar">VOLTAR</button></Link>
                    <button
                        className={loading ? "btnLoading" : "btnDownload"}
                        type="submit"
                    >
                        {loading ? (
                            <span className="loader"></span>
                        ) : (
                            'BUSCAR'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Vagas;