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

export default function ImersaoCryptoPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [openModules, setOpenModules] = useState<string[]>(['introducao'])

  const modules: Module[] = [
    {
      id: 'introducao',
      title: 'Primeiros Passos',
      description: 'Aprenda os fundamentos básicos para começar sua jornada no trading de criptomoedas.',
      videos: [
        { id: 'intro1', title: 'Aula 1 - Primeiros Passos no Curso', videoId: 'acd3b5c4-8536-485d-af5c-a32e1bcf1bfc' },
        { id: 'intro2', title: 'Aula 2 - Como criar conta na Bybit', videoId: '8954304a-73fc-4831-8e93-ec8da5694be8' },
        { id: 'intro3', title: 'Aula 3 - Validando seus documentos', videoId: '7c81a1df-a8ff-47ba-887c-94ab421d3ee1' },
        { id: 'intro4', title: 'Aula 4 - Primeiro deposito', videoId: '5ff10456-1d94-4d40-9081-5bf09b5e5259' },
        { id: 'intro5', title: 'Aula 5 - Apresentando o gráfico e ferramentas', videoId: 'a018e3cb-1ba1-4bc2-a7ae-e6d29ad25c3e' },
        { id: 'intro6', title: 'Aula 6 - Operação na prática', videoId: '7b6fd1c7-4feb-484a-b795-d10bdae1f12f' },
        { id: 'intro7', title: 'Aula 7 - Fundos e topos', videoId: '42ddb13a-37c9-4ed4-8df1-58335272b1db' },
        { id: 'intro8', title: 'Aula 8 - Tendência de alta/ Tendência de baixa', videoId: '25c05dc8-3e0a-4cd0-a06a-8e1401f9ed3d' },
      ]
    },
    {
      id: 'estrategias',
      title: 'Estratégias Iniciais',
      description: 'Conheça indicadores e estratégias fundamentais para suas primeiras operações.',
      videos: [
        { id: 'strat1', title: 'Aula 9 - Médias Móveis (SMA e EMA)', videoId: '081375fa-1bdc-4686-9b55-a4dc2e0059c4' },
        { id: 'strat2', title: 'Aula 10 - Volume', videoId: '53d6a881-b79f-47de-9026-974ef3d53564' },
        { id: 'strat3', title: 'Aula 11 - Trampolim/pulback força de tendência', videoId: '3af5f788-cee8-4cad-a283-77093135840c' },
        { id: 'strat4', title: 'Aula 12 - Operações curtas', videoId: 'f388073e-c611-4069-875c-df478908b0f2' },
        { id: 'strat5', title: 'Aula 13 - Operações longas', videoId: 'f1af6932-c2d5-47c6-9408-5d6773ee4219' },
        { id: 'strat6', title: 'Aula 14 - RSI (Índice de força relativa)', videoId: '68eae7f8-54f8-4665-9616-1f66d0ed2320' },
        { id: 'strat7', title: 'Aula 15 - Ferramenta de reversão de tendência', videoId: '00af2eaa-7ea0-403a-9e0b-b126f98f8eb0' },
        { id: 'strat8', title: 'Aula 16 - Gerenciamento', videoId: '96eedd4e-a766-4fe3-813a-132fd7e04f80' },
      ]
    },
    {
      id: 'avancado',
      title: 'Hackeando o Mercado',
      description: 'Técnicas avançadas de análise e operação utilizadas por traders profissionais.',
      videos: [
        { id: 'adv1', title: 'Aula 17 - SMC (Smart Money Concepts)', videoId: '8a68e8d7-c93a-4e66-bcc0-4b1d00c5838f' },
        { id: 'adv2', title: 'Aula 18 - Order Block', videoId: '3f825f38-d9df-40d8-bc4e-cfe78d98df50' },
        { id: 'adv3', title: 'Aula 19 - BOS (Break of Structure)', videoId: 'd9d6347b-4f1e-42dc-8f6d-9c1e0f1021e8' },
        { id: 'adv4', title: 'Aula 20 - CHoCH (Change of Character)', videoId: '940f6966-758d-4a52-b398-4762a19db1aa' },
        { id: 'adv5', title: 'Aula 21 - FVG (Fair Value Gap)', videoId: 'f7399bfe-dd34-49b5-ae94-66abaa37294a' },
        { id: 'adv6', title: 'Aula 22 - Como Operar com Ombro-Cabeça-Ombro', videoId: 'e2da1c6a-be99-4f3b-8276-4b55db07aa3c' },
        { id: 'adv7', title: 'Aula 23 - Triangulo', videoId: 'a41fea0d-6f0d-411a-a2c9-ea461ca1a3c2' },
        { id: 'adv8', title: 'Aula 24 - Cunha De alta/baixa', videoId: '67bc0a8f-14fa-4138-82e5-c41c6c5b9f30' },
        { id: 'adv9', title: 'Aula 25 - Indicador volume profile', videoId: 'e143d26f-96f7-42af-89ca-395b155c1378' },
      ]
    },
    {
      id: 'ferramentas',
      title: 'Ferramentas Exclusivas',
      description: 'Conheça as ferramentas que vão potencializar seus resultados.',
      videos: [
        { id: 'tool1', title: 'Futuros Tech app', videoId: 'd43d79bd-fffa-41a8-b954-71dd6cd4c318' },
        { id: 'tool2', title: 'Crypy AI', videoId: '5b7769fd-ed77-45fe-b647-809d25af0edb' },
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
                Imersão Crypto 4.0
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