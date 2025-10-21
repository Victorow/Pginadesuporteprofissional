import { ArrowLeft, Phone, Clock, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface CallScreenProps {
  onBack: () => void;
}

export function CallScreen({ onBack }: CallScreenProps) {
  const availableSlots = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: false },
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

        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">
              Especialistas Disponíveis
            </Badge>
            <h1 className="mb-4">Falar com Especialista</h1>
            <p className="text-xl text-gray-600">
              Agende uma ligação ou entre em contato agora mesmo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-green-200 shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Ligar Agora</CardTitle>
                <CardDescription>
                  Fale imediatamente com nossa equipe de suporte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-green-900">Suporte Geral</p>
                      <p className="text-2xl font-bold text-green-700">0800 123 4567</p>
                    </div>
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-red-900">Emergência 24/7</p>
                      <p className="text-2xl font-bold text-red-700">0800 999 8888</p>
                    </div>
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>Horário de Atendimento</span>
                  </div>
                  <p className="text-sm text-gray-700">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-sm text-gray-700">Sábado: 9h às 13h</p>
                  <p className="text-sm text-gray-700 font-medium">Emergências: 24/7</p>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Iniciar Chamada
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Agendar Ligação</CardTitle>
                <CardDescription>
                  Escolha o melhor horário para você
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Data</label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Horários Disponíveis</label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableSlots.map((slot, index) => (
                      <button
                        key={index}
                        disabled={!slot.available}
                        className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                          slot.available
                            ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-2 border-blue-200'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Tipo de Atendimento</label>
                  <select className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Suporte Técnico</option>
                    <option>Consultoria</option>
                    <option>Treinamento</option>
                    <option>Vendas</option>
                  </select>
                </div>

                <Button className="w-full" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirmar Agendamento
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                O que esperar da ligação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    1
                  </div>
                  <div>
                    <p className="font-medium mb-1">Análise do Problema</p>
                    <p className="text-sm text-gray-600">Nosso especialista irá entender sua necessidade</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    2
                  </div>
                  <div>
                    <p className="font-medium mb-1">Solução Personalizada</p>
                    <p className="text-sm text-gray-600">Apresentaremos a melhor solução para você</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                    3
                  </div>
                  <div>
                    <p className="font-medium mb-1">Acompanhamento</p>
                    <p className="text-sm text-gray-600">Garantimos que sua dúvida foi resolvida</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
