author: Lucas Zanco Ladeira
summary: Transformation Graph
id: transformation-graph
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Transformation Graph

## Função do componente

Este componente utiliza um percurso em grafos para explorar possíveis soluções de transformações para a geração automática de features (AutoFeaturing). É feita uma validação para determinar as features mais importantes para o problema de interesse, sejam elas geradas automaticamente pelo componente ou providas como entrada.


## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. A tabela deve ser de um dos seguintes tipos: Comma-separated values (.csv) ou Excel (.xls, .xlsx).


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Atributo alvo**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>Esse valor será utilizado para garantir que o alvo não seja removido.</em>


- **Coluna de data**: `feature`.<br>
<em>Coluna com data que será utilizada para extrair novas características.</em>


- **Colunas para agrupar**: `feature`.<br>
<em>Colunas que serão utilizadas para agrupar e extrair novas características.</em>


- **Limite de busca**: `integer`, padrão: `20` .<br>
<em>Parâmetro para aumentar ou diminuir a busca por soluções de acordo com as restrições de recursos computacionais.</em>


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

Dados com novas características criadas ou os dados iniciais se não for possível obter resultado melhor com essa estratégia.
