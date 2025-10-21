import { useState } from 'react';
import { MessageCircle, X, Send, Mail, Phone, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'menu' | 'chat'>('menu');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'support' }>>([
    { text: 'Olá! Como posso ajudá-lo hoje?', sender: 'support' }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      
      // Simular resposta automática
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: 'Obrigado pela sua mensagem! Um de nossos atendentes entrará em contato em breve.', 
          sender: 'support' 
        }]);
      }, 1000);
    }
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    setView('menu');
  };

  return (
    <>
      {/* Widget Button */}
      <Button
        onClick={toggleWidget}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Widget Panel */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg">Suporte</h3>
              <Badge variant="secondary" className="bg-green-500 text-white">
                Online
              </Badge>
            </div>
            <p className="text-sm text-blue-100">
              {view === 'menu' ? 'Como podemos ajudar?' : 'Chat ao vivo'}
            </p>
          </div>

          {/* Content */}
          {view === 'menu' ? (
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
              <button
                onClick={() => setView('chat')}
                className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Iniciar Chat</div>
                    <div className="text-sm text-gray-500">
                      Converse com nossa equipe
                    </div>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-left">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Enviar E-mail</div>
                    <div className="text-sm text-gray-500">
                      suporte@exemplo.com
                    </div>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-left">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Ligar</div>
                    <div className="text-sm text-gray-500">
                      0800 123 4567
                    </div>
                  </div>
                </div>
              </button>

              <button className="w-full p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all text-left">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <HelpCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">Central de Ajuda</div>
                    <div className="text-sm text-gray-500">
                      Buscar artigos e FAQs
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <>
              {/* Chat Messages */}
              <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white text-gray-900 rounded-bl-none shadow-sm'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite sua mensagem..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <button
                  onClick={() => setView('menu')}
                  className="text-xs text-gray-500 hover:text-gray-700 mt-2"
                >
                  ← Voltar ao menu
                </button>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
}
