import { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { downloadPdf } from '../utils/PdfUtils.js';
import { getMotivationLetter } from '../services/MotivationLetterService.js';

function CartaDeMotivacao() {

    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = {
            company: company,
            role: role,
            experience: experience
        };
        try {
            const pdf = await getMotivationLetter(request);
            const fileName = `MotivationLetter_${format(new Date(), 'dd-MM-yyyy_HH-mm')}`;
            downloadPdf(pdf, fileName);
            cleanFields();
        } catch (exception) {
            console.log(exception);
        }
    }

    const cleanFields = () => {
        setCompany('');
        setRole('');
        setExperience('');
    }

    return (
        <div className="CartaDeMotivacao">
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1>Nome da empresa</h1>
                        <input
                            required
                            placeholder="Qual é o nome da empresa?"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div>
                        <h1>Cargo desejado</h1>
                        <input
                            required
                            placeholder="Qual é a vaga?"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                    <div>
                        <h1>Experiência</h1>
                        <textarea
                            required
                            placeholder="Escreva sua experiência"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                        />
                    </div>
                    <div className="botoes">
                        <Link to="/Curriculum-AI-FrontEnd"><button className="btnVoltar">VOLTAR</button></Link>
                        <button className="btnDownload" type="submit">DOWNLOAD</button>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default CartaDeMotivacao;