author: Lucas Zanco Ladeira
summary: Detecção de Faces
id: cv-mtcnn-face-detection
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Detecção de Faces


## Função do componente

Este componente utiliza a biblioteca [facenet-pytorch](https://github.com/timesler/facenet-pytorch), a qual disponibiliza o modelo [MTCNN](https://arxiv.org/abs/1604.02878) para detecção de faces. O MTCNN possui a performance estado da arte nos benchmarks [FDDB](http://vis-www.cs.umass.edu/fddb/) e [WIDER FACE](http://shuoyang1213.me/WIDERFACE/). Melhores explicações são encontradas neste [artigo do kaggle](https://www.kaggle.com/timesler/guide-to-mtcnn-in-facenet-pytorch).


## Entrada esperada

Espera-se como entrada para o componente um arquivo .zip com imagens.


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Tamanho da imagem**: `integer`, padrão: `160`.<br>
<em>Tamanho da imagem de saída em pixels. Imagem será quadrada.</em>


- **Margem adicionada ao bbox**: `integer`, padrão: `20`.<br>
<em>Margem adicionada em relação ao número de pixels da imagem final.</em>


- **Menor tamanho de rosto**: `integer`, padrão: `20`.<br>
<em>Menor tamanho de rosto que o algorítimo irá procurar em pixels.</em>


- **Fator de escalabilidade**: `integer`: padrão: `0.709`.<br>
<em>Fator de escalabilidade para pirâmide de tamanhos de rosto.</em>


- **Manter todas as faces**: `boolean`, {`True`, `False`}, padrão: `True`.<br>
<em>Se True retorna todas as faces, se não retorna apenas a com maior probabilidade caso encontre.</em>


- **Ambiente**: `string`, {`"cuda"`, `"cpu"`}, padrão: `"cuda"`.<br>
<em>Escolher entre CPU e GPU. Se escolher GPU e não houver irá substituir automaticamente por cpu.</em>


- **Semente Aleatória**: `integer`, padrão: `7`.<br>
<em>Semente para replicabilidade dos resultados.</em>


- **Batch size para inferência**: `integer`, padrão: `2`.<br>
<em>Inferência em batch para acelerar o processo.</em>


- **Dimensão para redimensionamento**: `integer`, padrão: `512`.<br>
<em>Dimensão em que todas as imagens serão redimensionadas para poderem ser procesadas em batch. Ficarão todas quadradas.</em>


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Tabela dos dados<br> <em>Apresenta visualização dos dados após o treinamento do modelo com a variável resposta e dados sobre o modelo.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

Lista com todas as face ou apenas a face com maior probabilidade.