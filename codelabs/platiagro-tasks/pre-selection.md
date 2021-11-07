author: Lucas Zanco Ladeira
summary: Pré Seleção
id: pre-selection
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Pré Seleção

## Função do componente

Este componente remove atributos de acordo com os seguintes critérios:

- Variabilidade próximo de 0;<br>
- Alta correlação entre si;<br>
- Lida com NaN e valores faltantes.


## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. A tabela deve ser de um dos seguintes tipos: Comma-separated values (.csv) ou Excel (.xls, .xlsx).


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Atributo alvo**: `feature`.<br>
<em>Esse valor será utilizado para garantir que o alvo não seja removido.</em>


- **Limiar de correlação**: `float`, padrão: `0.9`.<br>
<em>Atributos com correlação maior que o limiar serão removidos.</em>


- **Limiar de threshold**: `float`, padrão: `0.0`.<br>
Atributos com variância menor que o limiar serão removidos.</em>


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

Dados com as colunas filtradas de acordo com variabilidade, alta correlação, e valores faltantes.