author: Matheus Gustavo Alves Sasso
summary: Optical Character Recognition
id: cv-ocr
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Reconhecimento Ótico de Caracteres

## Visão Geral
Duration: 0:05:00

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Utilização das bibliotecas [opencv](https://opencv.org/) e  [Tesseract OCR](https://tesseract-ocr.github.io/) para o reconhecimento de texto em imagens e da biblioteca [JiWER](https://github.com/jitsi/jiwer) para cálculo de mérticas de perfomance.

*   Mais detlalhes sobre  o funcionamento dos algorítimos e das línguas nos quais o mesmo podem são utilizados são encontrados na [Tesseract documentation](https://tesseract-ocr.github.io/tessdoc/Data-Files)

*   Caso seja passado um arquivo .xlsx com as strings de target pode visualizar a perfonrmance do algorítimo

### Entrada esperada

Espera-se como entrada para o componente um arquivo .zip contendo images e podendo conter uma tabela .xlsx com uma coluna contendo as respostas esperadas.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Modo de seleção das features   | `string` |`"incluir"` `"remover"`| Se deseja informar quais features deseja incluir no modelo, selecione a opção 'incluir'. Caso deseje informar as features que não devem ser utilizadas, selecione 'remover'.  |
|Features para incluir/remover no modelo|`feature`| - |Seu modelo será feito considerando apenas as features selecionadas. Caso nada seja especificado, todas as features serão utilizadas|
|Confiabilidade do bbox|`number`| - |O quanto de confiabilidade o algorítmo deve possuir sobre o bbox para que o mesmo apareça.|
|Modeo de segmentação do PyTesseract|`string`| `"Orientation and script detection (OSD) only."` `"Automatic page segmentation with OSD."` `"Automatic page segmentation  but no OSD  or OCR."` `"Fully automatic page segmentation  but no OSD. (Default)"` `"Assume a single column of text of variable sizes."` `"Assume a single uniform block of vertically aligned text."` `"Assume a single uniform block of text."` `"Treat the image as a single text line."` `"Treat the image as a single word."` `"Treat the image as a single word in a circle."` `"Treat the image as a single character."` `"Sparse text. Find as much text as possible in no particular order."` `"Sparse text with OSD"` `"Raw line. Treat the image as a single text line  bypassing hacks that are Tesseract-specific."` |Para mais informações acesse a documentação linkada no inicio do notebook.|
|OCR engine do Pytesseract|`string`| `"Legacy engine only."` `"Neural nets LSTM engine only."` `"Legacy + LSTM engines."` `"Default, based on what is available."`|Para mais informações acesse a documentação linkada no inicio do notebook.|
|Confiabilidade do bbox|`string`| `"por"` `"eng"`|O quanto de confiabilidade o algorítmo deve possuir sobre o bbox para que o mesmo apareça.|
|Forma de retorno dos bboxes|`string`|`"np_array"` `"image"` |Escolher se bboxes serão retornados na imagem ou como um numpy array.|
|Formato de retorno da imagem.|`string`|`"N/A"` `".jpg"` `".png"`|Escolher formato de retorno da imagem, N/A se retornar numpy array. Apenas aplicável caso bbox_return = image|


### Métricas de performance

1.  Word Error Rate (WER): Proporção de palavras erradas entre as palavras processadas. WER = ((S+D+I)/(H+S+D))
2.  Match Error Rate (MER): Proporção de palavras correspondidas que são erros. MER = ((S+D+I)/(H+S+D+I))
3.  Word Information Lost (WIL): Proporção de informação perdida. WIL = 1- ((H^2)/((H+S+D)(H+S+I)))
4.  Word Information Preserved (WIP): Proporção de informação preservada. WIP = 1- WIL

Legenda:  I= Número de Inserções, D = Número de Deleções, S = Número de Substituições, H = Número de Acertos.

### Retorno esperado no experimento

1. Dataframe com o texto de fererência, o texto encontrado, as coordenadas dos bboxes nas regiões em que os textos foram identificados e também as métricas calculadas. Em caso de não haver o arquivo .xlsx de referência, retorna apenas o texto encontrado e as coordenadas dos bboxes nas regiões em que os textos foram identificados.

### Retorno esperado na implantação

Saída dependende do argumento do tipo de retorno. Caso seja uma imagem retorna um arquivo bytes em que o texto está marcado. Caso seja um numpy array retorna as posições dos bboxes em numpy array.
