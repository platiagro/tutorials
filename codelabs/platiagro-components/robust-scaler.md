author: Lucas Zanco Ladeira
summary: Robust Scaler
id: robust-scaler
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Feature Tools

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este é um componante que dimensiona atributos usando estatísticas robustas para outliers. Este Scaler remove a mediana e dimensiona os dados de acordo com o intervalo quantil (o padrão é Amplitude interquartil). Amplitude interquartil é o intervalo entre o 1º quartil (25º quantil) e o 3º quartil (75º quantil). Faz uso da implementação do Scikit-learn.
Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para montagem de modelo, pré-processamento de dados, seleção e avaliação de modelos, e muitos outros utilitários.

### Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos ou categóricos.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Centralização | `integer` | - | Centralizar os dados antes de dimensionar. Ocorre exceção quando usado com matrizes esparsas. |
| Dimensionamento | `integer` | - | Dimensionar os dados para um intervalo interquartil. |

### Métricas de performance

Neste componente não é necessário avaliar a performance.

### Retorno esperado no experimento

1. Descrição dos dados gerados pelo componente.

![Tabela dos Dados](img/table.png)


### Retorno esperado na implantação

Dados em uma escala distinta de acordo com os parâmetros de centralização e dimensionamento.