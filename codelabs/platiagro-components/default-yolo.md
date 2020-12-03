author: Lucas Zanco Ladeira
summary: Detecção de Objetos
id: default-yolo
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Detecção de Objetos

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este componente utiliza o algoritmo Yolo para detecção e classificação de objetos em imagens implementado na biblioteca [Yolov4](https://pypi.org/project/yolov4/). Essa biblioteca utiliza uma versão do modelo treinado com a base de dados Coco, e portanto, reconhece os objetos descritos em coco.names.

### Entrada esperada

Espera-se como entrada para o componente um arquivo .zip com imagens.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Linguagem     | `string` | português, inglês | O objeto detectado pode estar em português ou inglês. |


### Métricas de performance

Neste componente, como é utilizado um modelo pré-treinado, não são utilizadas métricas de performance.


### Retorno esperado no experimento

1. Objetos identificados na imagem, probabilidade de cada objeto, e coordenadas das boundary boxes.

![Matriz de confusão](img/vase.png)

### Retorno esperado na implantação

Objetos identificados na imagem, probabilidade de cada objeto, e coordenadas das boundary boxes.

![Matriz de confusão](img/vase.png)