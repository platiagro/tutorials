author: Fabio Beranizo Fontes Lopes
summary: Criação de Tarefas
id: platiagro-tasks
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Criação de Tarefas

## Introdução
Duration: 0:00:30

Para criar uma tarefa, o usuário deverá clicar no menu Tarefas e depois no botão "+ Nova Tarefa".

![Página Tarefas](./img/tarefas.png)

**Descrição:** Na página "Tarefas”, será apresentada uma lista com todas as tarefas existentes. As informações das tarefas estarão divididas em quatro colunas: Nome da Tarefa, Descrição e Ação.
Nesta tela serão apresentadas as tarefas da plataforma e dos usuários.

## Seleção da nova tarefa
Duration: 0:01:30

A plataforma oferece uma série de exemplos para iniciar nova tarefa. Ela também oferece uma opção em branco.

![Página Nova Tarefa](./img/nova_tarefa.png)

**Descrição:** A janela “Nova Tarefa”, possui dois campos obrigatórios e um opcional. 
O primeiro campo obrigatório é o tipo do exemplo ou "template" inicial. A plataforma oferece grande quantidade de exemplos envolvendo classificação, regressão, seleção de "features" e muitos outros.
O segundo campo obrigatório é o nome da tarefa. O nome da tarefa será mostrado junto com os outros nomes então escolha um nome que facilite encontrar sua tarefa no futuro.
O campo opcional é uma descrição de sua tarefa. Se não precisar descrever ou registrar algum detalhe importante pode ficar em branco.
O botão "Cancelar" fecha esta janela e volta para a anterior sem gravar nada.
O botão "Criar Notebooks" abre nova aba no seu navegador com três divisões que serão comentadas na próxima seção deste tutorial. 

## Criação de Tarefas em Branco
Duration: 0:02:00

Após selecionar e preencher os campos necessários a plataforma abre nova aba com as divisões Experiment.jpynb e Deployment.jpynb.

![Página Nova Tarefa em Branco](./img/nova_tarefa_abas.png)

**Descrição:** A aba “Nova Tarefa”, possui algumas divisões criadas para orientar a elaboração da tarefa que serão comentados em outra seção.
Esta aba é criada com as divisões Experiment.jpynb e Deployment.jpynb. Também pode ser criada outra seção para Terminal onde podem ser executados comandos do Unix/Linux.
Nesta aba também podem ser visualizados os artefatos da tarefa e a localização destes artefatos no servidor. 
   Obs.1: o sinal de adição no menu superior cria mais uma célula para seus códigos
   Obs.2: a tesoura remove a célula selecionada
   Obs.3: o símbolo que parece uma tag HTML serve para inserir novo parâmetro ("input")

![Página Nova Tarefa input](./img/nova_tarefa_input.png)

**Descrição:** A janela “Add Parameter”, possui alguns campos sobre o novo parâmetro.
O campo "Variable name:" deve ser preenchido levando em consideração as regras para nomes de variáveis em Python.
O campos "Label:" 

O ícone parecido com uma pasta branca na parte de baixo da lateral esquerda serve para exibir os principais artefatos da tarefa: Experiment.jpynb e Deployment.jpynb

![Página Nova Tarefa em Branco open tabs](./img/nova_tarefa_open_tabs.png)


O ícone parecido com uma pasta preta na parte de cima da lateral esquerda serve para exibir um navegador de arquivos que mostra todos os artefatos da tarefa e sua localização no servidor

![Página Nova Tarefa em Branco file browser](./img/nova_tarefa_file_browser.png)


O sinal de adição no menu superior à direita da pasta preta serve para abrir o ícone para o terminar e outras funcionalidades 

![Página Nova Tarefa em Branco new launcher](./img/nova_tarefa_file_browser_new_launcher.png)


Neste exemplo foram usados alguns comandos para verificar em que local do servidor estão localizados os arquivos desta tarefa.

![Página Nova Tarefa em Branco Terminal](./img/nova_tarefa_file_browser_new_launcher.png)

O símbolo que parece uma pasta preta com sinal de adição serve para criar novas pastas na pasta atual.
O símbolo que parece uma seta para cima sobre uma barra serve para fazer upload de arquivos da máquina do usuário para a pasta do projeto. É importante ressaltar que esta pasta é temporária e os arquivos carregados nesta pasta deverão ser carregados novamente para futuras pastas deta tarefa.
A maneira de fazer com que os arquivos necessários sejam copiados automaticamente para esta pasta é via o comando wget.
Exemplo "! wget https://raw.githubusercontent.com/platiagro/.../large_harvest_ga.py"





Sugestões de pontos de melhorias e esclarecimentos para criação de novas tarefas em branco.

1) Na criação de parâmetros (input) falta explicação ou advertência sobre regras para nome de variável no padrão Python.
2) Precisa deixar claro que o conjunto de dados (dataset) a ser usado precisa ter método "read()", exemplo pandas.DataFrame
3) Recomendo esclarecer que precisa de CNTRL-ENTER para executar uma célula e que o triângulo no alto da tela (Run...) não faz nada.
4) Recomendo esclarecer que os inputs (parâmetros de entrada) são informados em janela lateral na plataforma
5) Recomendo esclarecer que se o código for grande é melhor criar classes e importar no componente com "from file import classes, métodos" 
6) Para importar classes e métodos no componente precisa carregar o arquivo .py na pasta do componente
7) Passos que usei para levar arquivos até a pasta do componente:
   a) encontrar a URL do arquivo de origem no github ou equivalente
   b) encontrar pasta destino do arquivo de testes (!pwd no Notebbok)
      Obs:1: Jupyter Notebook mostra nomes das pastas em uma aba
	  Obs.2: Jupyter Notebook em outra aba abre terminal (tela preta)
	  Obs.3: Tem um ícone do alto da tela que parece um monte de discos empilhados que deveria fazer isso. Procurei os arqs que enviei mas não encontrei	  
   c) executar wget na pasta de destino no terminal. Exemplo:
      wget https://github.com/platiagro/GA/blob/master/large_harvest/large_harvest/large_harvest_5_com_15.csv   
8) Mostrar resultados em duas formas:
   a) em forma de tabela usando dataframe Pandas. Renderiza tabela com matplotlib
   b) ???
   
8) Implantação (segundo Fábio, não é obrigatório)
   método predict() precisa de pelo menos 3 parâmetros (self, X: np.ndarray, feature_names: Iterable[str], meta: Dict = None) 
   Pode deixar só o Experient
   mas não pode usar plt.show()
   Precisa terminar com: 
      save_figure(figure=plt.gcf())
      plt.clf()

