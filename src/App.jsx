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
import TabelaProduto from './components/repeticao/TabelaProduto';
import ParOuImpar from './components/condicional/ParOuImpar';
import UserInfo from './components/condicional/UserInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import InputForm from './components/formulario/InputForm';
import Contador from './components/contador/Contador';
import MegaSenaGenerator from './components/megasena/MegaSenaGenerator';

export default () => (
  <div id="app">
    <h1>Fundamento React</h1>
    
    <div className="cards">
        <Card titulo="#Desafio 3 - Mega da Virada">
            <MegaSenaGenerator
              repeat={false} />
        </Card>

        <Card titulo="#10 - Contador" color="#773126">
            <Contador valor={10} />
        </Card>
        <Card titulo="#09 - Componente Controlado" color="#666699">
            <InputForm />
        </Card>

        <Card titulo="#08 - Comunicação Indireta" color="#996699">
            <IndiretaPai />
        </Card>

        <Card titulo="#07 - Comunicação Direta" color="#996699">
            <DiretaPai/>
        </Card>

        <Card titulo="#06 - Renderizar Par ou Impar" color="#996699">
            <ParOuImpar numero={8}></ParOuImpar>
            <UserInfo usuario={{nome: 'José'}}></UserInfo>
        </Card>


        <Card titulo="#Desafio 2 - Tabela de Produtos" color="#993366">
            <TabelaProduto></TabelaProduto>
        </Card>

        <Card titulo="#05 - Repetições" color="#339966">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#04 - Componentes com Filhos" color="#00C8F8">
            <Familia sobrenome="Souza">
                <FamiliaMembro nome="João"  />
                <FamiliaMembro nome="Pedro" />
                <FamiliaMembro nome="Caio"  />
            </Familia>
        </Card>

        <Card titulo="#Desafio 1 - Aleatório" color="#FA6900">
            <Random minimo={10} maximo={100}></Random>
        </Card>


        <Card titulo="#03 - Fragmento" color="#E94C6F">
            <Fragmento title="Component Fragment" content="Sou um Fragment"></Fragmento>
        </Card>


        <Card titulo="#02 - Component com parametro" color="#E8B71A">
            <ComParametro 
            titulo="Titulo param" 
            subtitulo="Meu Subtitulo">
            </ComParametro>    
        </Card>


        <Card titulo="#01 - Primeiro Component">
            <Primeiro />
        </Card>
    </div>
    
        
  </div>
)
