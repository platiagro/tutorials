author: Lucas Zanco Ladeira
summary: Robust Scaler
id: robust-scaler
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Robust Scaler

## Função do componente

Este é um componante que dimensiona atributos usando estatísticas robustas para outliers. Este Scaler remove a mediana e dimensiona os dados de acordo com o intervalo quantil (o padrão é Amplitude interquartil). Amplitude interquartil é o intervalo entre o 1º quartil (25º quantil) e o 3º quartil (75º quantil). Faz uso da implementação do [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.RobustScaler.html). Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para montagem de modelo, pré-processamento de dados, seleção e avaliação de modelos, e muitos outros utilitários.


## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. A tabela deve ser de um dos seguintes tipos: Comma-separated values (.csv) ou Excel (.xls, .xlsx).


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Atributo alvo**: `feature`.<br>
<em>Esse valor será utilizado para garantir que o alvo não seja removido.</em>


- **Centralização**: `boolean`, {`True`, `False`}, padrão: `True`.<br>
<em>Centralizar os dados antes de dimensionar. Ocorre exceção quando usado com matrizes esparsas.</em>


- **Dimensionamento**: `boolean`, {`True`, `False`}, padrão: `True`.<br>
<em>Dimensionar os dados para um intervalo interquartil.</em>


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

Dados em uma escala distinta de acordo com os parâmetros de centralização e dimensionamento.