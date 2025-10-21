import { useState } from 'react';
import { Mail, Phone, FileText, BookOpen, Settings, Shield, HelpCircle, Search, ArrowRight, Clock, Users, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { ContactForm } from './components/ContactForm';
import { Toaster } from './components/ui/sonner';
import { SupportWidget } from './components/SupportWidget';
import { MessageScreen } from './components/MessageScreen';
import { CallScreen } from './components/CallScreen';
import { GuidesScreen } from './components/GuidesScreen';
import { motion } from 'motion/react';

type Screen = 'home' | 'message' | 'call' | 'guides';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const knowledgeBaseCategories = [
    {
      icon: BookOpen,
      title: 'Primeiros Passos',
      description: 'Guias para começar a usar nossa plataforma',
      articles: 12,
      color: 'text-blue-600'
    },
    {
      icon: Settings,
      title: 'Configurações',
      description: 'Aprenda a configurar sua conta e preferências',
      articles: 8,
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Informações sobre privacidade e proteção de dados',
      articles: 6,
      color: 'text-green-600'
    },
    {
      icon: HelpCircle,
      title: 'Solução de Problemas',
      description: 'Resolva os problemas mais comuns',
      articles: 15,
      color: 'text-orange-600'
    }
  ];

  const faqs = [
    {
      question: 'Como faço para criar uma conta?',
      answer: 'Para criar uma conta, clique no botão "Cadastrar" no canto superior direito da página inicial. Preencha o formulário com suas informações pessoais, escolha uma senha segura e confirme seu e-mail. Você receberá um link de verificação para ativar sua conta.'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos cartões de crédito (Visa, Mastercard, American Express), débito, PIX, boleto bancário e transferência bancária. Para assinaturas recorrentes, recomendamos o uso de cartão de crédito para maior comodidade.'
    },
    {
      question: 'Como posso alterar minha senha?',
      answer: 'Para alterar sua senha, acesse "Configurações" no menu do seu perfil, clique em "Segurança" e selecione "Alterar Senha". Você precisará inserir sua senha atual e depois a nova senha duas vezes para confirmação.'
    },
    {
      question: 'Qual é o prazo de cancelamento?',
      answer: 'Você pode cancelar sua assinatura a qualquer momento. O cancelamento terá efeito no final do período de faturamento atual, ou seja, você continuará tendo acesso até o fim do período já pago. Não há multas ou taxas de cancelamento.'
    },
    {
      question: 'Como funciona o suporte técnico?',
      answer: 'Oferecemos suporte por diversos canais: chat ao vivo (Seg-Sex, 9h-18h), e-mail (resposta em até 24h) e telefone. Para problemas críticos, nosso time está disponível 24/7 através do e-mail de emergência suporte-urgente@exemplo.com.'
    },
    {
      question: 'Os meus dados estão seguros?',
      answer: 'Sim! Utilizamos criptografia de ponta a ponta, conformidade com LGPD, certificação ISO 27001 e realizamos auditorias de segurança regulares. Seus dados são armazenados em servidores seguros e nunca são compartilhados com terceiros sem sua autorização.'
    },
    {
      question: 'Posso exportar meus dados?',
      answer: 'Sim, você pode exportar todos os seus dados a qualquer momento. Vá em "Configurações" > "Privacidade" > "Exportar Dados". Você receberá um arquivo completo com todas as suas informações em formato JSON ou CSV.'
    },
    {
      question: 'Existe um período de teste gratuito?',
      answer: 'Sim! Oferecemos 14 dias de teste gratuito para todos os novos usuários. Você terá acesso completo a todos os recursos premium durante este período, sem necessidade de cartão de crédito. Após o término, você pode escolher um plano ou continuar com a versão gratuita.'
    }
  ];

  const stats = [
    { icon: Users, value: '10M+', label: 'Usuários Ativos' },
    { icon: Clock, value: '24/7', label: 'Suporte Disponível' },
    { icon: Award, value: '4.9/5', label: 'Avaliação Média' },
    { icon: Zap, value: '<5min', label: 'Tempo de Resposta' }
  ];

  if (currentScreen === 'message') {
    return <MessageScreen onBack={() => setCurrentScreen('home')} />;
  }

  if (currentScreen === 'call') {
    return <CallScreen onBack={() => setCurrentScreen('home')} />;
  }

  if (currentScreen === 'guides') {
    return <GuidesScreen onBack={() => setCurrentScreen('home')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <SupportWidget />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100">
                Atendimento Premium 24/7
              </Badge>
            </motion.div>
            
            <motion.h1
              className="mb-6 text-5xl md:text-6xl tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Como podemos
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                ajudar você
              </span>
            </motion.h1>
            
            <motion.p
              className="mb-10 text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Encontre respostas instantâneas, conecte-se com especialistas ou explore nossa base de conhecimento completa
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  className="pl-14 pr-36 py-7 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 transition-all shadow-lg"
                  placeholder="Pesquisar artigos, tutoriais, perguntas..."
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-6">
                  Buscar
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Ou escolha: 
                <button className="mx-2 text-blue-600 hover:underline">Como começar</button>
                <button className="mx-2 text-blue-600 hover:underline">Integrações</button>
                <button className="mx-2 text-blue-600 hover:underline">Preços</button>
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-3">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="border-2 hover:border-blue-500 hover:shadow-xl transition-all cursor-pointer group h-full"
                  onClick={() => setCurrentScreen('message')}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle>Enviar Mensagem</CardTitle>
                    <CardDescription>
                      Nossa equipe responde em até 2 horas durante horário comercial
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-blue-600 font-medium">
                      <span>Criar ticket</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="border-2 hover:border-green-500 hover:shadow-xl transition-all cursor-pointer group h-full"
                  onClick={() => setCurrentScreen('call')}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle>Ligar Agora</CardTitle>
                    <CardDescription>
                      Fale diretamente com um especialista de segunda a sexta
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-green-600 font-medium">
                      <span>0800 123 4567</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  className="border-2 hover:border-purple-500 hover:shadow-xl transition-all cursor-pointer group h-full"
                  onClick={() => setCurrentScreen('guides')}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle>Explorar Guias</CardTitle>
                    <CardDescription>
                      Tutoriais passo a passo e documentação completa
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-purple-600 font-medium">
                      <span>Ver documentação</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4">Central de Ajuda Completa</h2>
              <p className="text-xl text-gray-600">
                Tudo o que você precisa para ter sucesso com nossa plataforma
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Tabs defaultValue="faq" className="bg-white rounded-2xl shadow-xl p-8">
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-xl">
                  <TabsTrigger value="faq" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    Perguntas Frequentes
                  </TabsTrigger>
                  <TabsTrigger value="contact" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    Contato
                  </TabsTrigger>
                  <TabsTrigger value="knowledge" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                    Base de Conhecimento
                  </TabsTrigger>
                </TabsList>

                {/* FAQ Tab */}
                <TabsContent value="faq">
                  <Card className="border-0 shadow-none">
                    <CardHeader>
                      <CardTitle>Perguntas Frequentes</CardTitle>
                      <CardDescription>
                        Encontre respostas rápidas para as dúvidas mais comuns
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Contact Tab */}
                <TabsContent value="contact">
                  <Card className="border-0 shadow-none">
                    <CardHeader>
                      <CardTitle>Entre em Contato</CardTitle>
                      <CardDescription>
                        Preencha o formulário abaixo e nossa equipe entrará em contato em breve
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ContactForm />
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Mail className="w-5 h-5" />
                          E-mail
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-2">suporte@exemplo.com</p>
                        <p className="text-sm text-gray-500">Tempo médio de resposta: 24 horas</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="w-5 h-5" />
                          Telefone
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-2">0800 123 4567</p>
                        <p className="text-sm text-gray-500">Segunda a Sexta, 9h às 18h</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Knowledge Base Tab */}
                <TabsContent value="knowledge">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {knowledgeBaseCategories.map((category, index) => {
                      const Icon = category.icon;
                      return (
                        <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <Icon className={`w-8 h-8 ${category.color}`} />
                                <div>
                                  <CardTitle className="mb-1">{category.title}</CardTitle>
                                  <CardDescription>{category.description}</CardDescription>
                                </div>
                              </div>
                              <Badge variant="secondary">{category.articles} artigos</Badge>
                            </div>
                          </CardHeader>
                        </Card>
                      );
                    })}
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        Artigos Populares
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          'Como configurar autenticação em dois fatores',
                          'Guia completo de integração com APIs',
                          'Melhores práticas de segurança',
                          'Como migrar dados de outra plataforma',
                          'Personalização avançada do painel de controle'
                        ].map((article, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <FileText className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-700">{article}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-white">Ainda não encontrou o que procura</h2>
            <p className="text-xl mb-10 text-blue-100">
              Nossa equipe de especialistas está pronta para ajudar com qualquer dúvida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Falar com Especialista
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Agendar Demonstração
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
