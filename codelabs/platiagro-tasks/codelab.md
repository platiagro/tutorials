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

Para criar uma tarefa, o usuário deverá clicar no menu Tarefas e depois no botão <img src="img/icone_nova_tarefa.png" alt=" + Nova Tarefa " />

![Página Tarefas](./img/tarefas.png)

**Descrição:** Na página "Tarefas”, será apresentada uma lista com todas as tarefas existentes. As informações das tarefas estarão divididas em três colunas: Nome da Tarefa, Descrição e Ação.
Nesta tela serão apresentadas as tarefas da plataforma e dos usuários.

## Seleção da nova tarefa
Duration: 0:01:30

A plataforma oferece uma série de exemplos para iniciar nova tarefa. Ela também oferece uma opção em branco.

![Página Nova Tarefa](./img/nova_tarefa.png)

**Descrição:** A janela “Nova Tarefa”, possui dois campos obrigatórios (assinalados com asterisco) e um opcional. 
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
   Obs.1: o sinal de adição <img src="img/icone_experimento_adicao.png" alt=" insert a cell " /> no menu superior cria mais uma célula para seus códigos
   Obs.2: o ícone com a tesoura <img src="img/icone_experimento_tesoura.png" alt=" cut a cell " /> remove a célula selecionada
   Obs.3: use CONTRL-ENTER para executar a célula selecionada porque o triângulo no alto da tela (Run...) não faz nada
   Obs.4: o ícone <img src="img/icone_experimento_input.png" alt=" add parameter " /> serve para inserir novo parâmetro ("input")
   
![Input](./img/nova_tarefa_input.png)

**Descrição:** A janela “Add Parameter”, possui alguns campos sobre o novo parâmetro.
O campo "Variable name" deve ser preenchido levando em consideração as regras para nomes de variáveis em Python.
O campo "Label" deve ser preenchido com o nome que vai aparecer na área de parâmetros da plataforma que abre em uma aba lateral.

![Dataset](./img/dataset.png)

Na seção **Declaração de parâmetros e hiperparâmetros** é importante ressaltar que um dataset deve ter o método read(), como um dataframe Pandas.


![Experiment](./img/input_experiment.png)

Neste exemplo foi criado um parâmetro (input) que aparece no Experiment.jpynb como "var_name" e aparece na aba lateral com a identificação "var_label". 

![Aba lateral](./img/input_aba_lateral.png)


O ícone <img src="img/icone_experimento_pasta_branca.png" alt=" open tabs " /> na parte de baixo da lateral esquerda da tela serve para exibir os principais artefatos da tarefa: Experiment.jpynb e Deployment.jpynb

![Open tabs](./img/nova_tarefa_open_tabs.png)


## Mostrar Terminal de Comandos Unix/Linux
Duration: 0:01:00


O ícone <img src="img/icone_experimento_pasta_preta.png" alt=" file browser " /> na parte de cima da lateral esquerda serve para exibir um navegador de arquivos que mostra todos os artefatos da tarefa e sua localização no servidor

![File browser](./img/nova_tarefa_file_browser.png)


O ícone com sinal de adição <img src="img/icone_experimento_new_launcher.png" alt=" new launcher " /> no menu superior perto da pasta preta serve para abrir o ícone para o "Terminal de comandos" e outras funcionalidades 

![New launcher](./img/nova_tarefa_file_browser_new_launcher.png)

Neste exemplo foram usados alguns comandos para verificar em que local do servidor estão localizados os arquivos desta tarefa.

![Terminal](./img/nova_tarefa_file_browser_new_launcher_terminal.png)

O ícone <img src="img/icone_experimento_pasta_preta_adicao.png" alt=" new folder " /> serve para criar novas pastas na pasta atual.
O ícone <img src="img/icone_experimento_upload_files.png" alt=" upload files " />  serve para fazer upload de arquivos da máquina do usuário para a pasta do projeto. É importante ressaltar que esta pasta é temporária e os arquivos carregados nesta pasta deverão ser carregados novamente para futuras pastas deta tarefa.
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

A aba **Deployment** armazena o código necessário para a plataforma executar no servidor o modelo que foi criado na aba Experiment. 
O modelo deve ser importado e encapsulado na classe Model então esta classe precisa implementar o método "predict()".
A primeira seção desta aba serve para **identificação** da atividade, do autor e de seus principais objetivos.
Recomenda-se que sejam registrados o nome do autor e a data de criação.

