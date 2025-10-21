import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio do formulário
    console.log('Form submitted:', formData);
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      category: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome Completo *</Label>
          <Input
            id="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Categoria *</Label>
        <Select value={formData.category} onValueChange={(value) => handleChange('category', value)} required>
          <SelectTrigger id="category">
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tecnico">Suporte Técnico</SelectItem>
            <SelectItem value="vendas">Vendas</SelectItem>
            <SelectItem value="faturamento">Faturamento</SelectItem>
            <SelectItem value="geral">Dúvida Geral</SelectItem>
            <SelectItem value="feedback">Feedback</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Assunto *</Label>
        <Input
          id="subject"
          placeholder="Resumo da sua questão"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem *</Label>
        <Textarea
          id="message"
          placeholder="Descreva sua questão em detalhes..."
          rows={6}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full md:w-auto">
        Enviar Mensagem
      </Button>
    </form>
  );
}
