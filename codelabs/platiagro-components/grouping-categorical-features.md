author: Lucas Zanco Ladeira
summary: Agrupamento de Features Categóricas
id: grouping-categorical-features
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Feature Tools

## Visão Geral
Duration: 0:05:00

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente realiza o agrupamento de features categóricas com alta cardinalidade para serem implementadas por modelos de classificação. Neste componente são implementadas três estratégias de agrupamento (method):

- percent: o agrupamento é feito considerando um ponto de corte definido. Categorias abaixo desse limiar são agrupadas em uma categoria denominada "other";<br>
- top_n: apenas as n categorias mais frequentes são mantidas. As demais são agrupadas em uma categoria denominada "other";<br>
- kmeans: Para cada classe, são calculadas sua frequência relativa e porcentagem de casos positivos da variável resposta. Então, o algoritmo kmeans utiliza estas informações para o agrupamento.

### Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos ou categóricos.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Features categóricas para fazer agrupamento de classes  | `feature` | - | O agrupamento será feito considerando apenas as features categóricas selecionadas neste parâmetro. |
| Estratégia de agrupamento  | `feature` | percent, top_n, kmeans | Escolha do método que será utilizado para agrupar as classes das variávevis categóricas. |
| Ponto de corte para agrupamento | `float` | - | Classes com frequência relativa abaixo desse ponto de corte serão agrupadas em uma mesma classe. |
| Número de classes que deverão ser mantidas/criadas  | `integer` | - | Se a estratégia for kmeans, n representa o número de grupos criados pelo algoritmo, se for top_n, as n classes mais frequentes serão mantidas. |

### Métricas de performance

Neste componente não é necessário avaliar a performance.

### Retorno esperado no experimento

1. Descrição dos dados gerados pelo componente.

![Tabela dos Dados](img/table.png)


### Retorno esperado na implantação

Dados com colunas categóricas de alta cardinalidade agrupadas.