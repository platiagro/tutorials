author: Matheus Gustavo Alves Sasso
summary: Pré Processador de Texto
id: nlp-text-pre-processor
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Pré Processador de texto

## Visão Geral
Duration: 0:05:00

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Este é um componente que utiliza a biblioteca [nltk](https://www.nltk.org/) e [ftfy](https://pypi.org/project/ftfy/) e [regex](https://docs.python.org/3/library/re.html) para pré processar textos que entrrão em outros componentes.
### Entrada esperada

Espera-se como entrada para o componente uma tabela com pelo menos uma coluna em formato de texto.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Modo de seleção das features   | `string` |`"incluir"` `"remover"`| Se deseja informar quais features deseja incluir no modelo, selecione a opção 'incluir'. Caso deseje informar as features que não devem ser utilizadas, selecione 'remover'.|
|Features para incluir/remover no modelo|`feature`| - |Seu modelo será feito considerando apenas as features selecionadas. Caso nada seja especificado, todas as features serão utilizadas|
|Idioma|`string`| `"portuguese"` `"english"`|Linguagem da qual os stopwords pertencem. Deve ser a mesma utilizada no dataset.|


|Aplicação de Casing|`string`| `"Lower"` `"Upper"` `"NotApply"`|Aplica caixa baixa, caixa alta ou não aplicação de caixa.|
|Remoção de Stop Words|`boolean`|`True` `False`|Caso True remove conjunções, artigos e outros textos que não carregam informações relevantes para certas classes de algorítmos de NLP|
|Remoção de Top Words|`boolean`|`True` `False`|Caso True remove as palavras que mais aparece todo texto, em que a porcentagem pe controlada.|
|Porcentagem de Top Words|`number`|`True` `False`|Porcentagem das palavras que mais aparecem.|
|Stemming|`boolean`| `True` `False`|Caso True aplica stemming. Esta técnica remove os sufixos das palavras.|
|Lemmatization|`boolean`|`True` `False`|Caso True aplica lemmatization. Esta técnica mantém apenas as raízes das palavras.|
|Remoção de pontuação|`boolean`|`True` `False`|Caso True remove as pontuações do texto.|
|Remoção de quebras de linha|`boolean`|`True` `False`|Caso True remove todas as quebras de linha \n e \r no texto.|
|Remoção de acentos|`boolean`|`True` `False`|Caso True remove todos os acentos no texto.|
|Remoção de HTML|`boolean`|`True` `False`|Caso True remove todas as tags HTML. Estas possuem o formato <tag>|
|Remoção de CSS|`boolean`|`True` `False`|Caso True remove todas as tags CSS. Estas possuem o formato {tag}|

### Métricas de performance

Não se aplica

### Retorno esperado no experimento

1. Espera-se como retorno os textos pré-processados em formato de tabela para as colunas especificadas.

### Retorno esperado na implantação

Espera-se como retorno os textos pré-processados em formato de tabela para as colunas especificadas.
