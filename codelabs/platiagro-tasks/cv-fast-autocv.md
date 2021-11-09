author: Andreza Aparecida dos Santos
summary: Fast Auto Computer Vision
id: cv-fast-autocv
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

# Fast Auto Computer Vision


## Função do componente

Este componente utiliza a biblioteca [Pytorch](https://pytorch.org/) para fazer Fine-Tuning das arquiteturas ResNet18, ResNet50 e VGG16 para a tarefa de classificação de imagens utilizando quatro conjuntos de políticas genéricas pré-definidas pelo artigo [Fast AutoAugment](https://arxiv.org/pdf/1905.00397.pdf) nos conjuntos de dados [ImageNet](https://image-net.org/), [CIFAR-10](https://www.cs.toronto.edu/~kriz/cifar.html) e [SVHN](http://ufldl.stanford.edu/housenumbers/).

## Entrada esperada

Espera-se como entrada para o componente um arquivo .zip contendo as pastas "train", "test" e "val". Estas três pastas devem conter uma pasta por classe existente no conjunto de dados com as imagens da respectiva classe que serão utilizadas para treino, teste e validação.

Além disso, deve-se fornecer na raiz do arquivo .zip um arquivo dataset.csv, contendo as colunas "image_path", "target" e "subset", onde:
* image_path: caminho para o arquivo de imagem.
* target: resposta esperada da predição, caso exista.
* subset: conjunto ao qual a amostra faz parte, pode ser "train", "test", e "val".

# Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **arch_list**: `string`, {`["resnet18", "resnet50", "vgg16"]`}, padrão: `["resnet18", "resnet50", "vgg16"]`. <br><em>Nome das arquiteturas que deseja utilizar na busca em forma de lista.</em>


- **aug_polices**: `string`, {`["fa_reduced_cifar10", "fa_resnet50_rimagenet", "fa_reduced_svhn"]`}, padrão: `["fa_reduced_cifar10", "fa_resnet50_rimagenet", "fa_reduced_svhn"]`.<br><em>Conjuntos de polices disponíveis para escolha.</em>


- **top_predictions**: `integer`, padrão: `1`.<br><em>Define quantas predições se quer ter de resposta para uma predição realizada pela rede. Valor máximo é igual ao número total de classes</em>


- **batch**: `integer`, padrão: `8`.<br><em>Quantas imagens serão enviadas por vez para a rede. Números altos consomem muita memória RAM.</em>


- **epochs**: `integer`, padrão: `10`.<br><em>Número de épocas. Esse número será utilizado para cada combinação de arquitetura e conjunto de políticas.</em>


- **lr**: `float`, padrão: `0.001`.<br><em>Learning rate para o treinamento.</em>


- **gamma**: `float`, padrão: `0.1`.<br><em> Gamma utilizado para otimização da descida do gradiente.</em>


- **step_size**: `integer`, padrão: `7` .<br><em>Tamanho do passo utilizado na descida do gradiente.</em>


- **momentum**: `float`, padrão: `0.1`.<br><em>Momento utilizado para otimização da descida do gradiente.</em>


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a observar se a opção de arquitetura e conjunto de políticas encontrados performam bem no conjunto de teste fornecido através da geração dos gráficos de treinamento dos modelos, da matriz de confusão do relatório de classificação.

## Retorno esperado na implantação

Os retornos são o índice da classe predita, seu nome e a probabilidade associada a predição.
