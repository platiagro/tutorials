 author: Martina
summary: PlatIAgro Tutorial
id: tutorial-experimento-platiagro
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/platiagro

# Criar Fluxo de Experimento

## Introdução
Duration: 0:01:00

Após criar um novo projeto, será apresentado ao usuário dois tipos de fluxo:

* Experimentação: para o usuário experimentar fluxos de tarefas, seja para o treinamento de modelos ou visualização de resultados. Após experimentar vários fluxos é possível decidir quais deles seguirão para o módulo de pré-implantação.
* Pré-Implantação: o usuário poderá criar tarefas previamente preparadas e disponibilizadas no "armazém de tarefas", e implantar o fluxo escolhido.



## Iniciando um Experimento
Duration: 0:05:00

Para iniciar um fluxo de Experimento, clicar no botão "Novo Fluxo" na página do projeto.

### Criar um fluxo de Experimentação

* Na tela do novo projeto, o usuário irá selecionar o botão “Novo fluxo”;
* E escolher a opção: Experimentação;
* E selecionar uma tarefa no menu Armazém de Tarefas - Conjunto de Dados;
* Essa tarefa será adicionada ao fluxo;
* O usuário irá selecionar a tarefa, e selecionar o botão “Importar” para importar os dados de entrada da tarefa;
* Quando selecionar “Visualizar Dados”, uma nova tela será aberta apresentando os atributos e observações do arquivo
Selecionando o botão “Importar” o usuário poderá importar um arquivo txt;
* Na aba “Atributo” o usuário poderá selecionar o atributo alvo do seu arquivo;
* Selecionando o botão “Fazer download”, será feito um download de um arquivo com os dados apresentados nessa tela
Ao voltar para o fluxo, selecionar uma tarefa em: Armazém de tarefas - Engenharia de dados;
* E selecionar outra tarefa em: Armazém de tarefas - Treinamento;
* Depois que todas as tarefas estiverem no fluxo, o usuário deverá ligar  as tarefas uma a uma;
* Ao selecionar o botão “Executar”, a seguinte mensagem será exibida: “Executando o fluxo”;
* Se houver erro de execução em alguma tarefa, o usuário deve selecionar a tarefa que estará destacada em vermelho para visualizar o erro;
* O erro de execução deve ser exibido no campo “Erro na execução”;
* Quando a execução do fluxo for concluída com sucesso, as tarefas ficaram destacadas em verde;
* O usuário poderá visualizar o resultado da execução ao selecionar a tarefa e selecionar o botão “Visualizar Resultado”;
* Na tela de resultados, o usuário poderá fazer o download do conjunto de dados e dos parâmetros apresentados;
* O usuário poderá visualizar o resultado da execução ao selecionar a tarefa e selecionar o botão “Visualizar Resultado”;
* Na tela de resultados, o usuário poderá fazer o download do conjunto de dados e dos parâmetros apresentados;



## Salvar Template do Expeimento
Duration: 0:02:00

Para salvar o template do fluxo de experimento criado, basta selecionar o botão "Salvar Template".

### Salvar Template

* Após executar um fluxo de tarefa, quando o usuário selecionar o botão “Salvar Template”, um modal será aberto para nomear o template;
* Ao confirmar a operação, o template será salvo e poderá ser consultado em “Templates de Fluxos”;
* A operação pode ser executada mesmo antes da execução do fluxo de tarefas



## Excluir Experimento
Duration: 0:02:00

Para excluir o experimento, o usuário pode clicar no botão "Excluir" na tela de experimento ou excluir o projeto do experimento.

### Excluir Fluxo de Experimento

* Estando na página “Meus Projetos”, o usuário irá selecionar um projeto da lista;
* Na página do projeto será apresentado o fluxo de Experimentação;
* Acima do fluxo de tarefa, clicar no botão “Excluir” - representado pelo ícone Lixeira;

![Página Meus Projetos](./img/Excluir.png)

* Uma pop-up com a seguinte mensagem será apresentada: “Você tem certeza que deseja excluir esse Experimento?”;
* Ao confirmar o fluxo de experimentação será excluído.
