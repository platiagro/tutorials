author: Lucas Zanco Ladeira
summary: Agrupamento de Features Categóricas
id: grouping-categorical-features
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Agrupamento de Features Categóricas

## Função do componente

Este componente realiza o agrupamento de features categóricas com alta cardinalidade para serem implementadas por modelos de classificação. Neste componente são implementadas três estratégias de agrupamento (method):

- percent: o agrupamento é feito considerando um ponto de corte definido. Categorias abaixo desse limiar são agrupadas em uma categoria denominada "other";<br>
- top_n: apenas as n categorias mais frequentes são mantidas. As demais são agrupadas em uma categoria denominada "other";<br>
- kmeans: Para cada classe, são calculadas sua frequência relativa e porcentagem de casos positivos da variável resposta. Então, o algoritmo kmeans utiliza estas informações para o agrupamento.


## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. A tabela deve ser de um dos seguintes tipos: Comma-separated values (.csv) ou Excel (.xls, .xlsx).


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Atributo alvo**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>Esse valor será utilizado para garantir que o alvo não seja removido.</em>


- **Features categóricas para fazer agrupamento de classes**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>O agrupamento será feito considerando apenas as features categóricas selecionadas neste parâmetro.</em>


- **Estratégia de agrupamento**: `string`, {`"percent"`, `"top_n"`, `"kmeans"`}, padrão: `"kmeans"`.<br>
<em>O agrupamento será feito considerando apenas as features categóricas selecionadas neste parâmetro.</em>


- **Ponto de corte para agrupamento**: `float`, padrão: `0.1`.<br>
<em>Classes com frequência relativa abaixo desse ponto de corte serão agrupadas em uma mesma classe.</em>


- **Número de classes que deverão ser mantidas/criadas**: `integer`, padrão: `10`.<br>
<em>Se a estratégia for kmeans, n representa o número de grupos criados pelo algoritmo, se for top_n, as n classes mais frequentes serão mantidas.</em>


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


### Retorno esperado na implantação

Dados com colunas categóricas de alta cardinalidade agrupadas.