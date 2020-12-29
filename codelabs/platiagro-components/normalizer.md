author: Lucas Zanco Ladeira
summary: Normalizador
id: normalizer
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Normalizador

## Função do componente

Este é um componente que normaliza as amostras individualmente de acordo com a norma da unidade. Faz uso da implementação do [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.Normalizer.html). Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para montagem de modelo, pré-processamento de dados, seleção e avaliação de modelos, e muitos outros utilitários.


## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. A tabela deve ser de um dos seguintes tipos: Comma-separated values (.csv) ou Excel (.xls, .xlsx).


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Atributo alvo**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>Esse valor será utilizado para garantir que o alvo não seja removido.</em>


- **Norma**: `string`, {`"l1"`, `"l2"`, `"max"`}, padrão: `"l2"`.<br>
<em>A norma a ser usada para normalizar cada amostra diferente de zero. Se a norma 'max' for usada, os valores serão redimensionados pelo máximo dos valores absolutos.</em>


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

Dados normalizados de acordo com a norma.