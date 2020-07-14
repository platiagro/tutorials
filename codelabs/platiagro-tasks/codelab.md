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

**Descrição:** Na página "Tarefas”, será apresentada uma lista com todas as tarefas existentes. As informações das tarefas estarão divididas em três colunas: Nome da Tarefa, Descrição e Ação.
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
Duration: 0:04:00

Após selecionar e preencher os campos necessários a plataforma abre nova aba com as divisões Experiment.jpynb e Deployment.jpynb.

![Nova Tarefa em Branco](./img/nova_tarefa_abas.png)

**Descrição:** A aba “Nova Tarefa”, possui algumas divisões criadas para orientar a elaboração da tarefa que serão comentados em outra seção.
Esta aba é criada com as divisões Experiment.jpynb e Deployment.jpynb. Também pode ser criada outra seção para Terminal onde podem ser executados comandos do Unix/Linux.
Nesta aba também podem ser visualizados os artefatos da tarefa e a localização destes artefatos no servidor. 
   Obs.1: o sinal de adição no menu superior cria mais uma célula para seus códigos
   Obs.2: a tesoura remove a célula selecionada
   Obs.3: use CONTRL-ENTER para executar a célula selecionada porque o triângulo no alto da tela (Run...) não faz nada
   Obs.4: o símbolo que parece com </> serve para inserir novo parâmetro ("input")
   
![Input](./img/nova_tarefa_input.png)

**Descrição:** A janela “Add Parameter”, possui alguns campos sobre o novo parâmetro.
O campo "Variable name" deve ser preenchido levando em consideração as regras para nomes de variáveis em Python.
O campo "Label" deve ser preenchido com o nome que vai aparecer na área de parâmetros da plataforma que abre em uma aba lateral.

![Dataset](./img/dataset.png)

É importante ressaltar que um dataset deve ter o método read(), como um dataframe Pandas.


![Experiment](./img/input_experiment.png)

Neste exemplo foi criado um parâmetro (input) que aparece no Experiment.jpynb como "var_name" e aparece na aba lateral com a identificação "var_label". 

![Aba lateral](./img/input_aba_lateral.png)


O ícone parecido com uma pasta branca na parte de baixo da lateral esquerda serve para exibir os principais artefatos da tarefa: Experiment.jpynb e Deployment.jpynb

![open tabs](./img/nova_tarefa_open_tabs.png)


O ícone parecido com uma pasta preta na parte de cima da lateral esquerda serve para exibir um navegador de arquivos que mostra todos os artefatos da tarefa e sua localização no servidor

![file browser](./img/nova_tarefa_file_browser.png)


O sinal de adição no menu superior à direita da pasta preta serve para abrir o ícone para o "Terminal de comandos" e outras funcionalidades 

![new launcher](./img/nova_tarefa_file_browser_new_launcher.png)


## Mostrar Terminal de Comandos Unix/Linux
Duration: 0:01:00

Neste exemplo foram usados alguns comandos para verificar em que local do servidor estão localizados os arquivos desta tarefa.

![Terminal](./img/nova_tarefa_file_browser_new_launcher_terminal.png)

O símbolo que parece uma pasta preta com sinal de adição serve para criar novas pastas na pasta atual.
O símbolo que parece uma seta para cima sobre uma barra serve para fazer upload de arquivos da máquina do usuário para a pasta do projeto. É importante ressaltar que esta pasta é temporária e os arquivos carregados nesta pasta deverão ser carregados novamente para futuras pastas deta tarefa.
A maneira de fazer com que os arquivos necessários sejam copiados automaticamente para esta pasta é via o comando wget.
Exemplo "wget https://raw.githubusercontent.com/platiagro/.../nome_arquivo.csv"


## Importar Classes e Métodos
Duration: 0:01:00

Se o código for grande é melhor criar classes e importar no componente com "from file import classes, métodos" 
Para importar classes e métodos no componente primeiro precisa carregar o arquivo .py para a pasta do componente

Passos para levar arquivos até a pasta do componente:
   a) encontrar a URL do arquivo de origem no github ou equivalente
   b) executar wget em uma céula do Experiment. Exemplo:
      !wget https://github.com/platiagro/.../nome_arquivo.py

![Importar classes](./img/importar_classes.png)

	  
## Mostrar Resultados Aba Lateral
Duration: 0:01:00
	  
Mostrar resultados em forma de tabela renderizada usando dataframe Pandas e Matplotlib.
   Obs.1: Não pode usar plt.show() porque ele limpa o objeto e depois não aparece nada na aba lateral de resultados
          Precisa terminar com: 
             save_figure(figure=plt.gcf())
             plt.clf()

![Mostrar resultados codigo](./img/mostrar_resultados_codigo.png)

Se tudo correu bem então a tabela renderizada aparece nesta aba lateral da plataforma.

![Mostrar resultados aba lateral](./img/mostrar_resultados_aba_lateral.png)

## Aba Deployment
Duration: 0:02:00

![Identificar classe](./img/deployment_identif.png)

![Declarar classe](./img/deployment_declarar_classe.png)

![Teste Rest](./img/deployment_teste_rest.png)

![teste json](./img/deployment_json_teste.png)

![Teste Resultado](./img/deployment_teste_resultado.png)


## Implantação e logs
Duration: 0:02:00

![Teste Resultado](./img/experimento_implantado.png)

![Teste Resultado](./img/experimento_implantado_logs.png)

![Teste Resultado](./img/experimento_implantado_testado.png)

![Teste Resultado](./img/experimento_para_executar.png)

![Teste Resultado](./img/experimento_para_implantar.png)

