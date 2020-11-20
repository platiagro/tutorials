author: Lucas Zanco Ladeira
summary: Descriptive Analysis
id: descriptive-analysis
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Feature Tools

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente realiza a análise descritiva de cada coluna do dataset fornecido. Para colunas numéricas, são calculadas as seguintes estatísticas: count, mean, std, min, max, além dos percentis. Para dados categóricos, por outro lado, calculam-se count, unique, top e freq. O valor de top representa a moda , enquanto freq é a frequência da moda.

### Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos ou categóricos.

### Parâmetros

Neste componente não possui parâmetros.

### Métricas de performance

Neste componente não é necessário avaliar a performance.

### Retorno esperado no experimento

1. Descrição dos dados gerados pelo componente.

![Tabela dos Dados](img/desc_table.png)


### Retorno esperado na implantação

Este componente não possui implantação.