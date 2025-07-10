import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Shield, Lock, Eye, AlertTriangle, Key, Bug, Globe, Users, BookOpen, ChevronRight, CheckCircle } from 'lucide-react'
import Simulado from './components/Simulado.jsx'
import './App.css'

// Importando as imagens
import securityHero from './assets/security-hero.png'
import ciaTriad from './assets/cia-triad.png'
import attackSurface from './assets/attack-surface.png'
import socialEngineering from './assets/social-engineering.png'
import cryptography from './assets/cryptography.png'
import malware from './assets/malware.png'
import webVulnerabilities from './assets/web-vulnerabilities.png'

function App() {
  const [activeSection, setActiveSection] = useState('fundamentos')
  const [mostrarSimulado, setMostrarSimulado] = useState(false)

  const sections = [
    {
      id: 'fundamentos',
      title: 'Fundamentos de Segurança',
      icon: Shield,
      image: ciaTriad,
      content: {
        summary: 'Os fundamentos da segurança da informação baseiam-se na tríade CID: Confidencialidade, Integridade e Disponibilidade.',
        analogy: 'Pense na segurança da informação como proteger sua casa: você precisa de fechaduras (confidencialidade), alarmes para detectar invasões (integridade) e garantir que você sempre possa entrar quando precisar (disponibilidade).',
        detailedContent: {
          introduction: 'A segurança da informação é um campo vasto, mas seus fundamentos são solidamente construídos sobre três pilares interconectados, conhecidos como a Tríade CID: Confidencialidade, Integridade e Disponibilidade. Compreender esses conceitos é o primeiro passo para proteger ativos de informação de forma eficaz.',
          concepts: [
            {
              title: 'Confidencialidade: O Segredo Protegido',
              description: 'A confidencialidade garante que a informação seja acessível apenas por indivíduos, entidades ou processos autorizados. É a proteção contra a divulgação não autorizada de dados.',
              examples: [
                'Um hacker acessando dados de clientes de uma empresa',
                'Um funcionário vazando informações confidenciais para a concorrência',
                'A perda de um laptop contendo dados sensíveis sem criptografia'
              ],
              mechanisms: [
                'Criptografia: transformar a informação em um formato ilegível para não autorizados',
                'Controle de acesso: autenticação e autorização de usuários',
                'Políticas de segurança: regras e procedimentos para manuseio de informações sensíveis'
              ]
            },
            {
              title: 'Integridade: A Verdade Inalterada',
              description: 'A integridade assegura que a informação seja precisa, completa e não tenha sido alterada ou destruída de forma não autorizada. Garante que os dados permaneçam consistentes e confiáveis ao longo de seu ciclo de vida.',
              examples: [
                'Um vírus que corrompe arquivos',
                'Um invasor que altera registros financeiros em um banco de dados',
                'Um erro humano que leva à exclusão acidental de dados críticos'
              ],
              mechanisms: [
                'Hashing: criação de uma assinatura digital única para o dado',
                'Backups: cópias de segurança para restaurar dados em caso de perda',
                'Controle de versão: rastreamento de alterações para permitir o retorno a estados anteriores'
              ]
            },
            {
              title: 'Disponibilidade: Acesso Sempre que Necessário',
              description: 'A disponibilidade assegura que os usuários autorizados tenham acesso à informação e aos sistemas quando e onde precisarem. É a garantia de que os recursos de informação estão operacionais e acessíveis para uso legítimo.',
              examples: [
                'Ataques de Negação de Serviço (DoS/DDoS) que sobrecarregam servidores',
                'Falhas de hardware ou software',
                'Desastres naturais que afetam a infraestrutura'
              ],
              mechanisms: [
                'Redundância: ter sistemas duplicados para assumir em caso de falha',
                'Backups e planos de recuperação de desastres',
                'Balanceamento de carga: distribuir o tráfego para evitar sobrecarga'
              ]
            }
          ],
          additionalConcepts: [
            {
              title: 'Autenticidade: Você é Quem Diz Ser?',
              description: 'A autenticidade é a garantia de que uma entidade (usuário, dispositivo ou processo) é quem alega ser. É a verificação da identidade de quem está se comunicando.'
            },
            {
              title: 'Não Repúdio: Não Há Como Negar',
              description: 'O não repúdio é a garantia de que uma parte em uma comunicação não pode negar a autoria de uma mensagem ou transação.'
            }
          ]
        }
      }
    },
    {
      id: 'superficie',
      title: 'Superfície de Ataque',
      icon: AlertTriangle,
      image: attackSurface,
      content: {
        summary: 'A superfície de ataque representa todos os pontos onde um atacante pode tentar obter acesso ou extrair dados de um sistema.',
        analogy: 'É como todas as possíveis entradas da sua casa: portas, janelas, telhado, caixa de correio. Quanto menor e mais controlada a superfície, menor a chance de invasão.',
        detailedContent: {
          introduction: 'A superfície de ataque de um sistema ou organização refere-se à soma total de todos os pontos (vetores) onde um atacante não autorizado pode tentar entrar ou extrair dados. Compreender e gerenciar essa superfície é crucial para a segurança cibernética.',
          concepts: [
            {
              title: 'Superfície de Ataque de Software',
              description: 'Inclui todo o código em execução, protocolos, serviços, APIs e interfaces de usuário.',
              examples: [
                'Sistemas operacionais desatualizados',
                'Aplicações web com falhas de segurança (SQL Injection, XSS)',
                'APIs mal configuradas',
                'Serviços de rede expostos (SSH, RDP)'
              ]
            },
            {
              title: 'Superfície de Ataque de Hardware',
              description: 'Refere-se aos dispositivos físicos e componentes de rede que podem ser comprometidos.',
              examples: [
                'Portas USB desprotegidas',
                'Firmware desatualizado em roteadores',
                'Dispositivos IoT sem autenticação forte',
                'Acesso físico não controlado a servidores'
              ]
            },
            {
              title: 'Superfície de Ataque Humana',
              description: 'As pessoas são frequentemente o elo mais fraco na cadeia de segurança. A engenharia social explora a natureza humana.',
              examples: [
                'Phishing (e-mails fraudulentos)',
                'Pretexting (criação de cenários falsos)',
                'Baiting (isca com malware)',
                'Uso de senhas fracas ou reutilizadas'
              ]
            }
          ],
          managementProcess: [
            {
              title: 'Identificação',
              description: 'Mapear todos os ativos (hardware, software, dados, pessoas) e suas interconexões, incluindo ativos conhecidos e desconhecidos (shadow IT).'
            },
            {
              title: 'Análise e Avaliação',
              description: 'Analisar os pontos de exposição para determinar sua criticidade e o risco que representam usando ferramentas de varredura e testes de penetração.'
            },
            {
              title: 'Remediação e Mitigação',
              description: 'Corrigir vulnerabilidades através de patches, reconfiguração de sistemas, implementação de controles de acesso e treinamento.'
            },
            {
              title: 'Monitoramento Contínuo',
              description: 'A superfície de ataque muda constantemente, exigindo monitoramento contínuo para detectar novas vulnerabilidades em tempo real.'
            }
          ]
        }
      }
    },
    {
      id: 'engenharia',
      title: 'Engenharia Social',
      icon: Users,
      image: socialEngineering,
      content: {
        summary: 'Engenharia Social é a arte de manipular pessoas para revelar informações confidenciais ou realizar ações que normalmente não fariam.',
        analogy: 'É como um mágico que distrai sua atenção para realizar um truque, ou um golpista que se passa por alguém de confiança para obter seus dados.',
        detailedContent: {
          introduction: 'A engenharia social é uma das ameaças mais insidiosas à segurança da informação, pois não explora falhas tecnológicas, mas sim a natureza humana. É a arte de manipular indivíduos para que revelem informações confidenciais ou realizem ações que normalmente não fariam.',
          techniques: [
            {
              title: 'Phishing',
              description: 'Comunicações fraudulentas que parecem vir de uma fonte legítima para enganar a vítima.',
              variants: ['Spear Phishing: ataques direcionados', 'Whaling: mira em executivos de alto nível'],
              prevention: 'Verificar sempre o remetente, não clicar em links suspeitos, usar autenticação de dois fatores'
            },
            {
              title: 'Pretexting',
              description: 'Criação de um cenário falso para enganar a vítima e obter informações.',
              examples: ['Fingir ser técnico de TI', 'Passar-se por funcionário de banco', 'Simular emergência familiar'],
              prevention: 'Verificar a identidade através de canais oficiais, questionar solicitações incomuns'
            },
            {
              title: 'Baiting',
              description: 'Deixar dispositivos infectados em locais públicos esperando que alguém os conecte.',
              examples: ['Pendrives em estacionamentos', 'CDs com rótulos atrativos', 'Ofertas online tentadoras'],
              prevention: 'Nunca conectar dispositivos desconhecidos, desconfiar de ofertas muito boas'
            },
            {
              title: 'Tailgating',
              description: 'Seguir uma pessoa autorizada para ter acesso a uma área restrita.',
              examples: ['Segurar a porta para o atacante', 'Fingir esquecer o crachá', 'Carregar caixas pesadas'],
              prevention: 'Sempre verificar credenciais, não segurar portas para desconhecidos'
            }
          ],
          privacyThreats: [
            {
              title: 'Coleta de Dados por Empresas',
              description: 'Grandes empresas coletam dados sobre hábitos de navegação, compras e interações sociais.'
            },
            {
              title: 'Vigilância Governamental',
              description: 'Monitoramento de comunicações sob pretexto de segurança nacional.'
            },
            {
              title: 'Vazamento de Dados',
              description: 'Falhas de segurança que resultam no vazamento de informações pessoais.'
            },
            {
              title: 'Rastreamento Online',
              description: 'Uso de cookies e pixels para monitorar comportamento online.'
            }
          ],
          protectionMeasures: [
            'Senhas fortes e autenticação de dois fatores',
            'Configurações de privacidade em redes sociais',
            'Navegação segura com VPNs',
            'Cuidado com o que compartilha online',
            'Software de segurança atualizado'
          ]
        }
      }
    },
    {
      id: 'criptografia',
      title: 'Criptografia',
      icon: Key,
      image: cryptography,
      content: {
        summary: 'Criptografia é a ciência de proteger informações tornando-as ilegíveis para quem não possui a chave correta.',
        analogy: 'É como escrever uma mensagem em código secreto que só você e o destinatário conhecem a tradução.',
        detailedContent: {
          introduction: 'A criptografia é a espinha dorsal da segurança da informação no mundo digital. É a ciência e a arte de proteger a comunicação e os dados, transformando-os de um formato legível para um formato ilegível.',
          history: [
            'Cifra de César: substituição de letras por outras a posições fixas',
            'Cifra de Vigenère: série de diferentes Cifras de César baseadas em palavra-chave',
            'Máquina Enigma: cifra de substituição polialfabética complexa da Segunda Guerra'
          ],
          symmetricCrypto: {
            title: 'Criptografia Simétrica',
            description: 'Utiliza a mesma chave tanto para criptografar quanto para descriptografar a informação.',
            advantages: ['Velocidade: muito mais rápida que assimétrica', 'Eficiência: requer menos poder computacional'],
            disadvantages: ['Distribuição de chaves: como compartilhar a chave secreta', 'Escalabilidade: número de chaves cresce exponencialmente'],
            algorithms: ['AES (Advanced Encryption Standard): padrão atual mais seguro', 'DES (Data Encryption Standard): algoritmo mais antigo, considerado inseguro', '3DES, Blowfish, Twofish: outros algoritmos com diferentes características']
          },
          asymmetricCrypto: {
            title: 'Criptografia Assimétrica',
            description: 'Utiliza um par de chaves matematicamente relacionadas: uma pública e uma privada.',
            advantages: ['Distribuição de chaves: resolve o problema da criptografia simétrica', 'Autenticação e não repúdio: através de assinaturas digitais'],
            disadvantages: ['Velocidade: significativamente mais lenta', 'Complexidade: algoritmos matematicamente mais complexos'],
            algorithms: ['RSA: baseado na dificuldade de fatorar grandes números primos', 'ECC: oferece segurança comparável com chaves menores']
          },
          digitalCertification: {
            title: 'Certificação Digital',
            description: 'Conjunto de tecnologias que garantem autenticidade, integridade e não repúdio de informações eletrônicas.',
            components: [
              'Certificados Digitais: documentos eletrônicos com chave pública e identificação',
              'Autoridade Certificadora: entidade que emite e gerencia certificados',
              'Assinatura Digital: mecanismo que garante autenticidade e integridade',
              'PKI: infraestrutura de chaves públicas para gerenciar certificados'
            ]
          },
          attacks: [
            'Ataque de Força Bruta: tentar todas as combinações possíveis',
            'Ataque de Dicionário: usar listas de palavras comuns',
            'Ataque de Canal Lateral: explorar informações vazadas durante execução',
            'Ataque Man-in-the-Middle: interceptar comunicação entre duas partes',
            'Ataque de Replay: reutilizar comunicações válidas capturadas'
          ]
        }
      }
    },
    {
      id: 'malware',
      title: 'Malware',
      icon: Bug,
      image: malware,
      content: {
        summary: 'Malware é software malicioso projetado para danificar, roubar dados ou realizar ações indesejadas em sistemas.',
        analogy: 'É como um parasita digital que se instala no seu computador para fazer coisas ruins sem seu consentimento.',
        detailedContent: {
          introduction: 'Malware é um termo abrangente que se refere a qualquer programa de computador projetado para causar danos, roubar dados, desabilitar sistemas ou realizar ações indesejadas sem o consentimento do usuário.',
          types: [
            {
              title: 'Vírus',
              description: 'Programas que se anexam a outros programas legítimos e se replicam quando o programa hospedeiro é executado.',
              characteristics: ['Precisam de ação do usuário para se espalhar', 'Infectam outros arquivos ou sistemas'],
              infection: ['Anexos de e-mail', 'Downloads de software pirata', 'Mídias removíveis infectadas']
            },
            {
              title: 'Worms',
              description: 'Programas autônomos que se replicam e se espalham por redes sem necessidade de programa hospedeiro.',
              characteristics: ['Não precisam de intervenção do usuário', 'Exploram vulnerabilidades de rede'],
              infection: ['Vulnerabilidades de rede', 'E-mails com links maliciosos', 'Compartilhamento de arquivos']
            },
            {
              title: 'Cavalos de Troia (Trojans)',
              description: 'Programas que se disfarçam de software legítimo para enganar usuários.',
              characteristics: ['Não se replicam por conta própria', 'Abrem backdoors para atacantes'],
              infection: ['Downloads de software falsificado', 'Anexos de e-mail', 'Sites maliciosos']
            },
            {
              title: 'Ransomware',
              description: 'Malware que criptografa arquivos do usuário e exige pagamento para descriptografá-los.',
              characteristics: ['Uma das ameaças mais lucrativas', 'Causa grande disrupção nos negócios'],
              infection: ['E-mails de phishing', 'Kits de exploração em sites', 'Vulnerabilidades de rede']
            },
            {
              title: 'Spyware',
              description: 'Software que coleta informações sobre o usuário sem seu conhecimento.',
              characteristics: ['Monitora atividades do usuário', 'Coleta credenciais e dados pessoais'],
              types: ['Keyloggers: registram teclas digitadas', 'Screen scrapers: capturam telas']
            },
            {
              title: 'Rootkits',
              description: 'Conjuntos de ferramentas que mantêm acesso privilegiado e escondem sua presença.',
              characteristics: ['Operam em nível baixo do sistema', 'Muito difíceis de detectar'],
              capabilities: ['Ocultar processos e arquivos', 'Modificar logs do sistema']
            },
            {
              title: 'Botnets',
              description: 'Redes de computadores infectados controlados remotamente.',
              characteristics: ['Controlados por um botmaster', 'Usados para ataques em massa'],
              uses: ['Ataques DDoS', 'Envio de spam', 'Mineração de criptomoedas']
            }
          ],
          infectionMethods: [
            'E-mails de phishing com anexos maliciosos',
            'Downloads de software de fontes não confiáveis',
            'Sites comprometidos com exploits',
            'Mídias removíveis infectadas',
            'Redes sociais com links maliciosos'
          ],
          protection: [
            'Antivírus e anti-malware atualizados',
            'Firewall configurado adequadamente',
            'Atualizações regulares de software',
            'Cuidado com e-mails e links suspeitos',
            'Downloads apenas de fontes confiáveis',
            'Backups regulares dos dados',
            'Educação e conscientização sobre ameaças'
          ]
        }
      }
    },
    {
      id: 'vulnerabilidades',
      title: 'Vulnerabilidades Web',
      icon: Globe,
      image: webVulnerabilities,
      content: {
        summary: 'Vulnerabilidades em aplicações web são fraquezas que podem ser exploradas por atacantes para comprometer sistemas.',
        analogy: 'É como uma fechadura fraca em uma porta que um ladrão pode arrombar facilmente.',
        detailedContent: {
          introduction: 'As aplicações web são a porta de entrada para muitos negócios online, mas também representam um alvo principal para cibercriminosos. A OWASP mantém uma lista das 10 vulnerabilidades mais críticas.',
          owaspTop10: [
            {
              title: 'Injeção (Injection)',
              description: 'Dados não confiáveis são enviados a um interpretador como parte de um comando ou consulta.',
              types: ['SQL Injection', 'NoSQL Injection', 'OS Command Injection', 'LDAP Injection'],
              example: 'Atacante insere \'; DROP TABLE users; -- em campo de login',
              mitigation: ['Validação de entrada', 'Prepared Statements', 'ORMs', 'Privilégios mínimos']
            },
            {
              title: 'Quebra de Autenticação',
              description: 'Falhas na implementação de funções de autenticação e gerenciamento de sessão.',
              examples: ['Senhas fracas', 'Credenciais inseguras', 'IDs de sessão previsíveis'],
              mitigation: ['Senhas fortes', 'Autenticação multifator', 'Gerenciamento seguro de sessões']
            },
            {
              title: 'Cross-Site Scripting (XSS)',
              description: 'Permite injeção de scripts maliciosos no conteúdo de páginas web.',
              types: ['XSS Refletido', 'XSS Armazenado', 'XSS Baseado em DOM'],
              mitigation: ['Validação de entrada', 'Codificação de saída', 'Content Security Policy']
            },
            {
              title: 'Insecure Direct Object References (IDOR)',
              description: 'Aplicação expõe referência direta a objeto interno sem verificar autorização.',
              example: 'Usuário altera ID na URL de pedido?id=123 para pedido?id=456',
              mitigation: ['Verificação de autorização', 'Referências indiretas (UUIDs)']
            },
            {
              title: 'Configuração de Segurança Incorreta',
              description: 'Sistemas configurados incorretamente deixando brechas de segurança.',
              examples: ['Configurações padrão inseguras', 'Serviços desnecessários', 'Diretórios abertos'],
              mitigation: ['Hardening de sistemas', 'Remoção de funcionalidades desnecessárias', 'Auditorias regulares']
            },
            {
              title: 'Desserialização Insegura',
              description: 'Aplicação desserializa dados não confiáveis sem validação adequada.',
              risks: ['Execução remota de código', 'Ataques de negação de serviço'],
              mitigation: ['Evitar desserialização de dados não confiáveis', 'Formatos seguros', 'Validação de integridade']
            },
            {
              title: 'Componentes com Vulnerabilidades',
              description: 'Uso de bibliotecas e frameworks com vulnerabilidades conhecidas.',
              mitigation: ['Manter componentes atualizados', 'Remover dependências não utilizadas', 'Monitorar CVEs']
            },
            {
              title: 'Falha de Registro e Monitoramento',
              description: 'Falta de registro adequado dificulta detecção e resposta a ataques.',
              mitigation: ['Logging abrangente', 'Monitoramento contínuo', 'Alertas de segurança', 'SIEM']
            },
            {
              title: 'Server-Side Request Forgery (SSRF)',
              description: 'Aplicação busca recurso remoto sem validar URL fornecida pelo usuário.',
              mitigation: ['Validar URLs', 'Listas de permissão', 'Desabilitar redirecionamentos']
            },
            {
              title: 'Controle de Acesso Quebrado',
              description: 'Falhas na implementação de controles de acesso.',
              mitigation: ['RBAC', 'Princípio do menor privilégio', 'Testes rigorosos de permissões']
            }
          ],
          bestPractices: [
            'Desenvolvimento seguro desde o início (Security by Design)',
            'Testes de segurança regulares (SAST, DAST, IAST)',
            'Code reviews focados em segurança',
            'Treinamento de desenvolvedores em segurança',
            'Implementação de WAF (Web Application Firewall)',
            'Monitoramento contínuo de vulnerabilidades',
            'Programa de bug bounty para descoberta de falhas'
          ]
        }
      }
    }
  ]

  const currentSection = sections.find(s => s.id === activeSection)

  if (mostrarSimulado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-800">Segurança da Informação</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => setMostrarSimulado(false)}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Voltar ao Conteúdo
                </Button>
                <Badge variant="secondary" className="text-sm">
                  Simulado
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <div className="py-8">
          <Simulado />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Segurança da Informação</h1>
            </div>
            <Badge variant="secondary" className="text-sm">
              Guia Completo
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Domine os Fundamentos da Segurança Digital
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Aprenda os conceitos essenciais para proteger informações e sistemas 
                contra ameaças cibernéticas modernas.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => document.getElementById('content').scrollIntoView({ behavior: 'smooth' })}
              >
                Começar Aprendizado
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src={securityHero} 
                alt="Segurança da Informação" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="content" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Explore os Tópicos Essenciais
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada seção apresenta conceitos fundamentais com explicações didáticas e analogias práticas.
            </p>
          </div>

          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
              {sections.map((section) => {
                const IconComponent = section.icon
                return (
                  <TabsTrigger 
                    key={section.id} 
                    value={section.id}
                    className="flex flex-col items-center p-3 text-xs lg:text-sm"
                  >
                    <IconComponent className="h-4 w-4 mb-1" />
                    <span className="hidden lg:inline">{section.title}</span>
                    <span className="lg:hidden">{section.title.split(' ')[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {sections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <div className="space-y-6">
                  {/* Header Card */}
                  <Card className="overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/3">
                        <img 
                          src={section.image} 
                          alt={section.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div className="lg:w-2/3 p-6 lg:p-8">
                        <CardHeader className="px-0 pt-0">
                          <div className="flex items-center space-x-3 mb-4">
                            <section.icon className="h-8 w-8 text-blue-600" />
                            <CardTitle className="text-2xl lg:text-3xl">{section.title}</CardTitle>
                          </div>
                          <CardDescription className="text-lg">
                            {section.content.summary}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="px-0">
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3 text-blue-700">
                              💡 Analogia Prática
                            </h4>
                            <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                              {section.content.analogy}
                            </p>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>

                  {/* Detailed Content */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Conteúdo Detalhado</CardTitle>
                      <CardDescription>
                        Explore os conceitos fundamentais e suas aplicações práticas
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none">
                        <p className="text-gray-700 mb-6">
                          {section.content.detailedContent.introduction}
                        </p>

                        {/* Render specific content based on section */}
                        {section.id === 'fundamentos' && (
                          <div className="space-y-8">
                            {section.content.detailedContent.concepts.map((concept, index) => (
                              <div key={index} className="border-l-4 border-blue-400 pl-6">
                                <h4 className="text-lg font-semibold text-blue-700 mb-3">
                                  {concept.title}
                                </h4>
                                <p className="text-gray-700 mb-4">
                                  {concept.description}
                                </p>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h5 className="font-medium text-red-600 mb-2">Exemplos de Violação:</h5>
                                    <ul className="space-y-1">
                                      {concept.examples.map((example, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start">
                                          <span className="text-red-500 mr-2">•</span>
                                          {example}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-medium text-green-600 mb-2">Mecanismos de Proteção:</h5>
                                    <ul className="space-y-1">
                                      {concept.mechanisms.map((mechanism, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start">
                                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                          {mechanism}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}

                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                                Conceitos Adicionais
                              </h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {section.content.detailedContent.additionalConcepts.map((concept, index) => (
                                  <div key={index} className="bg-white p-4 rounded border">
                                    <h5 className="font-medium text-blue-600 mb-2">{concept.title}</h5>
                                    <p className="text-sm text-gray-600">{concept.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {section.id === 'superficie' && (
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                                Componentes da Superfície de Ataque
                              </h4>
                              <div className="grid gap-6">
                                {section.content.detailedContent.concepts.map((concept, index) => (
                                  <div key={index} className="border rounded-lg p-4">
                                    <h5 className="font-medium text-gray-800 mb-2">{concept.title}</h5>
                                    <p className="text-gray-600 mb-3">{concept.description}</p>
                                    <div>
                                      <h6 className="text-sm font-medium text-red-600 mb-2">Exemplos:</h6>
                                      <ul className="grid md:grid-cols-2 gap-1">
                                        {concept.examples.map((example, i) => (
                                          <li key={i} className="text-sm text-gray-600 flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            {example}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                                Processo de Gerenciamento
                              </h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {section.content.detailedContent.managementProcess.map((process, index) => (
                                  <div key={index} className="bg-white p-4 rounded border-l-4 border-blue-400">
                                    <h5 className="font-medium text-blue-600 mb-2">{process.title}</h5>
                                    <p className="text-sm text-gray-600">{process.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {section.id === 'engenharia' && (
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                                Técnicas de Engenharia Social
                              </h4>
                              <div className="space-y-6">
                                {section.content.detailedContent.techniques.map((technique, index) => (
                                  <div key={index} className="border rounded-lg p-4">
                                    <h5 className="font-medium text-gray-800 mb-2">{technique.title}</h5>
                                    <p className="text-gray-600 mb-3">{technique.description}</p>
                                    
                                    {technique.variants && (
                                      <div className="mb-3">
                                        <h6 className="text-sm font-medium text-purple-600 mb-1">Variações:</h6>
                                        <ul className="space-y-1">
                                          {technique.variants.map((variant, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-start">
                                              <span className="text-purple-500 mr-2">•</span>
                                              {variant}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {technique.examples && (
                                      <div className="mb-3">
                                        <h6 className="text-sm font-medium text-red-600 mb-1">Exemplos:</h6>
                                        <ul className="space-y-1">
                                          {technique.examples.map((example, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-start">
                                              <span className="text-red-500 mr-2">•</span>
                                              {example}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    <div>
                                      <h6 className="text-sm font-medium text-green-600 mb-1">Prevenção:</h6>
                                      <p className="text-sm text-gray-600">{technique.prevention}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-yellow-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-yellow-700 mb-4">
                                Ameaças à Privacidade Online
                              </h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {section.content.detailedContent.privacyThreats.map((threat, index) => (
                                  <div key={index} className="bg-white p-4 rounded border-l-4 border-yellow-400">
                                    <h5 className="font-medium text-yellow-600 mb-2">{threat.title}</h5>
                                    <p className="text-sm text-gray-600">{threat.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-green-700 mb-4">
                                Medidas de Proteção
                              </h4>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {section.content.detailedContent.protectionMeasures.map((measure, index) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{measure}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {section.id === 'criptografia' && (
                          <div className="space-y-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                                História da Criptografia
                              </h4>
                              <ul className="space-y-2">
                                {section.content.detailedContent.history.map((item, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span className="text-gray-700">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="border rounded-lg p-4">
                                <h4 className="text-lg font-semibold text-blue-700 mb-3">
                                  {section.content.detailedContent.symmetricCrypto.title}
                                </h4>
                                <p className="text-gray-600 mb-4">
                                  {section.content.detailedContent.symmetricCrypto.description}
                                </p>
                                
                                <div className="space-y-3">
                                  <div>
                                    <h5 className="font-medium text-green-600 mb-1">Vantagens:</h5>
                                    <ul className="space-y-1">
                                      {section.content.detailedContent.symmetricCrypto.advantages.map((adv, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start">
                                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                          {adv}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-medium text-red-600 mb-1">Desvantagens:</h5>
                                    <ul className="space-y-1">
                                      {section.content.detailedContent.symmetricCrypto.disadvantages.map((dis, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start">
                                          <span className="text-red-500 mr-2">•</span>
                                          {dis}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <h5 className="font-medium text-blue-600 mb-1">Algoritmos:</h5>
                                    <ul className="space-y-1">
                                      {section.content.detailedContent.symmetricCrypto.algorithms.map((alg, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start">
                                          <span className="text-blue-500 mr-2">•</span>
                                          {alg}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className="border rounded-lg p-4">
                                <h4 className="text-lg font-semibold text-purple-700 mb-3">
                                  {section.content.detailedContent.asymmetricCrypto.title}
                                </h4>
                                <p className="text-gray-600 mb-4">
                                  {section.content.detailedContent.asymmetricCrypto.description}
                                </p>
                                
                                <div className="space-y-3">
                                  <div>
                                    <h5 className="font-medium text-green-600 mb-1">Vantagens:</h5>
                                    <ul className="space-y-1">
                                      {section.content.detailedContent.asymmetricCrypto.advantages.map((adv, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start">
                                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                          {adv}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div>
                                    <h5 className="font-medium text-red-600 mb-1">Desvantagens:</h5>
                                    <ul className="space-y-1">
                                      {section.content.detailedContent.asymmetricCrypto.disadvantages.map((dis, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start">
                                          <span className="text-red-500 mr-2">•</span>
                                          {dis}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <h5 className="font-medium text-purple-600 mb-1">Algoritmos:</h5>
                                    <ul className="space-y-1">
                                      {section.content.detailedContent.asymmetricCrypto.algorithms.map((alg, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-start">
                                          <span className="text-purple-500 mr-2">•</span>
                                          {alg}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                                {section.content.detailedContent.digitalCertification.title}
                              </h4>
                              <p className="text-gray-600 mb-4">
                                {section.content.detailedContent.digitalCertification.description}
                              </p>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {section.content.detailedContent.digitalCertification.components.map((component, index) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{component}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-red-700 mb-4">
                                Ataques Criptográficos
                              </h4>
                              <ul className="space-y-2">
                                {section.content.detailedContent.attacks.map((attack, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    <span className="text-gray-700">{attack}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {section.id === 'malware' && (
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                                Tipos de Malware
                              </h4>
                              <div className="space-y-6">
                                {section.content.detailedContent.types.map((type, index) => (
                                  <div key={index} className="border rounded-lg p-4">
                                    <h5 className="font-medium text-gray-800 mb-2">{type.title}</h5>
                                    <p className="text-gray-600 mb-3">{type.description}</p>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div>
                                        <h6 className="text-sm font-medium text-blue-600 mb-1">Características:</h6>
                                        <ul className="space-y-1">
                                          {type.characteristics.map((char, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-start">
                                              <span className="text-blue-500 mr-2">•</span>
                                              {char}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                      {type.infection && (
                                        <div>
                                          <h6 className="text-sm font-medium text-red-600 mb-1">Métodos de Infecção:</h6>
                                          <ul className="space-y-1">
                                            {type.infection.map((method, i) => (
                                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-red-500 mr-2">•</span>
                                                {method}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {type.types && (
                                        <div>
                                          <h6 className="text-sm font-medium text-purple-600 mb-1">Tipos:</h6>
                                          <ul className="space-y-1">
                                            {type.types.map((subtype, i) => (
                                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-purple-500 mr-2">•</span>
                                                {subtype}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {type.capabilities && (
                                        <div>
                                          <h6 className="text-sm font-medium text-orange-600 mb-1">Capacidades:</h6>
                                          <ul className="space-y-1">
                                            {type.capabilities.map((capability, i) => (
                                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-orange-500 mr-2">•</span>
                                                {capability}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {type.uses && (
                                        <div>
                                          <h6 className="text-sm font-medium text-gray-600 mb-1">Usos:</h6>
                                          <ul className="space-y-1">
                                            {type.uses.map((use, i) => (
                                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-gray-500 mr-2">•</span>
                                                {use}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-red-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-red-700 mb-4">
                                Métodos de Infecção Comuns
                              </h4>
                              <ul className="space-y-2">
                                {section.content.detailedContent.infectionMethods.map((method, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    <span className="text-gray-700">{method}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="bg-green-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-green-700 mb-4">
                                Como se Proteger
                              </h4>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {section.content.detailedContent.protection.map((protection, index) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{protection}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {section.id === 'vulnerabilidades' && (
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                                OWASP Top 10 - Vulnerabilidades Mais Críticas
                              </h4>
                              <div className="space-y-6">
                                {section.content.detailedContent.owaspTop10.map((vuln, index) => (
                                  <div key={index} className="border rounded-lg p-4">
                                    <div className="flex items-start justify-between mb-2">
                                      <h5 className="font-medium text-gray-800">{index + 1}. {vuln.title}</h5>
                                      <Badge variant="outline" className="text-xs">
                                        OWASP #{index + 1}
                                      </Badge>
                                    </div>
                                    <p className="text-gray-600 mb-3">{vuln.description}</p>
                                    
                                    <div className="grid gap-4">
                                      {vuln.types && (
                                        <div>
                                          <h6 className="text-sm font-medium text-purple-600 mb-1">Tipos:</h6>
                                          <ul className="flex flex-wrap gap-2">
                                            {vuln.types.map((type, i) => (
                                              <li key={i}>
                                                <Badge variant="secondary" className="text-xs">{type}</Badge>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {vuln.example && (
                                        <div>
                                          <h6 className="text-sm font-medium text-red-600 mb-1">Exemplo:</h6>
                                          <p className="text-sm text-gray-600 bg-red-50 p-2 rounded font-mono">
                                            {vuln.example}
                                          </p>
                                        </div>
                                      )}

                                      {vuln.examples && (
                                        <div>
                                          <h6 className="text-sm font-medium text-red-600 mb-1">Exemplos:</h6>
                                          <ul className="space-y-1">
                                            {vuln.examples.map((example, i) => (
                                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-red-500 mr-2">•</span>
                                                {example}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      {vuln.risks && (
                                        <div>
                                          <h6 className="text-sm font-medium text-orange-600 mb-1">Riscos:</h6>
                                          <ul className="space-y-1">
                                            {vuln.risks.map((risk, i) => (
                                              <li key={i} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-orange-500 mr-2">•</span>
                                                {risk}
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}

                                      <div>
                                        <h6 className="text-sm font-medium text-green-600 mb-1">Mitigação:</h6>
                                        <ul className="space-y-1">
                                          {vuln.mitigation.map((mit, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-start">
                                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                              {mit}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-lg">
                              <h4 className="text-lg font-semibold text-blue-700 mb-4">
                                Melhores Práticas de Segurança
                              </h4>
                              <ul className="grid md:grid-cols-2 gap-2">
                                {section.content.detailedContent.bestPractices.map((practice, index) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{practice}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Teste Seus Conhecimentos
          </h3>
          <p className="text-xl mb-8 text-gray-300">
            Pronto para verificar o que aprendeu? Faça nosso simulado interativo!
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setMostrarSimulado(true)}
          >
            Fazer Simulado
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-semibold">Segurança da Informação</span>
          </div>
          <p className="text-gray-400">
            Material educativo sobre fundamentos de segurança digital
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

