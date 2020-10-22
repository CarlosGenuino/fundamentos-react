import React from 'react';
import './App.css';

import Primeiro  from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Randomico'
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';

export default () => (
  <div id="app">
    <h1>Fundamento React</h1>
    
    <div className="cards">

        <Card titulo="Repetições" color="#339966">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="Componentes com Filhos" color="#00C8F8">
            <Familia sobrenome="Souza">
                <FamiliaMembro nome="João"  />
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome="Caio"  />
            </Familia>
        </Card>

        <Card titulo="Desafio Aleatório" color="#FA6900">
            <Random minimo={10} maximo={100}></Random>
        </Card>


        <Card titulo="Fragmento" color="#E94C6F">
            <Fragmento title="Component Fragment" content="Sou um Fragment"></Fragmento>
        </Card>


        <Card titulo="Component com parametro" color="#E8B71A">
            <ComParametro 
            titulo="Titulo param" 
            subtitulo="Meu Subtitulo">
            </ComParametro>    
        </Card>


        <Card titulo="Primeiro Component">
            <Primeiro />
        </Card>
    </div>
    
        
  </div>
)