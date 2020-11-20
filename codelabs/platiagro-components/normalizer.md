author: Lucas Zanco Ladeira
summary: Normalizador
id: normalizer
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Feature Tools

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este é um componente que normaliza as amostras individualmente de acordo com a norma da unidade. Faz uso da implementação do Scikit-learn.
Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para montagem de modelo, pré-processamento de dados, seleção e avaliação de modelos, e muitos outros utilitários.

### Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos ou categóricos.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Norma  | `string` | l1, l2, max | A norma a ser usada para normalizar cada amostra diferente de zero. Se a norma 'max' for usada, os valores serão redimensionados pelo máximo dos valores absolutos. |

### Métricas de performance

Neste componente não é necessário avaliar a performance.

### Retorno esperado no experimento

1. Descrição dos dados gerados pelo componente.

![Tabela dos Dados](img/table.png)


### Retorno esperado na implantação

Dados normalizados de acordo com a norma.