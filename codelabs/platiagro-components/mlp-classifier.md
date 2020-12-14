author: Matheus Gustavo Alves Sasso
summary: Classificador MLP
id: mlp-classifier
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Classificador MLP

## Visão Geral
Duration: 0:05:00

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente realiza predições usando um modelo Multi-layer Perceptron para classificação usando [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.MLPClassifier.html). <br>
Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para ajustes de modelos, pré-processamento de dados, seleção e avaliação de modelos, além de outras funcionalidades.

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
|Ativação|`string`| `identity` `logistic` `tanh` `relu`|Função de ativação para a camada oculta.|
|Solucionador|`boolean`| `lbfgs`  `sgd` `adam`|Algoritmo a ser usado no problema de otimização.|
|Taxa de Aprendizado|`string`| `constant`  `invscaling` `adaptive`|Programação da taxa de aprendizado para atualização de peso.|
|Iteração|`integer`| - |Iteração", description:"Número máximo de iterações.|
|Embaralhamento|`boolean`| `True` `False` |Se as amostras devem ser embaralhadas em cada iteração. Usado somendo quando solver tiver 'sgd' ou 'adam' como valor.|
|Método de Predição|`string`| `predict_proba`  `predict`|Se optar por 'predict_proba', o método de predição será a probabilidade estimada de cada classe, já o 'predict' prediz a qual classe pertence.|


### Métricas de performance

1. Acurácia: Indica uma performance geral do modelo. Dentre todas as classificações, quantas o modelo classificou corretamente.
2. Recall: Dentre todas as situações de classe positivo como valor esperado, quantas estão corretas.
3. F1-Score: Média harmônica entre precisão e recall.
4. Suporte: Número de ocorrências de cada classe esperadas
5. Matriz de confusão: Tabela que mostra as frequências de classificação para cada classe do modelo

### Retorno esperado no experimento

1. Matriz de confusão:

<img src="img/classification/confusion_matrix.png" width="400">

2. Dados de teste:

<img src="img/classification/classification_data.png" width="400">

3. Curva ROC:

<img src="img/classification/roc_curve.png" width="400">

4. Tabela dos dados:

<img src="img/table.png" width="400">

### Retorno esperado na implantação

Tabela com os valores preditos para o atributo alvo.
