author: Matheus Gustavo Alves Sasso
summary: Feature Tools
id: feature-tools
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Feature Tools

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente utiliza [Feature Tools](https://www.featuretools.com/) para AutoFeaturing. É feita uma validação para retornar os dados que apresentarem o melhor, sejam eles os dados gerados pelo componente ou os dados iniciais.

### Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos ou categóricos.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Coluna de data  | `feature` | - | Coluna com data que será utilizada para extrair novas características.|
| Colunas para agrupar  | `feature` | - | Colunas que serão utilizadas para agrupar e extrair novas características.|

### Métricas de performance

Neste componente é utilizado o f1-score para avaliar cada dado distinto.

### Retorno esperado no experimento

1. Descrição dos dados gerados pelo componente.

![Tabela dos Dados](img/table.png)


### Retorno esperado na implantação

Dados com novas características criadas ou os dados iniciais se não for possível obter resultado melhor com essa estratégia.
