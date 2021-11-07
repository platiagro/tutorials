author: Andreza Aparecida dos Santos
summary: AutoKeras Auto Computer Vision
id: cv-autokeras-autocv
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks

# AutoKeras Auto Computer Vision


## Função do componente

Este componente utiliza a biblioteca [AutoKeras](https://autokeras.com/)

## Entrada esperada

Espera-se como entrada para o componente um arquivo .zip contendo as pastas "train", "test" e "val". Estas três pastas devem conter uma pasta por classe existente no conjunto de dados com as imagens da respectiva classe que serão utilizadas para treino, teste e validação.

Além disso, deve-se fornecer na raiz do arquivo .zip um arquivo dataset.csv, contendo as colunas "image_path", "target" e "subset", onde:
* image_path: caminho para o arquivo de imagem.
* target: resposta esperada da predição, caso exista.
* subset: conjunto ao qual a amostra faz parte, pode ser "train", "test", e "val".

## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **num_epochs**: `integer`, padrão: `16`.<br><em>Número de épocas para executar em cada tentativa de configuração. Deve ser maior ou igual a 2.</em>


- **trials**: `integer`, padrão: `5`.<br><em>Quantidade de tentativas de configuração a ser testada.</em>


- **batch_size**: `integer`, padrão: `8`.<br><em>Quantas imagens serão enviadas por vez para a rede. Números altos consomem muita memória RAM</em>


- **target_size**: `integer`, padrão: `256`.<br><em>Tamanho da imagem de entrada das redes. A imagem será quadrada.</em>


- **brightness_range**: `float`, padrão: `None`.<br><em>Faixa para escolher o valor da mudança de brilho.</em>


- **channel_shift_range**: `float`, padrão: `0.0`.<br><em>Faixa para mudanças aleatórias dos canais.</em>


- **cval**: `float`, padrão: `0.0`.<br><em>Valor usado para pontos fora dos limites quando fill_mode = "constant"</em>


- **data_format**: `string`, {`["channels_first", "channels_last"]`}, padrão: `channels_last`.<br><em>Formato dos dados da imagem. </em>


- **dtype**: `string`, padrão: `float32`.<br><em>Tipo para usar nos arrays gerados.</em>


- **featurewise_center**: `bool`, padrão: `False`.<br><em>Faz a média igual a zero em todo o dataset em termos de features.</em>


- **featurewise_std_normalization**: `bool`, padrão: `False`.<br><em>Divide entradas pelo desvio padrão (std) do dataset em termos de features.</em>


- **fill_mode**: `string`, {`["constant", "nearest", "reflect", "wrap"]`}, padrão: `nearest`.<br><em>Algoritmo usado para preencher regiões caso necessário.</em>


- **horizontal_flip**: `bool`, padrão: `False`.<br><em>Aumentação] Aplica inversão horizontal nas entragas aleatoriamente.</em>


- **preprocessing_function**: `string`, padrão: `None`.<br><em>Funções que serão aplicadas em cada entrada. A função irá rodar após a imagem ser aumentada e redimensionada.</em>


- **rescale**: `float`, padrão: `1./255`.<br><em>Fator de re-escala. Se None ou 0, nenhuma re-escala será aplicada, caso contrário cada data será multiplicado pelo valor especificado.</em>


- **rotation_range**: `integer`, padrão: `0`.<br><em>Faixa de graus para rotações aletórias.</em>


- **samplewise_center**: `bool`, padrão: `False`.<br><em>Define cada média de amostra para 0.</em>


- **samplewise_std_normalization**: `bool`, padrão: `False`.<br><em>Divide cada entrada por seu desvio padrão.</em>


- **shear_range**: `float`, padrão: `0.0`.<br><em>Intensidade de corte (Ângulo de corte na direção anti-horária em graus).</em>


- **vertical_flip**: `bool`, padrão: `False`.<br><em>Aplica inversão vertical nas entragas aleatoriamente.</em>


- **zca_whitening**: `bool`, padrão: `False`.<br><em>Aplica clareamento ZCA.</em>


- **zca_epsilon**: `float`, padrão: `1e-6`.<br><em>Valor de epsilon para clareamento ZCA</em>


- **zoom_range**: `float`, padrão: `0.0`.<br><em>Faixa para zoom aleatório. Float ou intervalo do tipo [menor, maior].</em>


- **height_shift_range**: `float`, padrão: `0.0`.<br><em>Float, 1-D array-like ou integer.</em>


- **width_shift_range**: `float`, padrão: `0.0`.<br><em>Float, 1-D array-like ou integer</em>


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário observar se o melhor modelo encontrado pelo AutoKeras desempenhou bem através do relatório de classificação e da matriz de confusão obtidos usando o conjunto de teste.

## Retorno esperado na implantação

Os retornos são o nome da classe predita e a probabilidade associada a predição.
