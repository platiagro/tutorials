author: Matheus Gustavo Alves Sasso
summary: Classificador de sentenças utilizando Glove Embeddings Bags
id: nlp-glove-embeddings-sentence-classification
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

# Classificador de sentenças utilizando Glove Embeddings Bags

## Função do componente

Este componente é um classificador sentenças multiclasse baseado nos pacotes de Embeddings GloVe disponiblizado pela [Stanford](https://nlp.stanford.edu/projects/glove/) para a lngua inglesa e pelo [NILC-São Carlos](http://nilc.icmc.usp.br/nilc/index.php/repositorio-de-word-embeddings-do-nilc) para a língua portuguesa.

## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. Os valores de data devem ser removidos ou selecionados para codificação ordinal para que o modelo consiga processá-los. A tabela deve ser do tipo Comma-separated values (.csv)


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Coluna de entrada**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>Seu modelo utilizará para treinamento a coluna selecionada.</em>

- **Coluna alvo**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>Seu modelo será treinado para prever os valores do alvo.</em>

- **Arquivo de pesos**: `string` <span style="color:red">(Obrigatório)</span>.<br>
<em>É possível passar o arquivo comprimido em (.zip) ou não no formato (.txt) no experimento. Caso não seja possível o componente tentará descomprimir o arquivo antes."</em>

- **Idioma**: `string`, {`"ingles"`, `"portugues"`}, padrão: `"ingles"` <span style="color:red">(Obrigatório)</span>.<br>
<em>Idioma em que os stopwords pertencem. Deve ser o mesmo utilizado no dataset.</em>

- **Gráficos a serem ignorados**: `string`, {"Dados de Treino", "Matriz de Confusão", "Métricas Comuns", "Curva ROC", "Tabelas de Dados","Performance Batch Treinamento","Performance Época Treinamento","Performance Batch Validação","Performance Época Validação"}, padrão: `"ingles"` <span style="color:red">(Obrigatório)</span>.<br>
<em>Diversos gráficos são gerados ao executar o treinamento e validação do modelo, selecione quais não devem ser gerados.</em>

- **Tamanho do batch de treinamento**: `integer` <span style="color:red">(Obrigatório)</span>.<br>
<em>O tamanho do batch de treinamento interfere na quantidade de dados que irá atualizar o modelo por backpropagation. Se muito grande pode gerar esoturos memória.</em>

- **Tamanho do batch de inferência**: `integer` <span style="color:red">(Obrigatório)</span>.<br>
<em>O tamanho do batch de inferência diz a quantidade de resultados que podem ser calculados em uma operação. Se muito grande pode gerar esoturos memória.</em>

- **Número de épocas**: `integer` <span style="color:red">(Obrigatório)</span>.<br>
<em>Quantidade de vezes que todos os dados serão vistos durante o treinamento. É considerado também para a recuperação de pesos pré treinados.</em>

- **Acúmulo de batchs**: `integer` <span style="color:red">(Obrigatório)</span>.<br>
<em>Estratégia para atualizar os pesos não em todos os batchs mas a cada uma certa quantidade sem passar muitos batchs por vez durante o treinamento.</em>

- **Taxa de aprendizado**: `number` <span style="color:red">(Obrigatório)</span>.<br>
<em>Velocidade em que o algorítimo irá aprender.</em>

- **Semente de aleatoriedade**: `integer` <span style="color:red">(Obrigatório)</span>.<br>
<em>Semente para replicação dos resultados.</em>

- **Dimensão das camada escondidas**: `integer`,`multiple`, {1000,500,300,200,100,50,20,10}  <span style="color:red">(Obrigatório)</span>.<br>
<em>Dimensão da camadas escondidas da rede neural de classifcação.</em>

- **Função de ativação**: `string`, {"relu","tanh"} <span style="color:red">(Obrigatório)</span>.<br>
<em>Função de ativação utilizada nas camadas ocultas da MLP.</em>

- **Dimensão dos vetores Glove**: `integer`, {50,100,200,300,600,1000}  <span style="color:red">(Obrigatório)</span>.<br>
<em>Dimensão dos vetores Glove pré treinados. Opções do inglês:50,100,200,300. Opções do português:50,100,300,600,1000.</em>

- **Utilizar GPUs?**: `boolean` <span style="color:red">(Obrigatório)</span>.<br>
<em>Em caso positivo irá utilzar a GPU senão utilizará as CPUs. Se não houver GPU disponível irá utilziar CPUs.</em>

- **Checagem do conjunto de validação**: `integer` <span style="color:red">(Obrigatório)</span>.<br>
<em>Irá interferir nos dataframes e gráficos de performance do conjunto de validação. Quanto menor, mais detalhes, porém mais lento (múltiplas inferências)</em>

- **Mostrar informações do modelo**: `boolean` <span style="color:red">(Obrigatório)</span>.<br>
<em>Informações automáticas disponibilizadas pelo Pytorch Lightning.</em>

- **Taxa de atualização da barra de progresso do modelo**: `integer` <span style="color:red">(Obrigatório)</span>.<br>
<em>Serve para acompanhar o a loss do modelo enquanto treina. Interssante ser bastante alto no momentoda implantação, pois não é necessário.</em>



## Métricas de performance

As métricas de performance tem o propósito de ajudar o usuário a avaliar a performance do modelo. Essas métricas variam de acordo com o tipo de problema, tal como: classificação, regressão, agrupamento, entre outros.

1. Acurácia: Indica uma performance geral do modelo. Dentre todas as classificações, quantas o modelo classificou corretamente.
2. Recall: Dentre todas as situações de classe positivo como valor esperado, quantas estão corretas.
3. F1-Score: Média harmônica entre precisão e recall.
4. Suporte: Número de ocorrências de cada classe esperadas
5. Matriz de confusão: Tabela que mostra as frequências de classificação para cada classe do modelo
5. Curvas de peformance: Monitoram as curvas de perda e acurácia durante o treino e validação para batchs e para épocas.

## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:


1. Matriz de confusão<br> <em>Apresenta a matriz de confusão. É possível obsersar relações entre os acertos e erros das cada classe. </em>
<img src="img/classification/confusion_matrix.png" width="350">

2. Métricas comuns<br> <em>Apresenta métricas comuns utilizadas para avaliar modelos de classificação, como por exemplo: precision e recall.</em>
<img src="img/classification/common_metrics_global.png" width="800">

3. Curva ROC<br> <em>Apresenta um gráfico da Curva ROC. Esse gráfico permite avaliar a performance de um classificador binário para diferentes pontos de cortes. A métrica AUC (Area under curve) também é calculada e indicada na legenda do gráfico. Se a variável resposta tiver mais de duas categorias, o cálculo da curva ROC e AUC é feito utilizando o algoritmo one-vs-rest, ou seja, calcula-se a curva ROC e AUC de cada classe em relação ao restante.</em>
<img src="img/classification/roc_curve.png" width="400">

4. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table_nlp.png" width="800">

5. Performance de treino por batch<br> <em>Comportamento da acurácia e da função de perda por batch na etapa de treino.</em>
<img src="img/algorithims_performance/train_batch_performance.png" width="800">

6. Performance de treino por época<br> <em>Comportamento da acurácia e da função de perda por época na etapa de treino.</em>
<img src="img/algorithims_performance/train_epoch_performance.png" width="800">

7. Performance de validação por batch<br> <em>Comportamento da acurácia e da função de perda por batch na etapa de validação.</em>
<img src="img/algorithims_performance/valid_batch_performance.png" width="800">

8. Performance de validação por época<br> <em>Comportamento da acurácia e da função de perda por época na etapa de validação.</em>
<img src="img/algorithims_performance/valid_epoch_performance.png" width="800">


## Retorno esperado na implantação

O retorno durante a implantação se refere a tabela com os valores preditos para o atributo alvo e as probabilidades de cada classe. Sendo que, cada linha da tabela se refere a um registro enviado ao modelo.
