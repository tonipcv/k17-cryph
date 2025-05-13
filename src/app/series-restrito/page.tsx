/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, PlayIcon } from '@heroicons/react/24/outline'
import { OptimizedImage } from '../components/OptimizedImage'
import { Navigation } from '../components/Navigation'
import { PandaPlayer } from '../components/PandaPlayer'

interface Video {
  id: string
  title: string
  videoId: string
}

interface Module {
  id: string
  title: string
  description?: string
  videos: Video[]
  isOpen?: boolean
}

export default function SeriesPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [openModules, setOpenModules] = useState<string[]>(['tutorial'])

  const modules: Module[] = [
    {
      id: 'tutorial',
      title: 'Tutorial para comprar criptomoedas',
      description: 'Aprenda os fundamentos básicos para começar a investir em criptomoedas de forma segura.',
      videos: [
        { id: 'tut1', title: 'Tutorial 01 - O que é o mercado de cripto', videoId: 'd6e9740f-c12a-4a6b-924e-e910ae015e2e' },
        { id: 'tut2', title: 'Tutorial 02 - Criando conta na corretora', videoId: '4e66db8e-58d9-4df0-accc-f4bea01d2ac8' },
        { id: 'tut3', title: 'Tutorial 03 - Como depositar e sacar', videoId: '6932f1fe-99a9-444f-b9da-ac4dea7d6b44' },
        { id: 'tut4', title: 'Tutorial 04 - Coinmarketcap', videoId: 'd2b19017-5e8c-421e-ac8a-6c2e9cbc81d3' },
      ]
    },
    {
      id: 'ativos',
      title: 'Ativos Exclusivos ARS',
      description: 'Análises detalhadas e oportunidades exclusivas selecionadas pela equipe ARS.',
      videos: [
        { id: 'ars1', title: 'Aula 01 - Relatório Cripto', videoId: '4bd37d98-8e43-4d78-904f-ada4ed4ce088' },
        { id: 'ars2', title: 'Aula 02 - 1º Cripto', videoId: 'c43f6efb-124e-49f9-9a6c-d93054d0c24b' },
        { id: 'ars3', title: 'Aula 03 - Comprando cripto do relatório', videoId: 'a148c6a8-3a2b-4399-81ef-fb0306716166' },
        { id: 'ars4', title: 'Aula 04 - Relatório ARS 15/04', videoId: 'f03761b8-d6a1-4353-a996-cc92a3bcfb9c' },
        { id: 'ars5', title: 'Aula 05 - Relatório ARS 19/04', videoId: '29ec6e4d-88a3-4bd5-b75d-bcab4c89f7fd' },
        { id: 'ars6', title: 'Aula 06 - Relatório ARS 30/04', videoId: 'a872cb13-a271-42cd-9f38-ee324c596518' },
        { id: 'ars7', title: 'Aula 07 - Atualização RWA', videoId: 'b10d1c61-7ac0-4a3a-8a7d-71cd4ea3700d' },
        { id: 'ars8', title: 'Aula 08 - Cripto Explosiva', videoId: '50ae818c-03de-436c-bf26-0c64260949dd' },
        { id: 'ars9', title: 'Aula 09 - Cripto em lançamento', videoId: '97c2f4e7-716f-49d4-9638-2eb26b1eb6ec' },
        { id: 'ars10', title: 'Aula 10 - O futuro das criptomoedas', videoId: '24f34e45-6726-457e-9daa-5913b1fc699d' },
      ]
    },
    {
      id: 'avancado',
      title: 'Curso Avançado de Criptomoedas',
      description: 'Domine estratégias avançadas e conceitos fundamentais do mercado cripto.',
      videos: [
        { id: 'adv0', title: 'Seja Bem Vindo', videoId: '2c9c3697-b9e5-4fc6-95ee-80b5693cfa7a' },
        { id: 'adv1', title: 'Aula 01 - Stablecoin', videoId: '72868bdc-784b-4917-882b-70b7c9b95f16' },
        { id: 'adv2', title: 'Aula 02 - Dex e Cex', videoId: '3b4acd54-8056-4c65-8c7c-9ff1bb2227f7' },
        { id: 'adv3', title: 'Aula 03 - Hot Wallet e cold wallet', videoId: '012cd836-110a-430e-8b65-919a04d7159a' },
        { id: 'adv4', title: 'Aula 04 - O que é Rede', videoId: '741d3bd1-a1d7-4a20-a5ab-464fc000fe53' },
        { id: 'adv5', title: 'Aula 05 - Ciclos do Bitcoin', videoId: '9a3b5c23-a0d5-4efb-aca0-e86a366f01ac' },
        { id: 'adv6', title: 'Aula 06 - Wallet na prática', videoId: '66447fef-0900-4e62-9ea0-df2ec30528ca' },
        { id: 'adv7', title: 'Aula 07 - Oque é narrativa', videoId: '93562717-d71e-48c1-bba8-9cf6f981f924' },
        { id: 'adv8', title: 'Aula 08 - Durabilidade de Narrativa', videoId: 'ee81610e-b0c0-44ae-b3b0-6bd708244f04' },
        { id: 'adv9', title: 'Aula 09 - Quando Vender uma cripto', videoId: 'e67ab71a-7cab-4af3-8a02-1c95e73d6fc4' },
        { id: 'adv10', title: 'Aula 10 - Dex na Prática', videoId: '661fe9ef-5162-4600-b815-cd9daf7fd772' },
        { id: 'adv11', title: 'Aula 11 - Taxas de Rede', videoId: 'a609ae9a-c9ee-4079-a871-9735e3d0b9a5' },
        { id: 'adv12', title: 'Aula 12 - Alfa x Beta', videoId: 'ed6660d5-4e54-4f6b-a007-04df0115b161' },
        { id: 'adv13', title: 'Aula 13 - Narrativa nova e antiga', videoId: 'acc49241-4f60-446d-abeb-72ba6e162364' },
        { id: 'adv14', title: 'Aula 14 - Alocação', videoId: 'e1eb4701-d92c-4ec7-8b41-daee94826fa4' },
        { id: 'adv15', title: 'Aula 15 - Momento de usar DCA', videoId: '09c25bfc-c64d-4d7e-8343-4d701b62fda0' },
        { id: 'adv16', title: 'Aula 16 - Como evitar taxa de rede alta', videoId: '6c892d3c-c5e1-44ef-bde6-8b6e3e63fe67' },
        { id: 'adv17', title: 'Aula 17 - Planilha ARS', videoId: 'b3a0529a-4f1c-4994-9430-c2b684f32cf0' },
        { id: 'adv18', title: 'Aula 18 - DCA na planilha', videoId: 'f06531ba-7207-479f-a6be-ecf1f30be3bf' },
        { id: 'adv19', title: 'Aula 19 - Gestão de ativos', videoId: 'ef419745-9ae6-49fb-975c-c77839200f79' },
        { id: 'adv20', title: 'Aula 20 - Planilha (nova Google)', videoId: 'e1763d53-d9c7-492a-9f78-371dd32c140c' },
      ]
    },
    {
      id: 'plantao',
      title: 'Plantão De Dúvidas Ao Vivo',
      description: 'Sessões de perguntas e respostas com especialistas para esclarecer suas dúvidas.',
      videos: [
        { id: 'plt0', title: 'Plantão de Dúvidas - Whatsapp', videoId: '8a288e31-d850-4139-8405-baac7e6488a0' },
        { id: 'plt1', title: 'Plantão de dúvida - (01)', videoId: '45dc14cc-6784-48bd-8ef8-88c12b24f82a' },
        { id: 'plt2', title: 'Plantão de dúvida - (02)', videoId: '38c7c877-172f-4526-8bbc-2b66f1b7c4d3' },
        { id: 'plt3', title: 'Plantão de dúvida - (03)', videoId: '8c99a0eb-2418-4fd6-b0ce-d871f9061cf6' },
        { id: 'plt4', title: 'Plantão de dúvida - (04)', videoId: '56daebc1-136d-4cb5-8e49-629e54c2dede' },
        { id: 'plt5', title: 'Plantão de dúvida - (05)', videoId: 'e003a48b-7f72-4cb0-bffb-0c095934cbb6' },
        { id: 'plt6', title: 'Plantão de dúvida - (06)', videoId: 'd072c053-9b51-4dc9-ad62-6b55957eed09' },
        { id: 'plt7', title: 'Plantão de dúvida - (07)', videoId: 'af1608a2-8292-4207-8e79-d5e65c99a63d' },
        { id: 'plt8', title: 'Plantão de dúvida - (08)', videoId: '88d7e316-56a5-4c81-b39d-41e558e82e9d' },
        { id: 'plt9', title: 'Plantão de dúvida - (09)', videoId: 'dd83c51c-ef6d-4120-9308-73c147a3fe85' },
      ]
    },
    {
      id: 'telegram',
      title: 'Grupo Privado de Atualizações',
      description: 'Mantenha-se atualizado com as últimas novidades e oportunidades do mercado.',
      videos: [
        { id: 'tg1', title: 'Telegram', videoId: '067f904f-34df-4637-8197-8f4ab1c78905' },
      ]
    }
  ]

  const currentVideo = modules
    .flatMap(module => module.videos)
    .find(video => video.id === activeVideo)

  const currentModule = modules
    .find(module => module.videos.some(video => video.id === activeVideo))

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 font-satoshi tracking-[-0.03em]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-zinc-900/90 backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <OptimizedImage src="/ft-icone.png" alt="K17 Logo" width={40} height={40} />
              <span className="text-xl font-bold text-white">
                K17 Academy
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-20">
        {/* Video Player Section */}
        {activeVideo && currentVideo && (
          <div className="bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800">
            <div className="max-w-7xl mx-auto">
              <div className="w-full lg:w-3/4 mx-auto bg-black">
                <PandaPlayer videoId={currentVideo.videoId} />
              </div>
              <div className="px-6 py-6 lg:w-3/4 mx-auto">
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                  <span>{currentModule?.title}</span>
                </div>
                <h2 className="text-2xl font-bold text-white">{currentVideo.title}</h2>
              </div>
            </div>
          </div>
        )}

        {/* Modules List */}
        <div className="max-w-4xl mx-auto px-4 pt-8">
          {modules.map((module) => (
            <div key={module.id} className="mb-6">
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-start justify-between p-6 bg-zinc-900/80 backdrop-blur-sm rounded-lg hover:bg-zinc-800/80 transition-colors border border-zinc-800"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    {module.title}
                    <span className="ml-3 px-2 py-1 text-xs bg-white/5 text-gray-300 rounded-full">
                      {module.videos.length} aulas
                    </span>
                  </h2>
                  <p className="mt-2 text-sm text-gray-400">{module.description}</p>
                </div>
                {openModules.includes(module.id) ? (
                  <ChevronUpIcon className="w-6 h-6 ml-4 flex-shrink-0 text-gray-400" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 ml-4 flex-shrink-0 text-gray-400" />
                )}
              </button>
              
              {openModules.includes(module.id) && (
                <div className="mt-2 space-y-2 pl-4">
                  {module.videos.map((video) => (
                    <button
                      key={video.id}
                      onClick={() => setActiveVideo(video.id)}
                      className={`w-full flex items-center p-4 rounded-lg transition-all ${
                        activeVideo === video.id 
                          ? 'bg-white/10 border-l-2 border-white' 
                          : 'hover:bg-zinc-800/50'
                      }`}
                    >
                      <PlayIcon className={`w-5 h-5 mr-3 ${
                        activeVideo === video.id ? 'text-white' : 'text-gray-500'
                      }`} />
                      <div className="flex-1 text-left">
                        <p className={`text-sm ${
                          activeVideo === video.id ? 'text-white' : 'text-gray-400'
                        }`}>
                          {video.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  )
} 