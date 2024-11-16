import { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import { downloadPdf } from '../utils/PdfUtils.js';
import { getMotivationLetter } from '../services/MotivationLetterService.js';
import { showToastSuccess, showToastError, showToastGenericError } from '../components/Toaster.js';

import styles from "../styles/components/Forms.module.css";

function CartaDeMotivacao() {

    const [loading, setLoading] = useState(false);

    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const request = {
            company: company,
            role: role,
            experience: experience
        };
        try {
            const pdf = await getMotivationLetter(request);
            const fileName = `MotivationLetter_${format(new Date(), 'dd-MM-yyyy_HH-mm')}`;
            downloadPdf(pdf, fileName);
            showToastSuccess('Carta de motivação gerada com sucesso!');
            cleanFields();
        } catch (exception) {
            const errorData = await exception?.response?.data?.text();
            if (errorData) {
                const error = JSON.parse();
                showToastError(error.error);
            } else {
                showToastGenericError()
            }
        } finally {
            setLoading(false);
        }
    }

    const cleanFields = () => {
        setCompany('');
        setRole('');
        setExperience('');
    }

    return (
        <div className={styles.CartaDeMotivacao}>
            <div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div>
                        <h1>Nome da empresa *</h1>
                        <input
                            required
                            placeholder="Qual é o nome da empresa?"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            maxLength={30}
                        />
                    </div>
                    <div>
                        <h1>Cargo desejado *</h1>
                        <input
                            required
                            placeholder="Qual é a vaga?"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            maxLength={30}
                        />
                    </div>
                    <div>
                        <h1>Experiência *</h1>
                        <textarea
                            required
                            placeholder="Escreva sua experiência"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            maxLength={100}
                        />
                    </div>
                    <div className={styles.botoes}>
                        <Link to="/"><button className="btnVoltar">VOLTAR</button></Link>
                        <button
                            className={loading ? "btnLoading" : "btnDownload"}
                            type="submit">
                            {loading ? (
                                <span className="loader"></span>
                            ) : (
                                'DOWNLOAD'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CartaDeMotivacao;