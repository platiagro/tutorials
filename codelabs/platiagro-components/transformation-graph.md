author: Lucas Zanco Ladeira
summary: Transformation Graph
id: transformation-graph
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Transformation Graph

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente utiliza um percurso em grafos para explorar possíveis soluções de transformações para a geração automática de features (AutoFeaturing). É feita uma validação para determinar as features mais importantes para o problema de interesse, sejam elas geradas automaticamente pelo componente ou providas como entrada.

### Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos ou categóricos.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Coluna de data  | `feature` | - | Coluna com data que será utilizada para extrair novas características.|
| Limite de busca  | `integer` | - | Parâmetro para aumentar ou diminuir a busca por soluções.|


### Métricas de performance

Neste componente é utilizado o f1-score para avaliar cada dado distinto.

### Retorno esperado no experimento

1. Descrição dos dados gerados pelo componente.

![Tabela dos Dados](img/table.png)


### Retorno esperado na implantação

Dados com novas características criadas ou os dados iniciais se não for possível obter resultado melhor com essa estratégia.
