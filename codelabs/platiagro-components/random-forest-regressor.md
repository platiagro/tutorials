author: Matheus Gustavo Alves Sasso
summary: Regressor Random Forest
id: random-forest-regressor
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Regressor Random Forest

## Função do componente

Este componente treina um modelo Random Forest para regressão usando [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html).Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado. Também provê várias ferramentas para montagem de modelo, pré-processamento de dados, seleção e avaliação de modelos, e muitos outros utilitários.


## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. Os valores de data devem ser removidos ou selecionados para codificação ordinal para que o modelo consiga processá-los. A tabela deve ser de um dos seguintes tipos: Comma-separated values (.csv) ou Excel (.xls, .xlsx).


## Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

- **Atributo alvo**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>Seu modelo será treinado para prever os valores do alvo.</em>


- **Modo de seleção das features**: `string`, {`"incluir"`, `"remover"`}, padrão: `"remover"`.<br>
<em>Se deseja informar quais features deseja incluir no modelo, selecione a opção 'incluir'. Caso deseje informar as features que não devem ser utilizadas, selecione 'remover'.</em>


- **Features para incluir/remover no modelo**: `feature`.<br>
<em>Seu modelo será feito considerando apenas as features selecionadas. Caso nada seja especificado, todas as features serão utilizadas.</em>


- **Features para fazer codificação ordinal**: `feature`.<br>
<em>Seu modelo utilizará a codificação ordinal para as features selecionadas. As demais features categóricas serão codificadas utilizando One-Hot-Encoding.</em>


- **Número de estimadores**: `integer`, padrão: `10`.<br>
<em>Número de árvores na floresta.</em>


- **Critério**: `string`, {`"mse"`, `"mae"`}, padrão: `"mse"`.<br>
<em>Função para medir a qualidade de uma divisão.</em>


- **Profundidade**: `integer`, padrão: `None`.<br>
<em>O máximo de profundidade da árvore.</em>


- **Features**: `string`, {`"auto"`, `"sqrt"`, `"log2"`}, padrão: `"auto"`.<br>
<em>O máximo de features a serem considerados ao procurar a melhor divisão.</em>


- **Gráficos a serem ignorados**: `string`, {`"Dados de Teste"`, `"Erro da Regressão"`, `"Diferença do Erro"`, `"Diferença Ordenada do Erro"`, `"Erro Absoluto"`, `"Probabilidade do Erro"`, `"Erro de Segmentos"`, `"Tabelas de Dados"`}.<br>
<em>Considerando a quantidade de gráficos que são retornados ao executar a experimentação, o usuário pode selecionar quais ele não deseja visualizar.</em>


## Métricas de performance

As métricas de performance tem o propósito de ajudar o usuário a avaliar a performance do modelo. Essas métricas variam de acordo com o tipo de problema, tal como: classificação, regressão, agrupamento, entre outros.

1. Coeficiente de determinação (ou R²): Corresponde à correlação ao quadrado entre os valores de resultado observados e os valores previstos pelo modelo.
1. Erro médio absoluto (MAE): Média do erro absoluto considerando os valores de resultado observados e os valores previstos pelo modelo.
1. Erro médio quadrático (MSE): Média quadrática do erro considerando os valores de resultado observados e os valores previstos pelo modelo.


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Dados de teste<br> <em> Apresenta a distribuição dos dados de teste considerando as duas características mais relevantes para o modelo e o rótulo.</em>
<img src="img/regression/regression_data.png" width="400">

1. Distribuição do erro na regressão<br> <em>Apresenta a distribuição do erro na regressão como uma estimativa de densidade do kernel.</em>
<img src="img/regression/regression_error.png" width="400">

1. Distribuição do rótulo<br> <em>Apresenta a diferença entre o resultado observado e os valores preditos.</em>
<img src="img/regression/prediction_diff.png" width="400">

1. Distribuição do rótulo ordenada<br> <em>Apresenta a diferença entre o resultado observado e os valores preditos de maneira ordenada.</em>
<img src="img/regression/sorted_prediction_diff.png" width="400">

1. Erro absoluto<br> <em>Apresenta o erro absoluto considerando o resultado observado e os valores preditos.</em>
<img src="img/regression/absolute_error.png" width="400">

1. Probabilidade do erro<br> <em>Apresenta a comparação do erro e da normal.</em>
<img src="img/regression/probability_error.png" width="400">

1. Erro por segmento<br> <em>Apresenta comparação da estimativa de densidade do kernel para segmentos distintos.</em>
<img src="img/regression/segment_error.png" width="400">

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

O retorno durante a implantação se refere a tabela com os valores preditos para o atributo alvo. Sendo que, cada linha da tabela se refere a um registro enviado ao modelo.