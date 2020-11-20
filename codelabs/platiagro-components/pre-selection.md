author: Lucas Zanco Ladeira
summary: Pré Seleção
id: pre-selection
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Feature Tools

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente remove atributos de acordo com os seguintes critérios:

- Variabilidade próximo de 0;<br>
- Alta correlação entre si;<br>
- Lida com NaN e valores faltantes.

### Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos ou categóricos.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Limiar de correlação  | `float` | - | Atributos com correlação maior que o limiar serão removidos. |
| Limiar de threshold  | `float` | - | Atributos com variância menor que o limiar serão removidos. |

### Métricas de performance

Neste componente não é necessário avaliar a performance.

### Retorno esperado no experimento

1. Descrição dos dados gerados pelo componente.

![Tabela dos Dados](img/table.png)


### Retorno esperado na implantação

Dados com as colunas filtradas de acordo com variabilidade, alta correlação, e valores faltantes.