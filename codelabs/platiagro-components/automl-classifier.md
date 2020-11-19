author: Matheus Gustavo Alves Sasso
summary: Classificador AutoML
id: automl-classifier
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Classificador AutoML

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este é um componente que utiliza a biblioteca [auto-sklearn](https://github.com/automl/auto-sklearn) para obter um ou mais modelos classificadores já otimizados. <br>
O auto-sklearn é um kit de ferramentas de machine learning automatizado e um substituto para [estimator](https://scikit-learn.org/stable/glossary.html#term-estimators) do [scikit-learn](https://scikit-learn.org/stable/).

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
|Tempo máximo de busca|`integer`| - |Limite de tempo (em segundos) para a procura de modelos apropriados.|
|Tempo máximo para ajuste de modelo|`integer`| - |Limite de tempo (em segundos), para uma única chamada, para ajuste de um modelo de Machine Learning.|
|Ensemble Learning|`integer`| - |Número de modelos adicionados ao conjunto criado pela seleção do Ensemble das bibliotecas de modelos.|
|Método de Predição|`string`| `"predict_proba"` `"predict"` |Se optar por 'predict_proba', o método de predição será a probabilidade estimada de cada classe, já o 'predict' prediz a qual classe pertence.|


### Métricas de performance

1. Acurácia: Indica uma performance geral do modelo. Dentre todas as classificações, quantas o modelo classificou corretamente.
2. Recall: Dentre todas as situações de classe positivo como valor esperado, quantas estão corretas.
3. F1-Score: Média harmônica entre precisão e recall.
4. Suporte: Número de ocorrências de cada classe esperadas
5. Matriz de confusão: Tabela que mostra as frequências de classificação para cada classe do modelo

### Retorno esperado no experimento

1. Curva ROC:

<img src="img/automl-classifier/roc_curve.png" width="400">

### Retorno esperado na implantação

Tabela com os valores preditos para o atributo alvo.
