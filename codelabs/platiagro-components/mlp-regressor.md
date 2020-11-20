# Regressor MLP

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente treina um modelo Multi-layer Perceptron para regressão usando [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPRegressor.html). <br>
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
|Camada Oculta",|`integer`| - |O i-ésimo elemento representa o número de neurônios na i-ésima camada oculta.|
|Ativação|`string`| `"identity"` `"logistic"` `"tanh"` `"relu"`|Função de ativação para a camada oculta.|
|Solucionador|`boolean`| `"lbfgs"`  `"sgd"` `"adam"`|Algoritmo a ser usado no problema de otimização.|
|Taxa de Aprendizado|`string`| `"constant"`  `"invscaling"` `"adaptive"`|Programação da taxa de aprendizado para atualização de peso.|
|Iteração|`integer`| - |Iteração", description:"Número máximo de iterações.|
|Embaralhamento|`boolean`| `True` `False` |Se as amostras devem ser embaralhadas em cada iteração. Usado somendo quando solver tiver 'sgd' ou 'adam' como valor.|



### Métricas de performance

1. Coeficiente de determinação (ou R²): Corresponde à correlação ao quadrado entre os valores de resultado observados e os valores previstos pelo modelo.

### Retorno esperado no experimento

1. Erro na regressão, exemplificado pela imagem a seguir:

<img src="img/mlp-regressor/error_distribution.png" width="400">

### Retorno esperado na implantação

Tabela com os valores preditos para o atributo alvo.
