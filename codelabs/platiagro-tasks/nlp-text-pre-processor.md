author: Matheus Gustavo Alves Sasso
summary: Pré Processador de Texto
id: nlp-text-pre-processor
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Pré Processador de texto

## Função do componente

Este é um componente que utiliza a biblioteca [nltk](https://www.nltk.org/) e [ftfy](https://pypi.org/project/ftfy/) e [regex](https://docs.python.org/3/library/re.html) para pré processar textos que entrrão em outros componentes.


## Entrada esperada

Espera-se como entrada para o componente uma tabela com pelo menos uma coluna em formato de texto.


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Atributo alvo**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>Seu modelo será treinado para prever os valores do alvo.</em>


- **Linguagem**: `string`, {`"Português"`, `"Inglês"`}, padrão: `"Português"`.<br>
<em>Linguagem para pre-processar.</em>


- **Aplicação de casing**: `string`, {`"Caixa baixa"`, `"Caixa alta"`, `"Não Aplicar"`}, padrão: `"Caixa baixa"`.<br>
<em>Caixa baixa, caixa alta ou não aplicação de caixa.</em>


- **Remoção de Stop Words**: `boolean`, {`True`, `False`}, padrão:`True`.<br>
<em>Caso True remove conjunções, artigos e outros textos que não carregam informações relevantes para certas classes de algorítmos de NLP.</em>


- **Remoção de Top Words**: `boolean`, {`True`, `False`}, padrão:`True`.<br>
<em>Caso True remove as palavras que mais aparece todo texto, em que a porcentagem pe controlada.</em>


- **Porcentagem de Top Words**: `float`, padrão:`0.01`.<br>
<em>Porcentagem das palavras que mais aparecem.</em>


- **Stemming**: `boolean`, {`True`, `False`}, padrão:`False`.<br>
<em>Caso True aplica stemming. Esta técnica remove os sufixos das palavras.</em>


- **Lemmatization**: `boolean`, {`True`, `False`}, padrão:`False`.<br>
<em>Caso True aplica lemmatization. Esta técnica mantém apenas as raízes das palavras.</em>


- **Remoção de pontuação**: `boolean`, {`True`, `False`}, padrão:`False`.<br>
<em>Caso True remove as pontuações do texto.</em>


- **Remoção de quebras de linha**: `boolean`, {`True`, `False`}, padrão:`False`.<br>
<em>Caso True remove todas as quebras de linha \n e \r no texto.</em>


- **Remoção de acentos**: `boolean`, {`True`, `False`}, padrão:`False`.<br>
<em>Caso True remove todos os acentos no texto.</em>


- **Remoção de HTML**: `boolean`, {`True`, `False`}, padrão:`False`.<br>
<em>Caso True remove todas as tags HTML. Estas possuem o formato <tag></em>


- **Remoção de CSS**: `boolean`, {`True`, `False`}, padrão:`False`.<br>
<em>Caso True remove todas as tags CSS. Estas possuem o formato {tag}</em>


## Retorno esperado na experimentação

1. Espera-se como retorno os textos pré-processados em formato de tabela para as colunas especificadas.


## Retorno esperado na implantação

Espera-se como retorno os textos pré-processados em formato de tabela para as colunas especificadas.