![Identificar classe](./img/deployment_identif.png)

A segunda seção **define a classe Model** que precisa implementar o método "predict()" para ser executado pelo servidor.
Neste exemplo o método "predict()" apenas mostra o parâmetro recebido e retorna este parâmetro para a interface gráfica.
As capturas de tela da interface gráfica serão mostradas no final deste tutorial porém a aba Deploymente também pode ser usada para conferir o resultado.

![Declarar classe](./img/deployment_declarac_classe.png)

Note que a classe modelo deve retornar uma lista então talvez seja necessário acrescentar o método class_names().
Outro ajuste importante para modelos regressores é o retorno convertido para um array numpy.

![Definir predict](./img/deployment_predict.png)


A seção **Teste do serviço REST** orienta como o pesquisador pode testar o resultado da execução de seu modelo.
Ela ajuda a criar um arquivo com um objeto json (JavaScipt Object Notation) para ser enviado ao seu modelo via protocolo REST.

![Teste Rest](./img/deployment_teste_rest.png)

É importante ressaltar que o valor enviado ao modelo será sorteado de um intervalo que deve ser especificado na área **"range"** do objeto json.

![Teste json](./img/deployment_json_teste.png)

Se o modelo for do tipo Regressor então o arquivo json precisa ser ajustado.
Neste exemplo o modelo espera um arquio com duas colunas contendo valores numéricos.
Por isto a coluna "p0" tem o range [5.0, 5.0] e a coluna "p1" tem o range [6.0, 6.0], assim a plataforma vai sortear um valor entre 5 e 5 para a primeira coluna e um valor entre 6 e 6 para a segunda coluna.

![Arquivo json para teste de regressor](./img/deployment_json_exemplo.png)


**test_deployment("contact.json")**
A última parte desta aba se encarrega de enviar o objeto json que foi gravado no arquivo contact.json usando o método test_deployment("contact.json")

![Teste Resultado](./img/deployment_teste_resultado.png)

**Resultado do teste na aba Deployment**
O objeto json é exibido para o pesquisador conferir se os resultados estão de acordo com o esperado.


## Implantação e logs
Duration: 0:02:00

Cada projeto pode ter vários experimentos, porém apenas um deles será implantado.
Espera-se que os experimentos sejam criados e explorados até que o pesquisador se decida pela implantação de um deles para execução em tempo real no servidor.

![Experimento executar](./img/experimento_para_executar.png)

Depois de criada a atividade desejada, ela deve ser **executada** para permitir sua implantação.
Se ocorrer algum erro durante sua execução o botão de implantação fica bloqueado.

![Experimento implantar](./img/experimento_para_implantar.png)

O botão **Implantação** somente será liberado após uma execução completa da atividade sem nenhum erro.
É importante lembrar que este botão será liberado somente uma vez para cada projeto.
Caso dois ou mais experimentos apresentem bons resultados então o pesquisador deve considerar a possibilidade de criar novos projetos para eles.

![Experimento implantado](./img/experimento_implantado.png)

A janela de **Experimentos Implantados** mostra os experimentos implantados pelo pesquisador.
A coluna "Status" apresenta a situação atual do experimento. O experimento deve ter o status "Succeeded" para poder ser executado.
A coluna "Nome" apresenta o nome do experimento implantado. 
   É importante ressaltar que este nome é composto pelo nome do projeto seguido pelo nome do experimento selecionado.
A coluna "URL" contém a url do experimento implantado. Ela pode ser usada em um terminal de comandos Unix/Linux.
A coluna "Data de Criação" contém a data e a hora da implantação do experimento.
A coluna "Ação" contém três opções:
   **"Deletar"** (apagar) o experimento
   **"Testar Inferência"** para executar o experimento enviando um arquivo CSV para o modelo.
   **"Logs"** para visualizar a mensagens do modelo em execução.
   
A ação **Testar Inferência** apresenta em uma janela o resultado recebido da execução do modelo no servidor.
O título desta janela é **Predições**

![Experimento testado](./img/experimento_implantado_testado.png)

A ação **Logs** exibe uma janela para logs. 
Como a quantidade de mensagens de log costuma ser grande esta janela possui paginação.
Note que as mensagens mais recentes ficam no fim da lista.  

![Experimento log](./img/experimento_implantado_logs.png)
