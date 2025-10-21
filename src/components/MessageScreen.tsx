import { ArrowLeft, Send, Paperclip, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';

interface MessageScreenProps {
  onBack: () => void;
}

export function MessageScreen({ onBack }: MessageScreenProps) {
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

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
              Resposta em até 2 horas
            </Badge>
            <h1 className="mb-4">Enviar Mensagem</h1>
            <p className="text-xl text-gray-600">
              Descreva sua dúvida ou problema e nossa equipe entrará em contato em breve
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Criar Ticket de Suporte</CardTitle>
                  <CardDescription>
                    Preencha todos os campos para que possamos ajudar você melhor
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input id="name" placeholder="Seu nome" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Descreva brevemente o problema" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="priority">Prioridade</Label>
                      <select
                        id="priority"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Baixa</option>
                        <option>Média</option>
                        <option>Alta</option>
                        <option>Urgente</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Categoria</Label>
                      <select
                        id="category"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Suporte Técnico</option>
                        <option>Cobrança</option>
                        <option>Conta</option>
                        <option>Funcionalidade</option>
                        <option>Outro</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        placeholder="Descreva seu problema em detalhes..."
                        rows={6}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Paperclip className="w-4 h-4" />
                        Anexar Arquivo
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4" />
                        Adicionar Imagem
                      </Button>
                    </div>

                    <Button className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tempo de Resposta</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">Urgente</p>
                        <p className="text-gray-600">30 minutos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">Alta</p>
                        <p className="text-gray-600">2 horas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">Média</p>
                        <p className="text-gray-600">4 horas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-medium">Baixa</p>
                        <p className="text-gray-600">24 horas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dicas Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600 space-y-3">
                  <p>• Seja específico sobre o problema</p>
                  <p>• Inclua capturas de tela se possível</p>
                  <p>• Mencione quando o problema começou</p>
                  <p>• Descreva os passos para reproduzir</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
