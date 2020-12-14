author: Matheus Gustavo Alves Sasso
summary: Regressor Random Forest
id: random-forest-regressor
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Regressor Random Forest

## Visão Geral
Duration: 0:05:00

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente treina um modelo Random Forest para regressão usando [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html). <br>
Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para montagem de modelo, pré-processamento de dados, seleção e avaliação de modelos, e muitos outros utilitários.
### Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos ou categóricos.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Modo de seleção das features   | `string` |`"incluir"` `"remover"`| Se deseja informar quais features deseja incluir no modelo, selecione a opção 'incluir'. Caso deseje informar as features que não devem ser utilizadas, selecione 'remover'.  |
|Features para incluir/remover no modelo|`feature`| - |Seu modelo será feito considerando apenas as features selecionadas. Caso nada seja especificado, todas as features serão utilizadas|
|Features para fazer codificação ordinal|`feature`| - |Seu modelo utilizará a codificação ordinal para as features selecionadas. As demais features categóricas serão codificadas utilizando One-Hot-Encoding.|
|Estimadores|`integer`| - |Número de árvores na floresta.|
|Critério|`string`| `"mse"` `"mae"` |Função para medir a qualidade de uma divisão.|
|Profundidade|`integer`| - |O máximo de profundidade da árvore.|
|Features|`string`| `"auto"`  `"sqrt"` `"log2"`|O máximo de features a serem considerados ao procurar a melhor divisão.|


### Métricas de performance

1. Coeficiente de determinação (ou R²): Corresponde à correlação ao quadrado entre os valores de resultado observados e os valores previstos pelo modelo.

### Retorno esperado no experimento

1. Dados de teste:

<img src="img/regression/regression_data.png" width="400">

2. Distribuição do erro na regressão:

<img src="img/regression/regression_error.png" width="400">

3. Diferença do erro:

<img src="img/regression/prediction_diff.png" width="400">

4. Diferença ordenada do erro:

<img src="img/regression/sorted_prediction_diff.png" width="400">

5. Erro absoluto:

<img src="img/regression/absolute_error.png" width="400">

6. Probabilidade do erro:

<img src="img/regression/probability_error.png" width="400">

7. Erro por segmento:

<img src="img/regression/segment_error.png" width="400">

8. Tabela dos dados:

<img src="img/table.png" width="400">

### Retorno esperado na implantação

Tabela com os valores preditos para o atributo alvo.
