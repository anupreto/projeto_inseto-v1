CREATE DATABASE IF NOT EXISTS insetos_db;
USE insetos_db

CREATE TABLE insetos (
    id_insetos INT AUTO_INCREMENT PRIMARY KEY,
    nome_insetos VARCHAR(50) NOT NULL,
    nc_insetos VARCHAR(50) NOT NULL,
    ordem_insetos VARCHAR(65) NOT NULL,
    longevidade_insetos DECIMAL(5, 1) NOT NULL,
    tamanho_insetos DECIMAL(5, 2) NOT NULL,
    familia_insetos VARCHAR(70) NOT NULL,
    dieta_insetos VARCHAR(50) NOT NULL,
    tem_asas BOOLEAN NOT NULL DEFAULT 0,
    curisidade TEXT,
    foto_insetos TEXT
);


INSERT INTO insetos(nome_insetos, nc_insetos, ordem_insetos, longevidade_insetos, tamanho_insetos, familia_insetos, dieta_insetos, tem_asas, curisidade) VALUES
    ('Besouro Rinoceronte', 'Oryctes nasicornis', 'Besouro', 3.0, 6.00, 'Scarabaeidae', 'Detritívoro', 1, 'Consegue levantar até 850 vezes o seu próprio peso, equivalente a um humano erguer vários carros.'), 
    ('Besouro Hércules', 'Dynastes hercules', 'Besouro', 0.5, 17.00, 'Scarabaeidae', 'Detritívoro', 1, 'É considerado um dos maiores insetos do mundo e possui um chifre enorme usado para disputas territoriais.'),
    ('Besouro Rola Bosta', 'Scarabaeus sacer', 'Besouro', 3.0, 3.00, 'Scarabaeidae', 'Coprófago', 1, 'Navega guiando se pela luz da Via Láctea para rolar suas bolas de esterco em linha reta.'),
    ('Besouro Golias', 'Goliathus goliatus', 'Besouro', 1.0, 11.00, 'Scarabaeidae', 'Detritívoro', 1, 'Pode pesar mais de 100 gramas na fase larval, sendo um dos insetos mais pesados da Terra.'),
    ('Besouro Elefante', 'Megasoma elephas', 'Besouro', 0.3, 12.00, 'Scarabaeidae', 'Detritívoro', 1, 'Seu nome vem de seu grande porte e do chifre curvado que lembra a tromba de um elefante.'),
    ('Besouro Marmorado', 'Anomala dubia', 'Besouro', 0.2, 1.50, 'Scarabaeidae', 'Herbívoro', 1, 'Suas larvas vivem enterradas no solo se alimentando de raízes em decomposição por meses.'),
    ('Besouro Verde das Flores', 'Cetonia aurata', 'Besouro', 2.0, 2.00, 'Scarabaeidae', 'Nectarívoro', 1, 'Possui uma coloração metálica brilhante que confere camuflagem natural entre folhagens e pétalas.'),
    ('Besouro Atlas', 'Chalcosoma atlas', 'Besouro', 0.7, 13.00, 'Scarabaeidae', 'Detritívoro', 1, 'Os machos usam seus chifres tridivididos para arremessar rivais para longe durante brigas por fêmeas.'),
    ('Besouro Ouro', 'Chrysina resplendens', 'Besouro', 0.5, 3.00, 'Scarabaeidae', 'Herbívoro', 1, 'Sua carcaça brilha como ouro puro devido a estruturas microscópicas que refletem a luz.'),
    ('Besouro das Videiras', 'Pelidnota punctata', 'Besouro', 1.0, 2.50, 'Scarabaeidae', 'Herbívoro', 1, 'Atrai se facilmente por luzes artificiais durante as noites quentes de verão.'),

    ('Besouro Violino', 'Mormolyce phyllodes', 'Besouro', 1.5, 10.00, 'Carabidae', 'Carnívoro', 1, 'Possui um corpo extremamente achatado e alongado, adaptado para viver sob cascas finas de árvores.'),
    ('Besouro Bombardeiro', 'Brachinus crepitans', 'Besouro', 1.0, 1.20, 'Carabidae', 'Carnívoro', 1, 'Dispara um jato químico fervendo a 100°C misturando compostos explosivos em seu abdômen.'),
    ('Besouro Caçador Dourado', 'Calosoma sycophanta', 'Besouro', 2.0, 3.00, 'Carabidae', 'Carnívoro', 1, 'É um excelente predador de lagartas desfolhadoras, ajudando a controlar pragas florestais.'),
    ('Besouro Tigre Verde', 'Cicindela campestris', 'Besouro', 1.0, 1.50, 'Carabidae', 'Carnívoro', 1, 'Corre tão rápido que precisa parar de enxergar temporariamente para processar as imagens visuais.'),
    ('Besouro Carabídeo Violeta', 'Carabus violaceus', 'Besouro', 2.0, 3.00, 'Carabidae', 'Carnívoro', 1, 'Exala um odor defensivo forte e desagradável quando ameaçado por predadores.'),
    ('Besouro Corredor Noturno', 'Nebria brevicollis', 'Besouro', 1.0, 1.20, 'Carabidae', 'Carnívoro', 1, 'Ativo durante a noite, caça ativamente aranhas e outros insetos no solo da floresta.'),
    ('Besouro Tigre Praiano', 'Cicindela hybrida', 'Besouro', 1.0, 1.60, 'Carabidae', 'Carnívoro', 1, 'Habita dunas de areia costeiras, onde caça pequenas presas com mandíbulas afiadas.'),
    ('Besouro Caçador Catarina', 'Calosoma inquisitor', 'Besouro', 2.0, 2.20, 'Carabidae', 'Carnívoro', 1, 'Capaz de subir em copas de árvores para caçar lagartas vorazes que atacam carvalhos.'),
    ('Besouro Grão Negro', 'Harpalus rufipes', 'Besouro', 1.5, 1.40, 'Carabidae', 'Onívoro', 1, 'Embora seja carnívoro, ocasionalmente consome sementes e grãos caídos no solo.'),
    ('Besouro Bombardeiro Gigante', 'Pheropsophus verticalis', 'Besouro', 1.2, 2.00, 'Carabidae', 'Carnívoro', 1, 'Possui uma câmara de reação interna mais desenvolvida, permitindo múltiplos disparos químicos consecutivos.'),

    ('Besouro Sombrio de Cape', 'Circellium bacchus', 'Besouro', 5.0, 4.50, 'Scarabaeidae', 'Coprófago', 0, 'Um dos poucosBesouros dung que adaptaram se perfeitamente a climas áridos sem voar.'),
    ('Besouro do Deserto de Namibe', 'Pachysoma striatum', 'Besouro', 2.0, 3.00, 'Scarabaeidae', 'Detritívoro', 0, 'Recolhe umidade da neblina matinal usando ranhuras especiais em suas costas.'),
    ('Besouro Cadeia de Avis', 'Pachysoma denticolle', 'Besouro', 1.5, 2.20, 'Scarabaeidae', 'Detritívoro', 0, 'Caminha por areias quentes do deserto em busca de detritos orgânicos levados pelo vento.'),
    ('Besouro Rola Bosta Caminhador', 'Scarabaeus ambiguus', 'Besouro', 1.8, 2.80, 'Scarabaeidae', 'Coprófago', 0, 'Em vez de rolar, empurra esterco usando as pernas traseiras adaptadas como pás.'),
    ('Besouro do Deserto Coletor', 'Pachysoma hippocrates', 'Besouro', 2.0, 2.70, 'Scarabaeidae', 'Detritívoro', 0, 'Suas patas curtas e robustas evitam que afunde na areia fofa durante o forrageamento.'),
    ('Escaravelho Sombrio de Richtersveld', 'Circellium morbillosum', 'Besouro', 3.0, 3.20, 'Scarabaeidae', 'Coprófago', 0, 'Sobrevive a variações térmicas extremas em montanhas áridas da África do Sul.'),
    ('Besouro Rola Bosta Gordo', 'Eucranium arachnoides', 'Besouro', 2.0, 2.00, 'Scarabaeidae', 'Coprófago', 0, 'Possui um abdômen abaulado que armazena reservas de gordura para períodos de escassez.'),
    ('Besouro Corredor das Pampas', 'Glyphoderus sterquilinus', 'Besouro', 1.5, 1.80, 'Scarabaeidae', 'Coprófago', 0, 'Adapta se a campos abertos gramados, correndo rapidamente entre touceiras de capim.'),
    ('Besouro Escavador Siderus', 'Glyphoderus monticola', 'Besouro', 1.8, 1.90, 'Scarabaeidae', 'Coprófago', 0, 'Cava galerias subterrâneas profundas para proteger sua fonte de alimento de outros insetos.'),
    ('Besouro Caminhador Anactus', 'Anactus edentulus', 'Besouro', 2.0, 2.10,'Scarabaeidae', 'Detritívoro', 0, 'Usa seu exoesqueleto espesso para resistir à dessecação sob o sol escaldante.'),

    ('Besouro Caracol Carcaju', 'Cychrus caraboides', 'Besouro', 2.0, 1.90, 'Carabidae', 'Carnívoro', 0, 'Suas mandíbulas estreitas são perfeitamente adaptadas para extrair lesmas de dentro de suas conchas.'),
    ('Besouro Terrestre Coriáceo', 'Carabus coriaceus', 'Besouro', 3.0, 4.00, 'Carabidae', 'Carnívoro', 0, 'Um dos maioresBesouros terrestres da Europa, incapaz de voar devido aos élitros soldados.'),
    ('Besouro Cego das Cavernas', 'Anophthalmus hitleri', 'Besouro', 1.5, 0.50, 'Carabidae', 'Carnívoro', 0, 'Vivendo na mais completa escuridão, perdeu os olhos e a pigmentação ao longo da evolução.'),
    ('Besouro Pedregal Gigante', 'Anthia thoracic', 'Besouro', 2.0, 5.50, 'Carabidae', 'Carnívoro', 0, 'Possui glândulas de defesa potentes capazes de cuspir substâncias irritantes a distâncias curtas.'),
    ('Besouro Corredor Ibérico', 'Carabus rugosus', 'Besouro', 2.0, 3.00, 'Carabidae', 'Carnívoro', 0, 'Possui coloração escura fosca que ajuda na absorção rápida de calor nas manhãs frias.'),
    ('Besouro Escavador Sombrio', 'Scarites buparius', 'Besouro', 2.5, 4.20, 'Carabidae', 'Carnívoro', 0, 'Passa o dia escondido sob pedras grandes, saindo apenas na penumbra para caçar.'),
    ('Besouro Devorador de Lesmas', 'Carabus nemoralis', 'Besouro', 2.0, 2.60, 'Carabidae', 'Carnívoro', 0, 'Aliado natural dos agricultores por controlar populações de moluscos pragas em hortas.'),
    ('Besouro Tigre Sem Asas', 'Manticora imperator', 'Besouro', 3.0, 6.50, 'Carabidae', 'Carnívoro', 0, 'Um predador voraz e robusto de savanas secas, caçando com investidas rápidas e agressivas.'),
    ('Besouro Predador de Oito Pontos', 'Anthia sexguttata', 'Besouro', 2.0, 4.00,  'Carabidae', 'Carnívoro', 0, 'Exibe marcações chamativas em seu corpo para alertar predadores sobre sua toxicidade.'),
    ('Besouro Terrestre Dourado', 'Carabus auratus', 'Besouro', 2.0, 2.70, 'Carabidae', 'Carnívoro', 0, 'Brilha com tons metálicos iridescentes quando exposto à luz direta do sol.'),

    ('Louva a Deus Orquídea', 'Hymenopus coronatus', 'Louva Deus', 0.7, 6.00, 'Hymenopodidae', 'Carnívoro', 1, 'Mimiciza perfeitamente uma flor de orquídea para atrair polinizadores inocentes direto para seu bote.'),
    ('Louva a Deus Fantasma', 'Phyllocrania paradoxa', 'Louva Deus', 0.8, 5.00, 'Hymenopodidae', 'Carnívoro', 1, 'Seu formato e cor lembram folhas secas retorcidas, confundindo se totalmente com o ambiente.'),
    ('Louva a Deus Flor Espinosa', 'Pseudocreobotra wahlbergii', 'Louva Deus', 0.8, 5.00, 'Hymenopodidae', 'Carnívoro', 1, 'Possui espinhos coloridos no escudo que simulam pétalas espinhosas para defesa e caça.'),
    ('Louva a Deus Flor Indiana', 'Creobroter gemmatus', 'Louva Deus', 0.7, 4.00, 'Hymenopodidae', 'Carnívoro', 1, 'Tem pequenas abas no abdômen que imitam pétalas de flores tropicais coloridas.'),
    ('Louva a Deus Flor Japonês', 'Acromantis japonica', 'Louva Deus', 0.6, 3.00, 'Hymenopodidae', 'Carnívoro', 1, 'Espécie de pequeno porte que se esconde em arbustos floridos à espera de moscas e abelhas.'),
    ('Louva a Deus Flor de Banda Branca', 'Theopropus elegans', 'Louva Deus', 0.7, 4.50, 'Hymenopodidae', 'Carnívoro', 1, 'Apresenta faixas brancas marcantes nas asas e pernas que quebram sua silhueta visual.'),
    ('Louva a Deus Flor Olho de Pintor', 'Creobroter pictipennis', 'Louva Deus', 0.7, 4.00, 'Hymenopodidae', 'Carnívoro', 1, 'Possui manchas circulares nas asas que lembram olhos grandes para assustar predadores.'),
    ('Louva a Deus Musgo Asiático', 'Majangella moultoni', 'Louva Deus', 0.6, 3.50, 'Hymenopodidae', 'Carnívoro', 1, 'Texturas corporais complexas simulam musgos e líquens de troncos úmidos.'),
    ('Louva a Deus Flor Espinosa de Ocellus', 'Pseudocreobotra ocellata', 'Louva Deus', 0.8, 4.80, 'Hymenopodidae', 'Carnívoro', 1, 'Exibe um ocelo chamativo na parte interna das patas raptoriais para desorientar presas.'),
    ('Louva a Deus Flor Anão de Formosa', 'Acromantis formosana', 'Louva Deus', 0.6, 3.20, 'Hymenopodidae', 'Carnívoro', 1, 'Ágil e minúsculo, habita a ramagem baixa de florestas subtropicais asiáticas.'),

    ('Louva a Deus Religioso', 'Mantis religiosa', 'Louva Deus', 0.8, 7.50, 'Mantidae', 'Carnívoro', 1, 'O clássico louva a deus europeu, famoso por sua postura de prece ao espreitar presas.'),
    ('Louva a Deus Folha Morta', 'Deroplatys desiccata', 'Louva Deus', 0.8, 8.00, 'Mantidae', 'Carnívoro', 1, 'Seu corpo achatado parece uma folha em decomposição completa, inclusive com manchas de fungo.'),
    ('Louva a Deus Escudo Maligno', 'Rhombodera basalis', 'Louva Deus', 1.2, 9.00, 'Mantidae', 'Carnívoro', 1, 'Possui um pronoto avantajado em forma de escudo largo com bordas afiadas.'),
    ('Louva a Deus Chines', 'Tenodera sinensis', 'Louva Deus', 0.9, 10.00, 'Mantidae', 'Carnívoro', 1, 'Uma das maiores espécies de louva a deus do mundo, muito usada no controle biológico de pragas.'),
    ('Louva a Deus Gigante Africano', 'Sphodromantis viridis', 'Louva Deus', 1.0, 9.50, 'Mantidae', 'Carnívoro', 1, 'De coloração verde viva vibrante, é extremamente voraz e consome presas do seu próprio tamanho.'),
    ('Louva a Deus Folha Morta Malaio', 'Deroplatys lobata', 'Louva Deus', 0.9, 7.00, 'Mantidae', 'Carnívoro', 1, 'Balança suavemente simulando uma folha ao vento para enganar insetos herbívoros.'),
    ('Louva a Deus Verde Australiano', 'Orthodera novaezealandiae', 'Louva Deus', 0.7, 4.50, 'Mantidae', 'Carnívoro', 1, 'Adapta se bem a climas secos e arbustos abertos na Oceania.'),
    ('Louva a Deus Escudo Giant', 'Rhombodera megaera', 'Louva Deus', 1.1, 11.00, 'Mantidae', 'Carnívoro', 1, 'Espécie robusta com garras poderosas capazes de segurar pequenos vertebrados.'),
    ('Louva a Deus Folha Trigonodera', 'Deroplatys trigonodera', 'Louva Deus', 0.8, 7.50, 'Mantidae', 'Carnívoro', 1, 'A cabeça e o corpo mimetizam galhos secos e folhas caídas do sub bosque.'),
    ('Louva a Deus Carolina', 'Stagmomantis carolina', 'Louva Deus', 0.8, 6.00, 'Mantidae', 'Carnívoro', 1, 'Espécie nativa americana conhecida por sua adaptabilidade a jardins residenciais.'),

    ('Louva a Deus Corredor de Ampanihy', 'Ampanihy ampanihyensis', 'Louva Deus', 0.7, 2.50, 'Hymenopodidae', 'Carnívoro', 0, 'Vive correndo pelo solo arenoso de regiões semiáridas de Madagascar.'),
    ('Louva a Deus Terrestre de Madagascar', 'Oxypiloidea murphyi', 'Louva Deus', 0.8, 3.00, 'Hymenopodidae', 'Carnívoro', 0, 'Perdeu a capacidade de voar, especializando se em correr velozmente entre pedras.'),
    ('Louva a Deus Anão Sem Asas', 'Pseudoxypilus heymonsi', 'Louva Deus', 0.6, 2.00, 'Hymenopodidae', 'Carnívoro', 0, 'Minúsculo e adaptado para a vida estritamente rastejante na serrapilheira.'),
    ('Louva a Deus Flor Sombrio', 'Junodia amoena', 'Louva Deus', 0.7, 2.80, 'Hymenopodidae', 'Carnívoro', 0, 'Possui coloração escura para se camuflar em solos vulcânicos e cascas de árvores.'),
    ('Louva a Deus Formiga da Tanzânia', 'Chlidonoptera lestoni', 'Louva Deus', 0.6, 2.20, 'Hymenopodidae', 'Carnívoro', 0, 'Mimetiza o comportamento e a aparência de formigas grandes para evitar predadores visuais.'),
    ('Louva a Deus Terrestre de Ankaratra', 'Oxypiloidea ankaratrae', 'Louva Deus', 0.7, 2.70, 'Hymenopodidae', 'Carnívoro', 0, 'Encontrado em altitudes elevadas nas montanhas frias de Madagascar.'),
    ('Louva a Deus Anão de Sumatra', 'Pseudoxypilus sumatranus', 'Louva Deus', 0.6, 2.10, 'Hymenopodidae', 'Carnívoro', 0, 'Habita o chão de florestas densas tropicais úmidas asiáticas.'),
    ('Louva a Deus Flor Sombrio de Natal', 'Junodia natalensis', 'Louva Deus', 0.7, 2.60, 'Hymenopodidae', 'Carnívoro', 0, 'Aparece em campos abertos e savanas do sul do continente africano.'),
    ('Louva a Deus Corredor de Toliara', 'Ampanihy toliaraensis', 'Louva Deus', 0.7, 2.40, 'Hymenopodidae', 'Carnívoro', 0, 'Sua velocidade de corrida terrestre surpreende pequenos insetos desatentos.'),
    ('Louva a Deus Flor da Nigéria', 'Chlidonoptera nigerica', 'Louva Deus', 0.6, 2.30, 'Hymenopodidae', 'Carnívoro', 0, 'Apresenta adaptações corporais voltadas para camuflagem em gramíneas altas.'),

    ('Louva a Deus Terrestre de Zululand', 'Ligaria laevivis', 'Louva Deus', 0.7, 2.50, 'Mantidae', 'Carnívoro', 0, 'Vive escondido sob gramíneas secas em regiões de savana africana.'),
    ('Louva a Deus Rastejante da Zâmbia', 'Ligaria brevis', 'Louva Deus', 0.6, 2.30, 'Mantidae', 'Carnívoro', 0, 'Sua locomoção lembra a de aranhas rastejantes para passar despercebido.'),
    ('Louva a Deus Corredor da Tanzânia', 'Entella delalandii', 'Louva Deus', 0.7, 3.00, 'Mantidae', 'Carnívoro', 0, 'Ativo durante o dia, caça pequenos gafanhotos correndo pelo solo.'),
    ('Louva a Deus Terrestre de Natal', 'Entella natalina', 'Louva Deus', 0.7, 2.80, 'Mantidae', 'Carnívoro', 0, 'Prefere solos argilosos e vegetação rasteira aberta.'),
    ('Louva a Deus Sombrio de Transvaal', 'Entella transvaalica', 'Louva Deus', 0.6, 2.60, 'Mantidae', 'Carnívoro', 0, 'Sua cutícula escura protege contra radiação solar intensa em áreas abertas.'),
    ('Louva a Deus Tronco do Congo', 'Ligaria deplanata', 'Louva Deus', 0.7, 2.70, 'Mantidae', 'Carnívoro', 0, 'Especialista em camuflagem vertical em troncos de árvores de savana.'),
    ('Louva a Deus Terrestre Anão', 'Paramantis nana', 'Louva Deus', 0.6, 3.20, 'Mantidae', 'Carnívoro', 0, 'Um dos menores louva a deus terrestres conhecidos na região.'),
    ('Louva a Deus Corredor da Somália', 'Entella somalica', 'Louva Deus', 0.7, 2.90, 'Mantidae', 'Carnívoro', 0, 'Resiste a longos períodos de seca em habitats áridos do leste africano.'),
    ('Louva a Deus Terrestre de Kenia', 'Ligaria kenyensis', 'Louva Deus', 0.8, 3.10, 'Mantidae', 'Carnívoro', 0, 'Possui pernas longas adaptadas para saltos curtos e corridas rápidas.'),
    ('Louva a Deus Rastejante da Etiópia', 'Entella ethiopica', 'Louva Deus', 0.7, 2.70, 'Mantidae', 'Carnívoro', 0, 'Habita regiões planalticas com vegetação escassa e arbustiva.'),

    ('Cupim de Madrone Alado', 'Zootermopsis angusticollis', 'Cupim', 10.0, 2.50, 'Termitidae', 'Herbívoro', 1, 'Formam revoadas nupciais massivas após as primeiras chuvas de primavera.'),
    ('Cupim Subterrâneo Alado', 'Coptotermes formosanus', 'Cupim', 12.0, 1.50, 'Termitidae', 'Herbívoro', 1, 'Reprodutores alados saem dos ninhos para fundar novas colônias subterrâneas.'),
    ('Cupim de Madeira Seca Alado', 'Cryptotermes brevis', 'Cupim', 8.0, 1.10, 'Termitidae', 'Herbívoro', 1, 'Invadem casas atraídos por luzes para iniciar colônias dentro de móveis de madeira.'),
    ('Cupim de Montículo Alado', 'Cornitermes cumulans', 'Cupim', 15.0, 1.80, 'Termitidae', 'Herbívoro', 1, 'Constróem torres de lama gigantescas antes de liberarem as castas reprodutivas.'),
    ('Cupim Catedrático Alado', 'Nasutitermes triodiae', 'Cupim', 20.0, 2.00, 'Termitidae', 'Herbívoro', 1, 'Suas colônias esculpem verdadeiras catedrais de terra rígida nas savanas.'),
    ('Cupim Arbóreo Alado', 'Nasutitermes corniger', 'Cupim', 10.0, 1.40, 'Termitidae', 'Herbívoro', 1, 'Formam ninhos esféricos escuros presos nos galhos altos das árvores.'),
    ('Cupim do Deserto Alado', 'Amitermes wheeleri', 'Cupim', 5.0, 1.20, 'Termitidae', 'Herbívoro', 1, 'Adaptados para voar em busca de umidade em ambientes áridos e secos.'),
    ('Cupim Gigante Africano Alado', 'Macrotermes goliath', 'Cupim', 15.0, 3.80, 'Termitidae', 'Herbívoro', 1, 'Os maiores reprodutores alados do mundo dos cupins.'),
    ('Cupim Cortador Alado', 'Syntermes dirus', 'Cupim', 12.00, 2.2, 'Termitidae', 'Herbívoro', 1, 'Cortam material vegetal para cultivar fungos subterrâneos essenciais à colônia.'),
    ('Cupim do Solo Alado', 'Reticulitermes flavipes', 'Cupim', 7.0, 1.00, 'Termitidae', 'Herbívoro', 1, 'Sua revoada marca o início de ciclos reprodutivos sincronizados com o clima.'),

    ('Cupim Soldado Nasuto', 'Nasutitermes exitiosus', 'Cupim', 3.0, 0.60, 'Termitidae', 'Herbívoro', 0, 'Possui uma cabeça em formato de bico que esguicha um líquido pegajoso de defesa contra formigas.'),
    ('Cupim Operário de Madeira', 'Cryptotermes cavifrons', 'Cupim', 2.0, 0.50, 'Termitidae', 'Herbívoro', 0, 'Trabalhadores cegos que passam a vida inteira escavando galerias internas na celulose.'),
    ('Cupim Soldado Mandibulado', 'Coptotermes gestroi', 'Cupim', 4.0, 0.8, 'Termitidae', 'Herbívoro', 0, 'Equipado com mandíbulas gigantescas em formato de foice para proteger o ninho.'),
    ('Cupim Operário Construtor', 'Cornitermes cumulans (Op)', 'Cupim', 2.5, 0.70, 'Termitidae', 'Herbívoro', 0, 'Responsáveis por erguer e reparar constantemente a estrutura externa do montículo.'),
    ('Cupim Soldado Gigante', 'Macrotermes bellicosus', 'Cupim', 5.0, 2.0, 'Termitidae', 'Herbívoro', 0, 'A casta de defesa mais forte da colônia, capaz de morder com grande força.'),
    ('Cupim Operário Coletores', 'Hodotermes mossambicus', 'Cupim', 2.0, 0.9, 'Termitidae', 'Herbívoro', 0, 'Saem à superfície protegidos por coberturas de terra para coletar capim e folhas.'),
    ('Cupim Soldado Catedrático', 'Nasutitermes triodiae (Sol)', 'Cupim', 3.5, 0.70, 'Termitidae', 'Herbívoro', 0, 'Organizam barreiras defensivas ferozes caso a parede do ninho seja perfurada.'),
    ('Cupim Operário Subterrâneo', 'Reticulitermes virginicus', 'Cupim', 2.0, 0.40, 'Termitidae', 'Herbívoro', 0, 'Constroem túneis blindados de lama para evitar a exposição à luz e ao sol.'),
    ('Cupim Soldado de Seringueira', 'Coptotermes curvignathus', 'Cupim', 4.0, 0.85, 'Termitidae', 'Herbívoro', 0, 'Defendem ativamente as galerias subterrâneas contra ataques de predadores vorazes.'),
    ('Cupim Soldado Cortador', 'Syntermes dirus (Sol)', 'Cupim', 4.5, 1.70, 'Termitidae', 'Herbívoro', 0, 'Possuem cabeças robustas e mandíbulas adaptadas para cortar defesas de inimigos.');

    UPDATE insetos SET foto_insetos = 'https://cdn.questlog.gg/crimson desert/assets/_sprites/itemicon_prefab_cd_m0006_00_rhinocerosbeetle_00_0001.webp' WHERE id_insetos = 1;

CREATE TABLE habitats (
    id_habitats INT AUTO_INCREMENT PRIMARY KEY,
    nome_habitats VARCHAR(50),
    clima_habitats VARCHAR(50),
    bioma_habitats VARCHAR(50),
    descricao_habitats TEXT
);
TRUNCATE Table insetos;

SELECT * FROM insetos;