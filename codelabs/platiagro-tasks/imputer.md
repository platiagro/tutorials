author: Lucas Zanco Ladeira
summary: Imputação de Valores Faltantes
id: imputer
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Imputação de Valores Faltantes

## Função do componente

Este é um componente para imputação de valores faltantes usando média, mediana ou mais frequente. Faz uso da implementação do [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.impute.SimpleImputer.html#sklearn.impute.SimpleImputer). Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para montagem de modelo, pré-processamento de dados, seleção e avaliação de modelos, e muitos outros utilitários.


## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. A tabela deve ser de um dos seguintes tipos: Comma-separated values (.csv) ou Excel (.xls, .xlsx).


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Atributo alvo**: `feature`.<br>
<em>Esse valor será utilizado para garantir que o alvo não seja removido.</em>


- **Estratégia de atribuição de valores para colunas numéricas**: `string`, {`"mean"`, `"median"`, `"most_frequent"`=, `"constant"`}, padrão: `"mean"`.<br>
<em>Os valores 'mean' e 'median' são utilizados apenas para atributos numéricos,'most_frequent' é para atributos numéricos e categóricos e 'constant' substituirá os valores ausentes por fill_value.</em>

- **Estratégia de atribuição de valores para colunas categóricas**: `string`, {`"most_frequent"`, `"constant"`}, padrão: `"most_frequent"`.<br>
<em>O valor 'most_frequent' é para atributos numéricos e categóricos e 'constant' substituirá os valores ausentes por fill_value.</em>


- **Valor de preenchimento para colunas numéricas**: `integer`, padrão: `0`.<br>
<em>Valor a ser preenchido no lugar de valores nulos (utilizado apenas com estratégia 'constant').</em>


- **Valor de preenchimento para colunas categóricas**: `string`, padrão: `""`.<br>
<em>Valor a ser preenchido no lugar de valores nulos (utilizado apenas com estratégia 'constant').</em>


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

Dados sem valores nulos.