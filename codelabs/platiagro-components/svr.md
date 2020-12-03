author: Gabriela Correia Vechini
summary: Regressor SVM
id: svr
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Regressor SVM

## Visão Geral
Duration: 0:05:00

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente treina um modelo Support Vector Regression usando [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVR.html). <br>
Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê diversas ferramentas para montagem de modelo, pré-processamento de dados, seleção e avaliação de modelos, e muitos outros utilitários.

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
|Kernel|`string`| `"linear"` `"poly"` `"rbf"` `"sigmoid"` `"precomputed"`|Especifica o tipo de kernel a ser usado no algoritmo.|
|Grau|`number`| - |Grau da função polinomial do kernel ('poly'). Ignorado por outros kernels.|
|Gama|`string`| `"scale"` `"auto"`|Coeficiente de kernel para 'rbf', 'poly' e 'sigmoid'.|
|Regularização|`number`| - |A força da regularização é inversamente proporcional a C. Deve ser positivo. Penalidade é l2².|
|Iteração|`number`| - |Limite fixo nas iterações no solver, ou -1 sem limite.|

### Métricas de performance

1. Coeficiente de determinação (ou R²), corresponde à correlação ao quadrado entre os valores de resultado observados e os valores previstos pelo modelo.
### Retorno esperado no experimento

1. Distribuição do erro:

<img src="img/svr/error_distribution.png" width="400">



### Retorno esperado na implantação

Tabela com os valores preditos para o atributo alvo.