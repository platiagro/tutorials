author: Matheus Gustavo Alves Sasso
summary: Optical Character Recognition
id: cv-ocr
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Reconhecimento Ótico de Caracteres

## Função do componente

Utilização das bibliotecas [opencv](https://opencv.org/) e  [Tesseract OCR](https://tesseract-ocr.github.io/) para o reconhecimento de texto em imagens e da biblioteca [JiWER](https://github.com/jitsi/jiwer) para cálculo de mérticas de perfomance.

*   Mais detalhes sobre  o funcionamento dos algorítimos e das línguas nos quais o mesmo podem são utilizados são encontrados na [Tesseract documentation](https://tesseract-ocr.github.io/tessdoc/Data-Files)

*   Caso seja passado um arquivo .xlsx com as strings de target pode visualizar a perfonrmance do algorítimo


## Entrada esperada

Espera-se como entrada para o componente um arquivo .zip contendo images e podendo conter uma tabela .xlsx com uma coluna contendo as respostas esperadas.


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Caminho das imagens**: `string`<span style="color:red">(Obrigatório)</span>.<br>
<em>Coluna da tabela com o caminho para as imagens.</em>


- **Atributo alvo**: `string`.<br>
<em>Seu modelo será treinado para prever os valores do alvo.</em>


- **Confiabilidade do bbox**: `integer`, padrão: `60`. <br>
<em>O quanto de confiabilidade o algorítmo deve possuir sobre o bbox para que o mesmo apareça.</em>


- **Modo de segmentação do PyTesseract**, `string`, padrão: `Considere um único bloco de texto uniforme`. <br>
<em>Modo de segmentação utilizado pelo PyTesseract.</em>


- **OCR engine do Pytesseract**. <br>
<em>Para mais informações acesse a documentação linkada no inicio do notebook.</em>


- **Idioma pré teinado**, `string`, {`"por"`,`"eng"`}, padrão: `por`. <br>
<em>Opções disponibilizadas na aplicação compreendem português (por) e inglês (eng).</em>


- **Forma de retorno dos bboxes**, `string`, {`"np_array"`, `"image"`}, padrão: `"np_array"`. <br>
<em>Escolher se bboxes serão retornados na imagem ou como um numpy array.</em>


- **Formato de retorno da imagem**, `string`, {`"N/A"`, `".jpg"`, `".png"`}, padrão: `"N/A"`. <br>
<em>Escolher formato de retorno da imagem, N/A se retornar numpy array. Apenas aplicável caso bbox_return = image.</em>


- **Remove quebras de linha**, `boolean`, {`True`, `False`}, padrão: `True`. <br>
<em>Caso True remove \n e \t dos resultados.Vale ressaltar que o texto de referência na tabela .xlsx caso haja, deve considerar este fato para calcular as métricas corretamente</em>


## Métricas de performance

As métricas de performance tem o propósito de ajudar o usuário a avaliar a performance do modelo. Essas métricas variam de acordo com o tipo de problema, tal como: classificação, regressão, agrupamento, entre outros.

1.  Word Error Rate (WER): Proporção de palavras erradas entre as palavras processadas. WER = ((S+D+I)/(H+S+D))
2.  Match Error Rate (MER): Proporção de palavras correspondidas que são erros. MER = ((S+D+I)/(H+S+D+I))
3.  Word Information Lost (WIL): Proporção de informação perdida. WIL = 1- ((H^2)/((H+S+D)(H+S+I)))
4.  Word Information Preserved (WIP): Proporção de informação preservada. WIP = 1- WIL

Legenda:  I= Número de Inserções, D = Número de Deleções, S = Número de Substituições, H = Número de Acertos.


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Tabela dos dados<br> <em>Dataframe com o texto de fererência, o texto encontrado, as coordenadas dos bboxes nas regiões em que os textos foram identificados e também as métricas calculadas. Em caso de não haver o arquivo .xlsx de referência, retorna apenas o texto encontrado e as coordenadas dos bboxes nas regiões em que os textos foram identificados.</em>
<img src="img/table.png" width="800">


## Retorno esperado na implantação

Saída dependende do argumento do tipo de retorno. Caso seja uma imagem retorna um arquivo bytes em que o texto está marcado. Caso seja um numpy array retorna as posições dos bboxes em numpy array.