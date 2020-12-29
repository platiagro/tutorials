author: Gabriela Correia Vechini
summary: Detecção de Anomalias por Isolation Forest
id: isolation-forest-clustering
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Detecção de Anomalias por Isolation Forest

## Função do componente

Este é um componente que treina um modelo Isolation Forest usando [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html). <br>
Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para ajustes de modelos, pré-processamento de dados, seleção e avaliação de modelos, além de outras funcionalidades.


## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. Os valores de data devem ser removidos ou selecionados para codificação ordinal para que o modelo consiga processá-los. A tabela deve ser de um dos seguintes tipos: Comma-separated values (.csv) ou Excel (.xls, .xlsx).


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Quantidade máxima de características**: `float`, padrão: `"auto"`.<br>
<em>O número de características máximo a serem retiradas dos dados para treinar cada estimador de base.</em>


- **Contaminação**: `float`, padrão: `0.1`.<br>
<em>A quantidade de contaminação do conjunto de dados, ou seja, a proporção de outliers no conjunto de dados.</em>


- **Quantidade máxima de amostras**: `float`, padrão: `1.0`.<br>
<em>O número de amostras máximo a serem retiradas dos dados para treinar cada estimador de base.</em>


- **Gráficos a serem ignorados**: `string`, {`"Dados de Teste"`, `"Tabelas de Dados"`}.<br>
<em>Considerando a quantidade de gráficos que são retornados ao executar a experimentação, o usuário pode selecionar quais ele não deseja visualizar.</em>


## Métricas de performance

As métricas de performance tem o propósito de ajudar o usuário a avaliar a performance do modelo. Essas métricas variam de acordo com o tipo de problema, tal como: classificação, regressão, agrupamento, entre outros.

1. Pontuação de anomalia: considerando que o modelo faz a predição da anomalia, ela mesma é utilizada para avaliar o modelo.


## Retorno esperado na experimentação

As métricas de performance tem o propósito de ajudar o usuário a avaliar a performance do modelo. Essas métricas variam de acordo com o tipo de problema, tal como: classificação, regressão, agrupamento, entre outros.

1. Dados de teste<br> <em> Apresenta a distribuição dos dados de teste considerando as duas características mais relevantes para o modelo.</em>
<img src="img/clustering/clustering_data_isolation.png" width="400">

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

Tabela com os valores preditos de anomalia.