import Dzarm from '@/components/logos/Dzarm';
import Kenlo from '@/components/logos/Kenlo';
import Hering from '@/components/logos/Hering';
import Samsung from '@/components/logos/Samsung';
import { BsArrowBarDown } from 'react-icons/bs'
import { SiReact } from 'react-icons/si'
import Typescript from '@/components/logos/Typescript';
import Javascript from '@/components/logos/Javascript';
import React from '@/components/logos/React';
import Graphql from '@/components/logos/Graphql';
import NodeJs from '@/components/logos/Nodejs';
import Nextjs from '@/components/logos/Nextjs';
import { FaQuoteLeft } from 'react-icons/fa';


export default function Home() {

  return (
    <main className="flex flex-col items-center w-full flex-1 h-full">
      {/* <Header /> */}
      <div className="flex flex-col justify-center m-auto items-start h-screen p-10 lg:w-1/2 min-h-screen">
        <h2 className="text-5xl text-white font-bold font-titillium">
          Olá, me chamo <span className="gradientAnimation">Pedro.</span>
        </h2>
        <h2 className="text-5xl text-white font-bold font-titillium">
          Muito prazer.
        </h2>
        <p className="text-white font-bold font-titillium mt-3">
          Desenvolvedor Pleno com 3 anos de experiência na stack JavaScript.
        </p>
        <div className='w-full flex justify-center flex-col items-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-3'>
          <a className='text-white font-bold font-titillium animate-pulse text-lg scroll-smooth' href='#about'>Mais Informações</a>
          <BsArrowBarDown className='text-white animate-bounce w-6 h-6 mt-2 delay-500' width={32} height={32} />
        </div>
      </div>
      <div id="about" className='flex w-full px-8 md:px-20 flex-col mt-16'>
        <h1 className='text-6xl font-titillium font-bold text-white text-center underline decoration-red-500'>Sobre mim!</h1>
        <div className='lg:w-2/3 m-auto mt-8'>
          <FaQuoteLeft className='text-white w-28 h-28 float-left mr-3' />
          <p className='text-white italic text-xl mb-3'>Com mais de 3 anos de experiência como desenvolvedor de software, sou um especialista frontend com habilidades focadas em Javascript. Meu compromisso em fornecer soluções inovadoras e eficientes é combinado com uma forte capacidade de resiliência, permitindo-me enfrentar desafios complexos com confiança e perseverança.</p>
          <p className='text-white italic text-xl mb-3'>Ao longo da minha carreira, tenho desenvolvido soluções de software que agregam valor e melhoram a experiência do usuário. Sempre mantenho-me atualizado com as mais recentes tecnologias do setor, o que me permite oferecer soluções práticas e sustentáveis para as necessidades de meus clientes.</p>
          <p className='text-white italic text-xl'>Com habilidades em colaboração, sou um profissional comprometido em trabalhar em equipe para atingir objetivos comuns. Estou sempre disposto a aprender e aprimorar minhas habilidades para fornecer soluções de qualidade que superem as expectativas dos clientes.</p>
        </div>
      </div>
      <div id="projects" className='h-screen flex w-full px-8 md:px-20 flex-col mt-16'>

        <h1 className='text-6xl font-titillium font-bold text-white text-center underline decoration-red-500'>Projetos que fiz parte!</h1>
        <div className='w-full text-white flex justify-center items-center gap-4 m-auto'>
          <div className='w-full mt-8'>
            <div className="relative flex overflow-x-hidden shadow-inner w-full fade">
              <div className="py-12 animate-marquee whitespace-nowrap flex items-center gap-8">
                <span><Samsung className='w-64 inline-block' /></span>
                <span><Hering className='w-64 inline-block' /></span>
                <span><Dzarm className='w-64 inline-block' /></span>
                <span><Kenlo className='inline-block' /></span>
                <span><Samsung className='w-64 inline-block' /></span>
                <span><Hering className='w-64 inline-block' /></span>
              </div>

              <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex items-center gap-8">
                <span><Samsung className='w-64 inline-block' /></span>
                <span><Hering className='w-64 inline-block' /></span>
                <span><Dzarm className='w-64 inline-block' /></span>
                <span><Kenlo className='inline-block' /></span>
                <span><Samsung className='w-64 inline-block' /></span>
                <span><Hering className='w-64 inline-block' /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="stacks" className='h-screen flex w-full px-8 md:px-20 flex-col mt-16 justify-center pb-32'>
        <h1 className='text-6xl font-titillium font-bold text-white text-center underline decoration-red-500'>Stacks que trabalho!</h1>
        <div className='w-fit m-auto mt-20 justify-center gap-11 grid grid-cols-3'>
          <Typescript className='w-16 h-16 rounded-md' />
          <Javascript className='w-16 h-16 rounded-md' />
          <React className=' w-16 h-16' />
          <Nextjs className='w-16 h-16' />
          <Graphql className='w-16 h-16' />
          <NodeJs className='w-16 h-16' />
        </div>
      </div>
      <div className="bgEffect"></div>
    </main >
  );
}
