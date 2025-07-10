import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { ChevronRight, CheckCircle, XCircle, RotateCcw, Trophy, Clock, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

const questoes = [
  // Fundamentos de Segurança da Informação (15 questões)
  {
    id: 1,
    categoria: 'Fundamentos',
    pergunta: 'Qual é a tríade fundamental da segurança da informação?',
    opcoes: [
      'Confidencialidade, Integridade e Disponibilidade',
      'Autenticação, Autorização e Auditoria',
      'Prevenção, Detecção e Resposta',
      'Hardware, Software e Peopleware'
    ],
    resposta: 0,
    explicacao: 'A tríade CID (Confidencialidade, Integridade e Disponibilidade) são os três pilares fundamentais da segurança da informação.'
  },
  {
    id: 2,
    categoria: 'Fundamentos',
    pergunta: 'O que significa Confidencialidade na segurança da informação?',
    opcoes: [
      'Garantir que a informação esteja sempre disponível',
      'Assegurar que a informação não foi alterada',
      'Garantir que apenas pessoas autorizadas acessem a informação',
      'Verificar a identidade do usuário'
    ],
    resposta: 2,
    explicacao: 'Confidencialidade garante que a informação seja acessível apenas por indivíduos, entidades ou processos autorizados.'
  },
  {
    id: 3,
    categoria: 'Fundamentos',
    pergunta: 'Qual conceito garante que a informação não foi alterada sem autorização?',
    opcoes: [
      'Confidencialidade',
      'Integridade',
      'Disponibilidade',
      'Autenticidade'
    ],
    resposta: 1,
    explicacao: 'Integridade assegura que a informação seja precisa, completa e não tenha sido alterada ou destruída de forma não autorizada.'
  },
  {
    id: 4,
    categoria: 'Fundamentos',
    pergunta: 'O que é uma ameaça em segurança da informação?',
    opcoes: [
      'Uma fraqueza no sistema',
      'Um evento que pode causar dano',
      'A probabilidade de um incidente',
      'Uma medida de proteção'
    ],
    resposta: 1,
    explicacao: 'Uma ameaça é qualquer evento, ação ou circunstância que pode causar dano aos ativos de informação.'
  },
  {
    id: 5,
    categoria: 'Fundamentos',
    pergunta: 'Qual é a diferença entre vulnerabilidade e risco?',
    opcoes: [
      'Vulnerabilidade é uma fraqueza, risco é a probabilidade de exploração',
      'São sinônimos',
      'Vulnerabilidade é externa, risco é interno',
      'Risco é uma fraqueza, vulnerabilidade é a probabilidade'
    ],
    resposta: 0,
    explicacao: 'Vulnerabilidade é uma fraqueza que pode ser explorada, enquanto risco é a probabilidade de uma ameaça explorar uma vulnerabilidade.'
  },
  {
    id: 6,
    categoria: 'Fundamentos',
    pergunta: 'O que é autenticidade em segurança da informação?',
    opcoes: [
      'Garantir que a informação esteja disponível',
      'Verificar se uma entidade é quem alega ser',
      'Proteger contra alterações não autorizadas',
      'Manter a informação em segredo'
    ],
    resposta: 1,
    explicacao: 'Autenticidade é a garantia de que uma entidade (usuário, dispositivo ou processo) é quem alega ser.'
  },
  {
    id: 7,
    categoria: 'Fundamentos',
    pergunta: 'O que significa não repúdio?',
    opcoes: [
      'Impossibilidade de negar a autoria de uma ação',
      'Garantir que a informação não seja alterada',
      'Manter a informação confidencial',
      'Verificar a identidade do usuário'
    ],
    resposta: 0,
    explicacao: 'Não repúdio é a garantia de que uma parte não pode negar a autoria de uma mensagem ou transação.'
  },
  {
    id: 8,
    categoria: 'Fundamentos',
    pergunta: 'Qual é um exemplo de contramedida preventiva?',
    opcoes: [
      'Sistema de backup',
      'Firewall',
      'Log de auditoria',
      'Plano de recuperação de desastres'
    ],
    resposta: 1,
    explicacao: 'Firewall é uma contramedida preventiva que bloqueia acessos não autorizados antes que ocorram.'
  },
  {
    id: 9,
    categoria: 'Fundamentos',
    pergunta: 'O que caracteriza uma contramedida detectiva?',
    opcoes: [
      'Previne que incidentes ocorram',
      'Identifica quando incidentes estão ocorrendo',
      'Corrige problemas após incidentes',
      'Recupera dados perdidos'
    ],
    resposta: 1,
    explicacao: 'Contramedidas detectivas identificam quando incidentes de segurança estão ocorrendo ou já ocorreram.'
  },
  {
    id: 10,
    categoria: 'Fundamentos',
    pergunta: 'Qual é o objetivo principal de um sistema de gestão de segurança da informação (SGSI)?',
    opcoes: [
      'Eliminar todos os riscos',
      'Gerenciar riscos de forma sistemática',
      'Implementar apenas tecnologias de segurança',
      'Focar apenas em ameaças externas'
    ],
    resposta: 1,
    explicacao: 'Um SGSI tem como objetivo gerenciar riscos de segurança da informação de forma sistemática e contínua.'
  },
  {
    id: 11,
    categoria: 'Fundamentos',
    pergunta: 'O que é um ativo de informação?',
    opcoes: [
      'Apenas dados digitais',
      'Qualquer coisa que tenha valor para a organização',
      'Somente hardware e software',
      'Apenas informações confidenciais'
    ],
    resposta: 1,
    explicacao: 'Um ativo de informação é qualquer coisa que tenha valor para a organização e precise ser protegida.'
  },
  {
    id: 12,
    categoria: 'Fundamentos',
    pergunta: 'Qual é a importância da classificação da informação?',
    opcoes: [
      'Determinar o nível de proteção necessário',
      'Organizar arquivos por data',
      'Facilitar a busca de documentos',
      'Reduzir o espaço de armazenamento'
    ],
    resposta: 0,
    explicacao: 'A classificação da informação determina o nível de proteção e controles de segurança necessários.'
  },
  {
    id: 13,
    categoria: 'Fundamentos',
    pergunta: 'O que é o princípio da defesa em profundidade?',
    opcoes: [
      'Usar apenas uma camada de segurança muito forte',
      'Implementar múltiplas camadas de segurança',
      'Focar apenas na segurança física',
      'Confiar apenas em antivírus'
    ],
    resposta: 1,
    explicacao: 'Defesa em profundidade é a implementação de múltiplas camadas de segurança para proteger os ativos.'
  },
  {
    id: 14,
    categoria: 'Fundamentos',
    pergunta: 'Qual é o conceito de "menor privilégio"?',
    opcoes: [
      'Dar acesso total a todos os usuários',
      'Conceder apenas os privilégios mínimos necessários',
      'Remover todos os privilégios',
      'Dar privilégios apenas aos administradores'
    ],
    resposta: 1,
    explicacao: 'O princípio do menor privilégio determina que usuários devem ter apenas os privilégios mínimos necessários para suas funções.'
  },
  {
    id: 15,
    categoria: 'Fundamentos',
    pergunta: 'O que é análise de risco?',
    opcoes: [
      'Processo de identificar e avaliar riscos',
      'Eliminação completa de todos os riscos',
      'Implementação de controles de segurança',
      'Monitoramento de incidentes'
    ],
    resposta: 0,
    explicacao: 'Análise de risco é o processo sistemático de identificar, avaliar e priorizar riscos de segurança.'
  },

  // Superfície de Ataque (10 questões)
  {
    id: 16,
    categoria: 'Superfície de Ataque',
    pergunta: 'O que representa a superfície de ataque de um sistema?',
    opcoes: [
      'Apenas as portas de rede abertas',
      'Todos os pontos onde um atacante pode tentar obter acesso',
      'Somente as vulnerabilidades conhecidas',
      'Apenas os usuários com acesso administrativo'
    ],
    resposta: 1,
    explicacao: 'A superfície de ataque inclui todos os pontos possíveis de entrada, incluindo hardware, software, redes e até mesmo pessoas.'
  },
  {
    id: 17,
    categoria: 'Superfície de Ataque',
    pergunta: 'Qual é o objetivo do gerenciamento da superfície de ataque?',
    opcoes: [
      'Aumentar o número de pontos de entrada',
      'Reduzir e controlar os pontos de exposição',
      'Eliminar completamente todos os riscos',
      'Focar apenas em ameaças internas'
    ],
    resposta: 1,
    explicacao: 'O gerenciamento da superfície de ataque visa reduzir e controlar os pontos de exposição para minimizar riscos.'
  },
  {
    id: 18,
    categoria: 'Superfície de Ataque',
    pergunta: 'O que é "shadow IT"?',
    opcoes: [
      'Sistemas de backup ocultos',
      'Tecnologia usada sem aprovação da TI',
      'Ataques cibernéticos avançados',
      'Criptografia de dados'
    ],
    resposta: 1,
    explicacao: 'Shadow IT refere-se ao uso de tecnologias e sistemas sem o conhecimento ou aprovação do departamento de TI.'
  },
  {
    id: 19,
    categoria: 'Superfície de Ataque',
    pergunta: 'Qual componente NÃO faz parte da superfície de ataque de software?',
    opcoes: [
      'APIs expostas',
      'Serviços de rede',
      'Localização física do servidor',
      'Interfaces de usuário'
    ],
    resposta: 2,
    explicacao: 'A localização física do servidor faz parte da superfície de ataque física, não de software.'
  },
  {
    id: 20,
    categoria: 'Superfície de Ataque',
    pergunta: 'O que são dispositivos IoT em relação à superfície de ataque?',
    opcoes: [
      'Sempre seguros por padrão',
      'Pontos de entrada potenciais se mal configurados',
      'Não afetam a segurança da rede',
      'Apenas dispositivos de monitoramento'
    ],
    resposta: 1,
    explicacao: 'Dispositivos IoT podem ser pontos de entrada vulneráveis se não forem adequadamente configurados e protegidos.'
  },
  {
    id: 21,
    categoria: 'Superfície de Ataque',
    pergunta: 'Qual é a primeira etapa no gerenciamento da superfície de ataque?',
    opcoes: [
      'Implementar controles de segurança',
      'Identificar e mapear todos os ativos',
      'Realizar testes de penetração',
      'Treinar usuários'
    ],
    resposta: 1,
    explicacao: 'A primeira etapa é identificar e mapear todos os ativos para entender completamente a superfície de ataque.'
  },
  {
    id: 22,
    categoria: 'Superfície de Ataque',
    pergunta: 'O que é hardening de sistemas?',
    opcoes: [
      'Aumentar a capacidade de processamento',
      'Reduzir vulnerabilidades através de configurações seguras',
      'Instalar mais software de segurança',
      'Fazer backup dos dados'
    ],
    resposta: 1,
    explicacao: 'Hardening é o processo de reduzir vulnerabilidades através de configurações seguras e remoção de funcionalidades desnecessárias.'
  },
  {
    id: 23,
    categoria: 'Superfície de Ataque',
    pergunta: 'Por que o monitoramento contínuo é importante para a superfície de ataque?',
    opcoes: [
      'A superfície de ataque é estática',
      'A superfície de ataque muda constantemente',
      'Apenas para compliance',
      'Para reduzir custos'
    ],
    resposta: 1,
    explicacao: 'A superfície de ataque muda constantemente com novos sistemas, atualizações e mudanças na infraestrutura.'
  },
  {
    id: 24,
    categoria: 'Superfície de Ataque',
    pergunta: 'Qual ferramenta é comumente usada para descobrir a superfície de ataque?',
    opcoes: [
      'Antivírus',
      'Scanner de vulnerabilidades',
      'Firewall',
      'Sistema de backup'
    ],
    resposta: 1,
    explicacao: 'Scanners de vulnerabilidades são ferramentas essenciais para descobrir e mapear a superfície de ataque.'
  },
  {
    id: 25,
    categoria: 'Superfície de Ataque',
    pergunta: 'O que é um "ponto de entrada" na superfície de ataque?',
    opcoes: [
      'Apenas portas físicas',
      'Qualquer interface que aceite dados externos',
      'Somente conexões de rede',
      'Apenas interfaces de usuário'
    ],
    resposta: 1,
    explicacao: 'Um ponto de entrada é qualquer interface que aceite dados externos e possa ser explorada por atacantes.'
  },

  // Engenharia Social (12 questões)
  {
    id: 26,
    categoria: 'Engenharia Social',
    pergunta: 'O que é engenharia social?',
    opcoes: [
      'Técnica de programação',
      'Manipulação psicológica para obter informações',
      'Método de criptografia',
      'Tipo de malware'
    ],
    resposta: 1,
    explicacao: 'Engenharia social é a manipulação psicológica de pessoas para revelar informações confidenciais ou realizar ações específicas.'
  },
  {
    id: 27,
    categoria: 'Engenharia Social',
    pergunta: 'Qual técnica de engenharia social envolve seguir uma pessoa autorizada para entrar em uma área restrita?',
    opcoes: [
      'Phishing',
      'Pretexting',
      'Tailgating',
      'Baiting'
    ],
    resposta: 2,
    explicacao: 'Tailgating é a técnica onde o atacante segue uma pessoa autorizada para ganhar acesso físico a áreas restritas.'
  },
  {
    id: 28,
    categoria: 'Engenharia Social',
    pergunta: 'O que é phishing?',
    opcoes: [
      'Tipo de vírus',
      'Comunicações fraudulentas que parecem legítimas',
      'Método de criptografia',
      'Técnica de backup'
    ],
    resposta: 1,
    explicacao: 'Phishing são comunicações fraudulentas que parecem vir de uma fonte legítima para enganar a vítima.'
  },
  {
    id: 29,
    categoria: 'Engenharia Social',
    pergunta: 'Qual é a diferença entre phishing e spear phishing?',
    opcoes: [
      'Não há diferença',
      'Spear phishing é mais direcionado',
      'Phishing é mais perigoso',
      'Spear phishing usa apenas SMS'
    ],
    resposta: 1,
    explicacao: 'Spear phishing é uma forma mais direcionada de phishing, focando em indivíduos ou organizações específicas.'
  },
  {
    id: 30,
    categoria: 'Engenharia Social',
    pergunta: 'O que é pretexting?',
    opcoes: [
      'Envio de e-mails em massa',
      'Criação de um cenário falso para obter informações',
      'Instalação de software malicioso',
      'Monitoramento de redes'
    ],
    resposta: 1,
    explicacao: 'Pretexting é a criação de um cenário falso ou pretexto para enganar a vítima e obter informações confidenciais.'
  },
  {
    id: 31,
    categoria: 'Engenharia Social',
    pergunta: 'O que é baiting em engenharia social?',
    opcoes: [
      'Deixar dispositivos infectados para serem encontrados',
      'Enviar e-mails falsos',
      'Seguir pessoas autorizadas',
      'Criar perfis falsos em redes sociais'
    ],
    resposta: 0,
    explicacao: 'Baiting envolve deixar dispositivos infectados (como pendrives) em locais públicos esperando que alguém os conecte.'
  },
  {
    id: 32,
    categoria: 'Engenharia Social',
    pergunta: 'O que é whaling?',
    opcoes: [
      'Ataque a sistemas de rede',
      'Phishing direcionado a executivos de alto nível',
      'Tipo de malware',
      'Técnica de criptografia'
    ],
    resposta: 1,
    explicacao: 'Whaling é um tipo de phishing direcionado especificamente a executivos de alto nível ou pessoas importantes.'
  },
  {
    id: 33,
    categoria: 'Engenharia Social',
    pergunta: 'Qual é a melhor defesa contra engenharia social?',
    opcoes: [
      'Antivírus atualizado',
      'Firewall robusto',
      'Educação e conscientização dos usuários',
      'Criptografia forte'
    ],
    resposta: 2,
    explicacao: 'A educação e conscientização dos usuários é a melhor defesa contra ataques de engenharia social.'
  },
  {
    id: 34,
    categoria: 'Engenharia Social',
    pergunta: 'O que é vishing?',
    opcoes: [
      'Phishing por telefone',
      'Phishing por SMS',
      'Phishing por e-mail',
      'Phishing por redes sociais'
    ],
    resposta: 0,
    explicacao: 'Vishing (voice phishing) é phishing realizado através de chamadas telefônicas.'
  },
  {
    id: 35,
    categoria: 'Engenharia Social',
    pergunta: 'O que é smishing?',
    opcoes: [
      'Phishing por e-mail',
      'Phishing por SMS',
      'Phishing por telefone',
      'Phishing por redes sociais'
    ],
    resposta: 1,
    explicacao: 'Smishing (SMS phishing) é phishing realizado através de mensagens de texto SMS.'
  },
  {
    id: 36,
    categoria: 'Engenharia Social',
    pergunta: 'Qual princípio psicológico é mais explorado na engenharia social?',
    opcoes: [
      'Medo e urgência',
      'Curiosidade científica',
      'Pensamento lógico',
      'Análise crítica'
    ],
    resposta: 0,
    explicacao: 'Atacantes frequentemente exploram medo e urgência para pressionar vítimas a agir sem pensar.'
  },
  {
    id: 37,
    categoria: 'Engenharia Social',
    pergunta: 'O que é shoulder surfing?',
    opcoes: [
      'Navegar na internet',
      'Observar por cima do ombro para ver informações',
      'Tipo de malware',
      'Técnica de criptografia'
    ],
    resposta: 1,
    explicacao: 'Shoulder surfing é a técnica de observar por cima do ombro de alguém para ver senhas ou informações confidenciais.'
  },

  // Criptografia (15 questões)
  {
    id: 38,
    categoria: 'Criptografia',
    pergunta: 'O que é criptografia?',
    opcoes: [
      'Ciência de proteger informações tornando-as ilegíveis',
      'Método de compressão de dados',
      'Técnica de backup',
      'Sistema de autenticação'
    ],
    resposta: 0,
    explicacao: 'Criptografia é a ciência de proteger informações transformando-as em um formato ilegível para não autorizados.'
  },
  {
    id: 39,
    categoria: 'Criptografia',
    pergunta: 'Na criptografia simétrica, quantas chaves são usadas?',
    opcoes: [
      'Uma chave',
      'Duas chaves',
      'Três chaves',
      'Nenhuma chave'
    ],
    resposta: 0,
    explicacao: 'Na criptografia simétrica, a mesma chave é usada tanto para criptografar quanto para descriptografar.'
  },
  {
    id: 40,
    categoria: 'Criptografia',
    pergunta: 'Na criptografia assimétrica, qual chave é usada para criptografar uma mensagem destinada a você?',
    opcoes: [
      'Sua chave privada',
      'Sua chave pública',
      'A chave privada do remetente',
      'Uma chave compartilhada'
    ],
    resposta: 1,
    explicacao: 'Na criptografia assimétrica, outros usam sua chave pública para criptografar mensagens que só você pode descriptografar com sua chave privada.'
  },
  {
    id: 41,
    categoria: 'Criptografia',
    pergunta: 'Qual é a principal vantagem da criptografia simétrica?',
    opcoes: [
      'Facilidade de distribuição de chaves',
      'Velocidade de processamento',
      'Não repúdio',
      'Autenticação automática'
    ],
    resposta: 1,
    explicacao: 'A principal vantagem da criptografia simétrica é sua velocidade de processamento, sendo muito mais rápida que a assimétrica.'
  },
  {
    id: 42,
    categoria: 'Criptografia',
    pergunta: 'Qual é a principal desvantagem da criptografia simétrica?',
    opcoes: [
      'Baixa velocidade',
      'Distribuição segura de chaves',
      'Fraca segurança',
      'Alto consumo de memória'
    ],
    resposta: 1,
    explicacao: 'A principal desvantagem é a dificuldade de distribuir a chave secreta de forma segura entre as partes.'
  },
  {
    id: 43,
    categoria: 'Criptografia',
    pergunta: 'O que é um certificado digital?',
    opcoes: [
      'Um arquivo que contém apenas a chave pública',
      'Um documento que atesta a identidade e contém a chave pública',
      'Uma senha criptografada',
      'Um algoritmo de criptografia'
    ],
    resposta: 1,
    explicacao: 'Um certificado digital é um documento eletrônico que atesta a identidade de uma entidade e contém sua chave pública, assinado por uma Autoridade Certificadora.'
  },
  {
    id: 44,
    categoria: 'Criptografia',
    pergunta: 'O que é uma Autoridade Certificadora (AC)?',
    opcoes: [
      'Um algoritmo de criptografia',
      'Uma entidade que emite e gerencia certificados digitais',
      'Um tipo de malware',
      'Um protocolo de rede'
    ],
    resposta: 1,
    explicacao: 'Uma Autoridade Certificadora é uma entidade de confiança responsável por emitir, revogar e gerenciar certificados digitais.'
  },
  {
    id: 45,
    categoria: 'Criptografia',
    pergunta: 'O que é uma assinatura digital?',
    opcoes: [
      'Uma imagem digitalizada de uma assinatura',
      'Um mecanismo criptográfico que garante autenticidade',
      'Um tipo de certificado',
      'Uma senha especial'
    ],
    resposta: 1,
    explicacao: 'Assinatura digital é um mecanismo criptográfico que garante autenticidade, integridade e não repúdio de documentos.'
  },
  {
    id: 46,
    categoria: 'Criptografia',
    pergunta: 'O que é PKI?',
    opcoes: [
      'Public Key Infrastructure',
      'Private Key Integration',
      'Protected Key Interface',
      'Personal Key Identification'
    ],
    resposta: 0,
    explicacao: 'PKI (Public Key Infrastructure) é a infraestrutura de chaves públicas que gerencia certificados digitais e chaves.'
  },
  {
    id: 47,
    categoria: 'Criptografia',
    pergunta: 'Qual algoritmo é atualmente considerado o padrão para criptografia simétrica?',
    opcoes: [
      'DES',
      'AES',
      'RSA',
      'MD5'
    ],
    resposta: 1,
    explicacao: 'AES (Advanced Encryption Standard) é atualmente o padrão mais utilizado e seguro para criptografia simétrica.'
  },
  {
    id: 48,
    categoria: 'Criptografia',
    pergunta: 'O que é um ataque de força bruta?',
    opcoes: [
      'Ataque físico aos servidores',
      'Tentativa de todas as combinações possíveis de chaves',
      'Interceptação de comunicações',
      'Instalação de malware'
    ],
    resposta: 1,
    explicacao: 'Ataque de força bruta consiste em tentar todas as combinações possíveis de chaves até encontrar a correta.'
  },
  {
    id: 49,
    categoria: 'Criptografia',
    pergunta: 'O que é hashing?',
    opcoes: [
      'Tipo de criptografia reversível',
      'Função que gera um resumo único e irreversível',
      'Método de compressão',
      'Técnica de backup'
    ],
    resposta: 1,
    explicacao: 'Hashing é uma função que gera um resumo único e irreversível de dados, usado para verificar integridade.'
  },
  {
    id: 50,
    categoria: 'Criptografia',
    pergunta: 'Qual é a diferença entre criptografia e codificação?',
    opcoes: [
      'Não há diferença',
      'Criptografia visa segurança, codificação visa formato',
      'Codificação é mais segura',
      'Criptografia é mais rápida'
    ],
    resposta: 1,
    explicacao: 'Criptografia visa proteger dados contra acesso não autorizado, enquanto codificação visa apenas mudar o formato dos dados.'
  },
  {
    id: 51,
    categoria: 'Criptografia',
    pergunta: 'O que é um ataque man-in-the-middle?',
    opcoes: [
      'Ataque de força bruta',
      'Interceptação e manipulação de comunicação',
      'Instalação de malware',
      'Quebra de senhas'
    ],
    resposta: 1,
    explicacao: 'Ataque man-in-the-middle é quando um atacante se posiciona entre duas partes, interceptando e possivelmente alterando a comunicação.'
  },
  {
    id: 52,
    categoria: 'Criptografia',
    pergunta: 'Por que o algoritmo DES não é mais considerado seguro?',
    opcoes: [
      'É muito lento',
      'Tamanho de chave pequeno (56 bits)',
      'É muito complexo',
      'Não suporta chaves públicas'
    ],
    resposta: 1,
    explicacao: 'DES não é mais seguro devido ao seu tamanho de chave pequeno (56 bits), que o torna vulnerável a ataques de força bruta.'
  },

  // Malware (15 questões)
  {
    id: 53,
    categoria: 'Malware',
    pergunta: 'O que é malware?',
    opcoes: [
      'Software de segurança',
      'Software malicioso',
      'Sistema operacional',
      'Protocolo de rede'
    ],
    resposta: 1,
    explicacao: 'Malware é uma contração de "malicious software", referindo-se a qualquer software projetado para causar danos.'
  },
  {
    id: 54,
    categoria: 'Malware',
    pergunta: 'Qual tipo de malware se disfarça de software legítimo para enganar o usuário?',
    opcoes: [
      'Vírus',
      'Worm',
      'Trojan',
      'Spyware'
    ],
    resposta: 2,
    explicacao: 'Trojan (Cavalo de Troia) é um malware que se disfarça de software legítimo para enganar o usuário e obter acesso ao sistema.'
  },
  {
    id: 55,
    categoria: 'Malware',
    pergunta: 'Qual é a principal diferença entre vírus e worms?',
    opcoes: [
      'Vírus são mais perigosos',
      'Worms se espalham automaticamente, vírus precisam de hospedeiro',
      'Vírus são mais rápidos',
      'Não há diferença'
    ],
    resposta: 1,
    explicacao: 'Worms se espalham automaticamente pela rede, enquanto vírus precisam de um programa hospedeiro e ação do usuário.'
  },
  {
    id: 56,
    categoria: 'Malware',
    pergunta: 'Qual malware criptografa os arquivos da vítima e exige pagamento para descriptografá-los?',
    opcoes: [
      'Adware',
      'Spyware',
      'Ransomware',
      'Rootkit'
    ],
    resposta: 2,
    explicacao: 'Ransomware é um tipo de malware que criptografa os arquivos da vítima e exige um resgate (ransom) para fornecer a chave de descriptografia.'
  },
  {
    id: 57,
    categoria: 'Malware',
    pergunta: 'O que é spyware?',
    opcoes: [
      'Software que exibe anúncios',
      'Software que coleta informações sem consentimento',
      'Software que criptografa dados',
      'Software que remove vírus'
    ],
    resposta: 1,
    explicacao: 'Spyware é software que coleta informações sobre o usuário ou suas atividades sem seu conhecimento ou consentimento.'
  },
  {
    id: 58,
    categoria: 'Malware',
    pergunta: 'O que são rootkits?',
    opcoes: [
      'Ferramentas de administração legítimas',
      'Conjuntos de ferramentas que escondem a presença de malware',
      'Sistemas de backup',
      'Protocolos de rede'
    ],
    resposta: 1,
    explicacao: 'Rootkits são conjuntos de ferramentas que permitem acesso privilegiado e escondem a presença de malware no sistema.'
  },
  {
    id: 59,
    categoria: 'Malware',
    pergunta: 'O que é uma botnet?',
    opcoes: [
      'Rede de computadores legítimos',
      'Rede de computadores infectados controlados remotamente',
      'Sistema de backup distribuído',
      'Protocolo de comunicação'
    ],
    resposta: 1,
    explicacao: 'Botnet é uma rede de computadores infectados (bots) controlados remotamente por um atacante (botmaster).'
  },
  {
    id: 60,
    categoria: 'Malware',
    pergunta: 'O que é um keylogger?',
    opcoes: [
      'Software que registra teclas digitadas',
      'Software que bloqueia o teclado',
      'Sistema de autenticação',
      'Protocolo de criptografia'
    ],
    resposta: 0,
    explicacao: 'Keylogger é um software que registra todas as teclas digitadas pelo usuário, permitindo capturar senhas e informações sensíveis.'
  },
  {
    id: 61,
    categoria: 'Malware',
    pergunta: 'O que é adware?',
    opcoes: [
      'Software que remove anúncios',
      'Software que exibe anúncios indesejados',
      'Software de segurança',
      'Sistema operacional'
    ],
    resposta: 1,
    explicacao: 'Adware é software que exibe anúncios indesejados, muitas vezes de forma intrusiva, como pop-ups e banners.'
  },
  {
    id: 62,
    categoria: 'Malware',
    pergunta: 'Como os vírus se propagam?',
    opcoes: [
      'Automaticamente pela rede',
      'Através de programas hospedeiros infectados',
      'Apenas por e-mail',
      'Somente por USB'
    ],
    resposta: 1,
    explicacao: 'Vírus se propagam anexando-se a programas hospedeiros e se espalhando quando esses programas são executados ou compartilhados.'
  },
  {
    id: 63,
    categoria: 'Malware',
    pergunta: 'O que é scareware?',
    opcoes: [
      'Software que assusta usuários com alertas falsos',
      'Software de segurança legítimo',
      'Tipo de vírus',
      'Sistema de backup'
    ],
    resposta: 0,
    explicacao: 'Scareware exibe alertas falsos sobre infecções para induzir o usuário a comprar software falso ou desnecessário.'
  },
  {
    id: 64,
    categoria: 'Malware',
    pergunta: 'O que são browser hijackers?',
    opcoes: [
      'Extensões legítimas do navegador',
      'Malware que modifica configurações do navegador',
      'Sistemas de backup',
      'Protocolos de segurança'
    ],
    resposta: 1,
    explicacao: 'Browser hijackers modificam configurações do navegador sem permissão, redirecionando para sites indesejados.'
  },
  {
    id: 65,
    categoria: 'Malware',
    pergunta: 'Qual é a melhor prática para se proteger contra malware?',
    opcoes: [
      'Usar apenas antivírus',
      'Combinar múltiplas camadas de proteção',
      'Desconectar da internet',
      'Usar apenas software pirata'
    ],
    resposta: 1,
    explicacao: 'A melhor proteção combina antivírus, firewall, atualizações, backups e educação do usuário.'
  },
  {
    id: 66,
    categoria: 'Malware',
    pergunta: 'O que é um backdoor?',
    opcoes: [
      'Porta física dos servidores',
      'Método oculto para contornar autenticação',
      'Sistema de backup',
      'Protocolo de rede'
    ],
    resposta: 1,
    explicacao: 'Backdoor é um método oculto para contornar a autenticação normal e obter acesso a um sistema.'
  },
  {
    id: 67,
    categoria: 'Malware',
    pergunta: 'Por que é importante manter o sistema operacional atualizado?',
    opcoes: [
      'Para melhorar a velocidade',
      'Para corrigir vulnerabilidades de segurança',
      'Para adicionar novos recursos',
      'Para economizar energia'
    ],
    resposta: 1,
    explicacao: 'Atualizações do sistema operacional frequentemente corrigem vulnerabilidades de segurança que podem ser exploradas por malware.'
  },

  // Vulnerabilidades Web (18 questões)
  {
    id: 68,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é SQL Injection?',
    opcoes: [
      'Um método de criptografia de banco de dados',
      'Uma técnica para otimizar consultas SQL',
      'Um ataque que insere comandos SQL maliciosos',
      'Um tipo de backup de banco de dados'
    ],
    resposta: 2,
    explicacao: 'SQL Injection é um ataque onde comandos SQL maliciosos são inseridos em campos de entrada para manipular o banco de dados.'
  },
  {
    id: 69,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'Cross-Site Scripting (XSS) permite que atacantes:',
    opcoes: [
      'Acessem diretamente o servidor',
      'Injetem scripts maliciosos em páginas web',
      'Quebrem a criptografia HTTPS',
      'Modifiquem o código fonte da aplicação'
    ],
    resposta: 1,
    explicacao: 'XSS permite que atacantes injetem scripts maliciosos em páginas web que são executados no navegador de outros usuários.'
  },
  {
    id: 70,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é OWASP?',
    opcoes: [
      'Um tipo de malware',
      'Organização focada em segurança de aplicações web',
      'Protocolo de rede',
      'Sistema operacional'
    ],
    resposta: 1,
    explicacao: 'OWASP (Open Web Application Security Project) é uma organização focada em melhorar a segurança de aplicações web.'
  },
  {
    id: 71,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é IDOR (Insecure Direct Object References)?',
    opcoes: [
      'Acesso direto a objetos sem verificação de autorização',
      'Tipo de criptografia',
      'Protocolo de autenticação',
      'Sistema de backup'
    ],
    resposta: 0,
    explicacao: 'IDOR ocorre quando uma aplicação expõe referência direta a objetos internos sem verificar se o usuário tem autorização.'
  },
  {
    id: 72,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'Qual é a principal causa de vulnerabilidades de injeção?',
    opcoes: [
      'Falta de criptografia',
      'Validação inadequada de entrada',
      'Senhas fracas',
      'Falta de firewall'
    ],
    resposta: 1,
    explicacao: 'Vulnerabilidades de injeção são principalmente causadas pela validação inadequada de dados de entrada.'
  },
  {
    id: 73,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é CSRF (Cross-Site Request Forgery)?',
    opcoes: [
      'Ataque que força usuários a executar ações não intencionais',
      'Tipo de malware',
      'Protocolo de segurança',
      'Sistema de autenticação'
    ],
    resposta: 0,
    explicacao: 'CSRF é um ataque que força usuários autenticados a executar ações não intencionais em aplicações web.'
  },
  {
    id: 74,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que são Prepared Statements?',
    opcoes: [
      'Documentos de segurança',
      'Técnica para prevenir SQL Injection',
      'Tipo de criptografia',
      'Sistema de backup'
    ],
    resposta: 1,
    explicacao: 'Prepared Statements são uma técnica de programação que ajuda a prevenir ataques de SQL Injection.'
  },
  {
    id: 75,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é desserialização insegura?',
    opcoes: [
      'Problema na compressão de dados',
      'Vulnerabilidade ao processar dados serializados não confiáveis',
      'Erro de configuração de rede',
      'Falha na criptografia'
    ],
    resposta: 1,
    explicacao: 'Desserialização insegura ocorre quando aplicações processam dados serializados não confiáveis sem validação adequada.'
  },
  {
    id: 76,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é um WAF (Web Application Firewall)?',
    opcoes: [
      'Sistema operacional para web',
      'Firewall específico para proteger aplicações web',
      'Tipo de malware',
      'Protocolo de rede'
    ],
    resposta: 1,
    explicacao: 'WAF é um firewall específico que filtra, monitora e bloqueia tráfego HTTP malicioso para aplicações web.'
  },
  {
    id: 77,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é SSRF (Server-Side Request Forgery)?',
    opcoes: [
      'Ataque que força servidor a fazer requisições não intencionais',
      'Tipo de malware',
      'Protocolo de autenticação',
      'Sistema de criptografia'
    ],
    resposta: 0,
    explicacao: 'SSRF é um ataque que força o servidor a fazer requisições para recursos internos ou externos não intencionais.'
  },
  {
    id: 78,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é Content Security Policy (CSP)?',
    opcoes: [
      'Política de backup de conteúdo',
      'Mecanismo para prevenir ataques XSS',
      'Tipo de criptografia',
      'Sistema de autenticação'
    ],
    resposta: 1,
    explicacao: 'CSP é um mecanismo de segurança que ajuda a prevenir ataques XSS controlando quais recursos podem ser carregados.'
  },
  {
    id: 79,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'Qual é a diferença entre XSS refletido e armazenado?',
    opcoes: [
      'Não há diferença',
      'XSS armazenado persiste no servidor',
      'XSS refletido é mais perigoso',
      'XSS armazenado só funciona em HTTPS'
    ],
    resposta: 1,
    explicacao: 'XSS armazenado persiste no servidor e afeta todos os usuários, enquanto XSS refletido afeta apenas o usuário atual.'
  },
  {
    id: 80,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é hardening de aplicações web?',
    opcoes: [
      'Aumentar a velocidade da aplicação',
      'Reduzir vulnerabilidades através de configurações seguras',
      'Adicionar mais funcionalidades',
      'Melhorar a interface do usuário'
    ],
    resposta: 1,
    explicacao: 'Hardening é o processo de reduzir vulnerabilidades através de configurações seguras e remoção de funcionalidades desnecessárias.'
  },
  {
    id: 81,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é HTTPS e por que é importante?',
    opcoes: [
      'Protocolo que criptografa comunicação web',
      'Sistema de backup',
      'Tipo de malware',
      'Método de compressão'
    ],
    resposta: 0,
    explicacao: 'HTTPS é um protocolo que criptografa a comunicação entre navegador e servidor, protegendo dados em trânsito.'
  },
  {
    id: 82,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que são cookies seguros?',
    opcoes: [
      'Cookies que não expiram',
      'Cookies transmitidos apenas por HTTPS',
      'Cookies grandes',
      'Cookies criptografados'
    ],
    resposta: 1,
    explicacao: 'Cookies seguros são configurados para serem transmitidos apenas através de conexões HTTPS criptografadas.'
  },
  {
    id: 83,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é rate limiting?',
    opcoes: [
      'Limitação da velocidade de rede',
      'Controle do número de requisições por tempo',
      'Tipo de criptografia',
      'Sistema de backup'
    ],
    resposta: 1,
    explicacao: 'Rate limiting é uma técnica que controla o número de requisições que um usuário pode fazer em um período de tempo.'
  },
  {
    id: 84,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'O que é autenticação multifator (MFA)?',
    opcoes: [
      'Usar múltiplas senhas',
      'Combinar diferentes fatores de autenticação',
      'Autenticar múltiplos usuários',
      'Usar apenas biometria'
    ],
    resposta: 1,
    explicacao: 'MFA combina diferentes fatores de autenticação (algo que você sabe, tem ou é) para aumentar a segurança.'
  },
  {
    id: 85,
    categoria: 'Vulnerabilidades Web',
    pergunta: 'Por que é importante fazer testes de segurança regulares?',
    opcoes: [
      'Para melhorar a velocidade',
      'Para identificar vulnerabilidades antes dos atacantes',
      'Para reduzir custos',
      'Para adicionar funcionalidades'
    ],
    resposta: 1,
    explicacao: 'Testes de segurança regulares ajudam a identificar e corrigir vulnerabilidades antes que sejam exploradas por atacantes.'
  }
]

export default function Simulado() {
  const [questaoAtual, setQuestaoAtual] = useState(0)
  const [respostas, setRespostas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [simuladoFinalizado, setSimuladoFinalizado] = useState(false)
  const [tempoInicio, setTempoInicio] = useState(Date.now())
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas')

  // Filtrar questões por categoria se necessário
  const questoesFiltradas = categoriaFiltro === 'Todas'
    ? questoes
    : questoes.filter(q => q.categoria === categoriaFiltro)

  const categorias = ['Todas', ...new Set(questoes.map(q => q.categoria))]

  const handleResposta = (opcaoSelecionada) => {
    const novasRespostas = {
      ...respostas,
      [questaoAtual]: opcaoSelecionada
    }
    setRespostas(novasRespostas)
    setMostrarResultado(true)
  }

  const proximaQuestao = () => {
    if (questaoAtual < questoesFiltradas.length - 1) {
      setQuestaoAtual(questaoAtual + 1)
      setMostrarResultado(false)
    } else {
      setSimuladoFinalizado(true)
    }
  }

  const reiniciarSimulado = () => {
    setQuestaoAtual(0)
    setRespostas({})
    setMostrarResultado(false)
    setSimuladoFinalizado(false)
    setTempoInicio(Date.now())
  }

  const calcularPontuacao = () => {
    let acertos = 0
    questoesFiltradas.forEach((questao, index) => {
      if (respostas[index] === questao.resposta) {
        acertos++
      }
    })
    return acertos
  }

  const calcularTempo = () => {
    const tempoDecorrido = Math.floor((Date.now() - tempoInicio) / 1000)
    const minutos = Math.floor(tempoDecorrido / 60)
    const segundos = tempoDecorrido % 60
    return `${minutos}:${segundos.toString().padStart(2, '0')}`
  }

  const obterMensagemDesempenho = (pontuacao) => {
    const percentual = (pontuacao / questoesFiltradas.length) * 100
    if (percentual >= 90) return {
      texto: 'Excelente! Você domina os conceitos de segurança da informação!',
      cor: 'text-green-600',
      emoji: '🏆'
    }
    if (percentual >= 80) return {
      texto: 'Muito bom! Você tem um sólido conhecimento em segurança.',
      cor: 'text-blue-600',
      emoji: '🎯'
    }
    if (percentual >= 70) return {
      texto: 'Bom desempenho! Continue aprimorando seus conhecimentos.',
      cor: 'text-green-500',
      emoji: '👍'
    }
    if (percentual >= 60) return {
      texto: 'Razoável. Revise alguns conceitos e pratique mais.',
      cor: 'text-yellow-600',
      emoji: '📚'
    }
    if (percentual >= 50) return {
      texto: 'Precisa melhorar. Estude mais o conteúdo apresentado.',
      cor: 'text-orange-600',
      emoji: '📖'
    }
    return {
      texto: 'Precisa estudar muito mais. Revise todo o conteúdo!',
      cor: 'text-red-600',
      emoji: '🔄'
    }
  }

  const obterEstatisticasPorCategoria = () => {
    const stats = {}
    categorias.slice(1).forEach(categoria => {
      const questoesCategoria = questoesFiltradas.filter(q => q.categoria === categoria)
      const acertos = questoesCategoria.reduce((acc, questao, index) => {
        return acc + (respostas[questoesFiltradas.indexOf(questao)] === questao.resposta ? 1 : 0)
      }, 0)
      stats[categoria] = {
        total: questoesCategoria.length,
        acertos: acertos,
        percentual: questoesCategoria.length > 0 ? Math.round((acertos / questoesCategoria.length) * 100) : 0
      }
    })
    return stats
  }

  if (simuladoFinalizado) {
    const pontuacao = calcularPontuacao()
    const mensagem = obterMensagemDesempenho(pontuacao)
    const tempo = calcularTempo()
    const estatisticas = obterEstatisticasPorCategoria()

    return (
      <div className="max-w-6xl mx-auto p-6">
        <Card className="text-center mb-6">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="text-6xl">{mensagem.emoji}</div>
            </div>
            <CardTitle className="text-3xl">Simulado Concluído!</CardTitle>
            <CardDescription className="text-lg">
              Confira seu desempenho detalhado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {pontuacao}/{questoesFiltradas.length}
                </div>
                <div className="text-sm text-gray-600">Questões Corretas</div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {Math.round((pontuacao / questoesFiltradas.length) * 100)}%
                </div>
                <div className="text-sm text-gray-600">Percentual de Acertos</div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {tempo}
                </div>
                <div className="text-sm text-gray-600">Tempo Total</div>
              </div>
            </div>

            <div className={`text-lg font-semibold ${mensagem.cor} mb-6`}>
              {mensagem.texto}
            </div>

            {/* Estatísticas por Categoria */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-left mb-4">Desempenho por Categoria:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(estatisticas).map(([categoria, stats]) => (
                  <div key={categoria} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800 mb-2">{categoria}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {stats.acertos}/{stats.total}
                      </span>
                      <Badge
                        variant={stats.percentual >= 70 ? "default" : stats.percentual >= 50 ? "secondary" : "destructive"}
                      >
                        {stats.percentual}%
                      </Badge>
                    </div>
                    <Progress value={stats.percentual} className="h-2 mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revisão Detalhada */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Revisão Detalhada das Respostas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {questoesFiltradas.map((questao, index) => {
                const respostaUsuario = respostas[index]
                const acertou = respostaUsuario === questao.resposta

                return (
                  <div key={questao.id} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-3 mb-3">
                      {acertou ? (
                        <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {questao.categoria}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            Questão {index + 1}
                          </span>
                        </div>
                        <p className="font-medium mb-3">{questao.pergunta}</p>

                        <div className="space-y-2 mb-3">
                          <div className={`text-sm p-2 rounded ${acertou ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                            <strong>Sua resposta:</strong> {questao.opcoes[respostaUsuario]}
                          </div>
                          {!acertou && (
                            <div className="text-sm p-2 rounded bg-green-50 text-green-700">
                              <strong>Resposta correta:</strong> {questao.opcoes[questao.resposta]}
                            </div>
                          )}
                        </div>

                        <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                          <p className="text-sm text-blue-800">
                            <strong>Explicação:</strong> {questao.explicacao}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button onClick={reiniciarSimulado} className="flex-1">
                <RotateCcw className="h-4 w-4 mr-2" />
                Fazer Novamente
              </Button>
              <Button
                variant="outline"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex-1"
              >
                Voltar ao Topo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const questao = questoesFiltradas[questaoAtual]
  const progresso = ((questaoAtual + 1) / questoesFiltradas.length) * 100

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Filtro de Categoria */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Configurações do Simulado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Filtrar por categoria:</span>
            {categorias.map(categoria => (
              <Button
                key={categoria}
                variant={categoriaFiltro === categoria ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setCategoriaFiltro(categoria)
                  setQuestaoAtual(0)
                  setRespostas({})
                  setMostrarResultado(false)
                  setTempoInicio(Date.now())
                }}
              >
                {categoria}
                {categoria !== 'Todas' && (
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {questoes.filter(q => q.categoria === categoria).length}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
          <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Target className="h-4 w-4" />
              <span>Total: {questoesFiltradas.length} questões</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Tempo: {calcularTempo()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Barra de Progresso */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Questão {questaoAtual + 1} de {questoesFiltradas.length}
          </span>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{questao.categoria}</Badge>
            <span className="text-xs text-gray-500">
              {Math.round(progresso)}% concluído
            </span>
          </div>
        </div>
        <Progress value={progresso} className="h-3" />
      </div>

      {/* Questão */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl leading-relaxed">{questao.pergunta}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {questao.opcoes.map((opcao, index) => {
              let buttonClass = "w-full text-left p-4 border rounded-lg transition-all duration-200 hover:shadow-md"

              if (mostrarResultado) {
                if (index === questao.resposta) {
                  buttonClass += " bg-green-100 border-green-500 text-green-800 shadow-md"
                } else if (index === respostas[questaoAtual] && index !== questao.resposta) {
                  buttonClass += " bg-red-100 border-red-500 text-red-800 shadow-md"
                } else {
                  buttonClass += " bg-gray-50 text-gray-600 opacity-60"
                }
              } else {
                buttonClass += " hover:bg-blue-50 hover:border-blue-300 hover:scale-[1.02]"
              }

              return (
                <button
                  key={index}
                  onClick={() => !mostrarResultado && handleResposta(index)}
                  disabled={mostrarResultado}
                  className={buttonClass}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-lg bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{opcao}</span>
                    {mostrarResultado && index === questao.resposta && (
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    )}
                    {mostrarResultado && index === respostas[questaoAtual] && index !== questao.resposta && (
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {mostrarResultado && (
            <div className="mt-6 space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <div className="flex items-start space-x-2">
                  <div className="text-blue-600 font-semibold text-sm">EXPLICAÇÃO:</div>
                </div>
                <p className="text-blue-800 mt-1">
                  {questao.explicacao}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={proximaQuestao}
                  className="flex-1"
                  size="lg"
                >
                  {questaoAtual < questoesFiltradas.length - 1 ? (
                    <>
                      Próxima Questão
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </>
                  ) : (
                    <>
                      Ver Resultado Final
                      <Trophy className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>

                {questaoAtual > 0 && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setQuestaoAtual(questaoAtual - 1)
                      setMostrarResultado(false)
                    }}
                    size="lg"
                  >
                    Questão Anterior
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

