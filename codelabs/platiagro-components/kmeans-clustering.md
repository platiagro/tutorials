author: Gabriela Correia Vechini
summary: Clusterização Kmeans
id: kmeans-clustering
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Clusterização Kmeans

## Função do componente

Este é um componente que treina um modelo K-Means usando [Scikit-learn](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html). <br>
Scikit-learn é uma biblioteca open source de machine learning que suporta apredizado supervisionado e não supervisionado.Também provê várias ferramentas para ajustes de modelos, pré-processamento de dados, seleção e avaliação de modelos, além de outras funcionalidades.

A tarefa de clusterização é ultil nos cenários onde espera-se descobrir se o dataset poderia ser agrupado em grupos com caracteristicas semelhantes. Através do gráfico de "Distribuição dos Dados de Teste" é possivel observar os grupos(ou clusters).


## Entrada esperada

Espera-se como entrada para o componente uma tabela com colunas que representam valores numéricos, categóricos ou de data. Os valores de data devem ser removidos ou selecionados para codificação ordinal para que o modelo consiga processá-los. A tabela deve ser de um dos seguintes tipos: Comma-separated values (.csv) ou Excel (.xls, .xlsx).


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Quantidade de clusters**: `integer`, padrão: `3`.<br>
<em>O KMeans utiliza uma quantidade K de clusters para separar os dados.</em>


- **Quantidade de sementes**: `integer`, padrão: `10`.<br>
<em>Número de vezes que o algoritmo será executado com diferentes sementes de centróide.</em>


- **Número de iterações**: `integer`, padrão: `300`.<br>
<em>Número máximo de iterações do algoritmo em uma única execução.</em>


- **Gráficos a serem ignorados**: `string`, {`"Dados de Teste"`, `"Tabelas de Dados"`}.<br>
<em>Considerando a quantidade de gráficos que são retornados ao executar a experimentação, o usuário pode selecionar quais ele não deseja visualizar.</em>


## Métricas de performance

As métricas de performance tem o propósito de ajudar o usuário a avaliar a performance do modelo. Essas métricas variam de acordo com o tipo de problema, tal como: classificação, regressão, agrupamento, entre outros.

1. Pontuação de Silhouette: Avalia a qualidade dos clusters criados usando algoritmos de clustering em termos de quão bem as amostras são agrupadas com outras amostras semelhantes entre si.
1. Pontuação de Calinski e Harabasz: A pontuação é definida como a razão entre a dispersão dentro do cluster e a dispersão entre os cluster.
1. Pontuação Davies e Bouldin: A pontuação é definida como a medida de similaridade média de cada cluster com seu cluster mais semelhante, onde a similaridade é a razão entre as distâncias dentro do cluster e entre as distâncias entre os cluster. Assim, os clusters mais distantes e menos dispersos resultarão em uma pontuação melhor.


## Retorno esperado na experimentação

1. Dados de teste<br> 

<em> Apresenta a distribuição dos dados de teste e as cores os dividem nos grupos encontrados. Nos eixos está quais são as combinações lineares das freatures que melhor identifica e separa os grupos. </em>
<img src="img/clustering/clustering_data_kmeans.png" width="400">

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

Tabela com os valores preditos dos clusters.
