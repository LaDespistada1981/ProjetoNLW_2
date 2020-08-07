import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFBiaRyG_vGlw/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=JtPxxZQ8IbPOqNPCWkdVm3SIQ2nm1eN7rKoSwG2kAn0" alt="Roberta Santos"/>
                <div>
                    <strong>Roberta Santos</strong>
                    <span>Cálculo Vetorial</span>
                </div>
            </header>
                   
            <p>
                Arquiteta e Engenheira civil, tenho enorme prazer em ensinar.
                <br/><br/>
                Sempre acreditei que conhecimento deve ser compartilhado para
                o maior número de pessoas possível para que todos possam ter 
                oportunidades iguais de desenvolvimento.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;