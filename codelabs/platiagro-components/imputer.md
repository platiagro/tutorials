author: Lucas Zanco Ladeira
summary: Imputação de Valores Faltantes
id: imputer
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Feature Tools

## Visão Geral
Duration: 0:05:00

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este é um componente para imputação de valores faltantes usando média, mediana ou mais frequente. Faz uso da implementação do Scikit-learn.
Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para montagem de modelo, pré-processamento de dados, seleção e avaliação de modelos, e muitos outros utilitários.

### Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos ou categóricos.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Estratégia de atribuição de valores para colunas numéricas  | `string` | mean, median, most_frequent, constant | 'mean' é apenas para atributos numéricos, 'median' é apenas para atributos numéricos, 'most_frequent' é para atributos numéricos e categóricos e 'constant' substituirá os valores ausentes por fill_value. |
| Estratégia de atribuição de valores para colunas categóricas  | `string` | most_frequent, constant | 'most_frequent' é para atributos numéricos e categóricos e 'constant' substituirá os valores ausentes por fill_value. |
| Valor de preenchimento para colunas numéricas | `integer` | - | Valor a ser preenchido no lugar de valores nulos (utilizado apenas com estratégia 'constant'). |
| Valor de preenchimento para colunas categóricas  | `string` | - | Valor a ser preenchido no lugar de valores nulos (utilizado apenas com estratégia 'constant'). |

### Métricas de performance

Neste componente não é necessário avaliar a performance.

### Retorno esperado no experimento

1. Descrição dos dados gerados pelo componente.

![Tabela dos Dados](img/table.png)


### Retorno esperado na implantação

Dados sem valores nulos.