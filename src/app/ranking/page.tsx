'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeftIcon, TrophyIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { Navigation } from '../components/Navigation';
import { OptimizedImage } from '../components/OptimizedImage';
import { motion } from 'framer-motion';

interface Affiliate {
  id: number;
  name: string;
  sales: number;
  commission: number;
  avatar: string;
  rank: number;
  status: 'vip' | 'super_vip';
}

export default function RankingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [affiliates, setAffiliates] = useState<Affiliate[]>([
    {
      id: 1,
      name: "João Silva",
      sales: 47,
      commission: 23500.00,
      avatar: "J",
      rank: 1,
      status: "super_vip"
    },
    {
      id: 2,
      name: "Maria Santos",
      sales: 42,
      commission: 21000.00,
      avatar: "M",
      rank: 2,
      status: "super_vip"
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      sales: 38,
      commission: 19000.00,
      avatar: "P",
      rank: 3,
      status: "super_vip"
    },
    {
      id: 4,
      name: "Ana Costa",
      sales: 31,
      commission: 15500.00,
      avatar: "A",
      rank: 4,
      status: "super_vip"
    },
    {
      id: 5,
      name: "Lucas Ferreira",
      sales: 25,
      commission: 12500.00,
      avatar: "L",
      rank: 5,
      status: "vip"
    },
    {
      id: 6,
      name: "Carla Rodrigues",
      sales: 22,
      commission: 11000.00,
      avatar: "C",
      rank: 6,
      status: "vip"
    },
    {
      id: 7,
      name: "Rafael Almeida",
      sales: 18,
      commission: 9000.00,
      avatar: "R",
      rank: 7,
      status: "vip"
    },
    {
      id: 8,
      name: "Juliana Lima",
      sales: 15,
      commission: 7500.00,
      avatar: "J",
      rank: 8,
      status: "vip"
    },
    {
      id: 9,
      name: "Bruno Martins",
      sales: 12,
      commission: 6000.00,
      avatar: "B",
      rank: 9,
      status: "vip"
    },
    {
      id: 10,
      name: "Fernanda Castro",
      sales: 10,
      commission: 5000.00,
      avatar: "F",
      rank: 10,
      status: "vip"
    }
  ]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-300 to-yellow-500';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-400';
      case 3:
        return 'bg-gradient-to-r from-amber-600 to-amber-700';
      default:
        return 'bg-gradient-to-r from-gray-700 to-gray-800';
    }
  };

  const getStatusBadge = (status: 'vip' | 'super_vip') => {
    if (status === 'super_vip') {
      return (
        <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium shadow-lg shadow-purple-500/20 flex items-center gap-1">
          <TrophyIcon className="w-3 h-3" />
          SUPER VIP
        </span>
      );
    }
    return (
      <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-[#5a96f4] to-blue-600 text-white font-medium shadow-lg shadow-blue-500/20">
        VIP
      </span>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#5a96f4] border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400">Carregando ranking...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 px-4 py-4 border-b border-gray-800">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#5a96f4] to-blue-600 text-transparent bg-clip-text">Ranking</h1>
          <div className="w-5"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Stats Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 mb-8 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#5a96f4]/10 rounded-xl">
                <ChartBarIcon className="w-6 h-6 text-[#5a96f4]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Top 10 Parceiros</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ranking atualizado dos melhores parceiros do mês. 
                  Conquiste seu lugar entre os melhores e ganhe benefícios exclusivos.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ranking List */}
          <div className="space-y-4">
            {affiliates.map((affiliate, index) => (
              <motion.div
                key={affiliate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 flex items-center gap-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Rank */}
                <div className={`w-10 h-10 ${getRankColor(affiliate.rank)} rounded-xl flex items-center justify-center font-bold text-black shadow-lg`}>
                  {affiliate.rank}
                </div>

                {/* Avatar */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#5a96f4]/20 to-blue-500/10 rounded-xl flex items-center justify-center shadow-inner">
                  <span className="text-2xl text-[#5a96f4] font-bold">
                    {affiliate.avatar}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg">{affiliate.name}</h3>
                    {getStatusBadge(affiliate.status)}
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-400 font-medium">
                      {affiliate.sales} vendas
                    </span>
                    <span className="text-[#5a96f4] font-semibold text-base">
                      {formatCurrency(affiliate.commission)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
} 