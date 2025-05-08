import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Renda IA - Maquina para Ganhar 6 dígitos por mês com IA',
  description: 'Faça login na plataforma Renda IA e descubra como gerar renda usando Inteligência Artificial',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 