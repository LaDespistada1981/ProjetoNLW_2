import React from 'react';



import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">
               <form id="search-teachers">
                    <Select
                     name="subject" 
                     label="Matéria"
                     options={[
                         { value:'Artes', label: 'Artes' },
                         { value:'Biologia', label: 'Biologia' },
                         { value:'Cálculo Vetorial', label: 'Cálculo Vetorial' },
                         { value:'Ciências', label: 'Ciências' },
                         { value:'Desenho', label: 'Desenho' },
                         { value:'Espanhol', label: 'Espanhol' },
                         { value:'Estatística', label: 'Estatística' },
                         { value:'Física', label: 'Física' },
                         { value:'Geogragia', label: 'Geogragia' },
                         { value:'Geometria', label: 'Geometria' },
                         { value:'História', label: 'História' },
                         { value:'História da Arte', label: 'História da Arte' },
                         { value:'Inglês', label: 'Inglês' },
                         { value:'Literatura', label: 'Literatura' },
                         { value:'Matemática', label: 'Matemática' },
                         { value:'Português', label: 'Português' },
                         { value:'Química', label: 'Química' },
                     ]}
                    />

                    <Select
                     name="week_day" 
                     label="Dia da semana"
                     options={[
                        { value:'0', label: 'Domingo' },
                        { value:'1', label: 'Segunda-feira' },
                        { value:'2', label: 'Terça-feira' },
                        { value:'3', label: 'Quarta-feira' },
                        { value:'4', label: 'Quinta-feira' },
                        { value:'5', label: 'Sexta-feira' },
                        { value:'6', label: 'Sábado' },
                     ]}
                    />
                    <Input type="time" name="time" label="Horário" />
               </form>
           </PageHeader>

           <main>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
               <TeacherItem/>
           </main>
        </div>
    );
}

export default TeacherList;