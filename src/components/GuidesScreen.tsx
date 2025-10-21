import { ArrowLeft, BookOpen, Video, FileText, Download, Clock, TrendingUp, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface GuidesScreenProps {
  onBack: () => void;
}

export function GuidesScreen({ onBack }: GuidesScreenProps) {
  const guides = [
    {
      title: 'Guia de Início Rápido',
      description: 'Tudo que você precisa para começar em 5 minutos',
      duration: '5 min',
      type: 'Artigo',
      level: 'Iniciante',
      popular: true
    },
    {
      title: 'Configuração Avançada de Segurança',
      description: 'Proteja sua conta com autenticação em dois fatores',
      duration: '10 min',
      type: 'Tutorial',
      level: 'Intermediário',
      popular: true
    },
    {
      title: 'Integração com APIs',
      description: 'Aprenda a integrar com serviços externos',
      duration: '15 min',
      type: 'Video',
      level: 'Avançado',
      popular: false
    },
    {
      title: 'Melhores Práticas de Performance',
      description: 'Otimize sua aplicação para máximo desempenho',
      duration: '12 min',
      type: 'Artigo',
      level: 'Intermediário',
      popular: true
    },
    {
      title: 'Automação e Workflows',
      description: 'Configure automações para economizar tempo',
      duration: '8 min',
      type: 'Tutorial',
      level: 'Intermediário',
      popular: false
    },
    {
      title: 'Análise de Dados e Relatórios',
      description: 'Extraia insights valiosos dos seus dados',
      duration: '20 min',
      type: 'Video',
      level: 'Avançado',
      popular: true
    }
  ];

  const videoTutorials = [
    { title: 'Introdução à Plataforma', duration: '3:45', views: '12k' },
    { title: 'Como Criar seu Primeiro Projeto', duration: '8:20', views: '8.5k' },
    { title: 'Gerenciamento de Equipes', duration: '6:15', views: '5.2k' },
    { title: 'Integração com Ferramentas', duration: '10:30', views: '4.8k' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
              Mais de 200 guias disponíveis
            </Badge>
            <h1 className="mb-4">Explorar Guias</h1>
            <p className="text-xl text-gray-600">
              Tutoriais passo a passo, vídeos e documentação completa
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 bg-gray-100 p-1 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg">Todos</TabsTrigger>
              <TabsTrigger value="articles" className="rounded-lg">Artigos</TabsTrigger>
              <TabsTrigger value="videos" className="rounded-lg">Vídeos</TabsTrigger>
              <TabsTrigger value="tutorials" className="rounded-lg">Tutoriais</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.map((guide, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          guide.type === 'Video' ? 'bg-red-100' :
                          guide.type === 'Tutorial' ? 'bg-blue-100' : 'bg-purple-100'
                        }`}>
                          {guide.type === 'Video' ? (
                            <Video className={`w-6 h-6 ${
                              guide.type === 'Video' ? 'text-red-600' :
                              guide.type === 'Tutorial' ? 'text-blue-600' : 'text-purple-600'
                            }`} />
                          ) : (
                            <FileText className={`w-6 h-6 ${
                              guide.type === 'Tutorial' ? 'text-blue-600' : 'text-purple-600'
                            }`} />
                          )}
                        </div>
                        {guide.popular && (
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">
                            <Star className="w-3 h-3 mr-1 fill-yellow-600" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {guide.title}
                      </CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {guide.duration}
                          </span>
                          <Badge variant="outline">{guide.level}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.filter(g => g.type === 'Artigo').map((guide, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {guide.duration}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="space-y-4">
                {videoTutorials.map((video, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Video className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{video.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {video.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              {video.views} visualizações
                            </span>
                          </div>
                        </div>
                        <Button variant="outline">
                          Assistir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tutorials">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.filter(g => g.type === 'Tutorial').map((guide, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {guide.duration}
                        </div>
                        <Badge variant="outline">{guide.level}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-6 h-6 text-purple-600" />
                Downloads Úteis
              </CardTitle>
              <CardDescription>
                Documentação e recursos para baixar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div>
                    <p className="font-medium">Guia Completo PDF</p>
                    <p className="text-sm text-gray-600">Documentação completa - 45 páginas</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div>
                    <p className="font-medium">Cheat Sheet</p>
                    <p className="text-sm text-gray-600">Atalhos e comandos úteis</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
