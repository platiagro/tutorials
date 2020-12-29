author: Matheus Gustavo Alves Sasso
summary: MariamMT Translator
id: nlp-marianmt-translator
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials


![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)


# Tradutor MarianMT

## Função do componente

Utilização do modelo [MarianMT](https://huggingface.co/transformers/model_doc/marian.html) para tradução.

* Neste exemplo a tradução é feito do inglês para o português, mas ela pode ser feita em qualquer uma das línguas suportadas pelo MarianMT.
* Para adaptar para traduções em outras línguas é necessário verificacar se há o modelo pré-treinado disponível no MarianMT e adaptar o truncamento de strings do [spacy](https://spacy.io/usage/models) para o idioma desejado
* A métrica computada é o [sacrebleu](https://https://github.com/mjpost/sacrebleu)


## Entrada esperada

Espera-se como entrada para o componente uma tabela com entradas textuais.


## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Atributo do texto**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>Este atributo será traduzido e apresentado o resultado.</em>


- **Atributo alvo**: `feature` <span style="color:red">(Obrigatório)</span>.<br>
<em>Seu modelo será treinado para prever os valores do alvo.</em>


- **Idioma de entrada**: `string`, {`"Alemão"`, `"Catalão"`, `"Espanhol"`, `"Francês"`, `"Inglês"`, `"Italiano"`, `"Latim"`, `"Português"`, `"Romeno"`}, padrão: `"Inglês"`.<br>
<em>Idioma de entrada.</em>


- **Idioma de saída**: `string`, {`"Alemão"`, `"Catalão"`, `"Espanhol"`, `"Francês"`, `"Inglês"`, `"Italiano"`, `"Latim"`, `"Português"`, `"Romeno"`}, padrão: `"Português"`.<br>
<em>Idioma de saída.</em>


- **Semente de aleatoriedade**: `integer`, padrão: `42`.<br>
<em>Semente de aleatoriedade utilizada pelo modelo.</em>


- **Tamanho máximo da sentença de entrada**: `integer`, padrão: `127`.<br>
<em>Tamanho máximo da sentença de entrada em tokens.</em>


- **Tamanho máximo da sentença de saída**: `integer`, padrão: `256`.<br>
<em>Tamanho máximo da sentença de saída em tokens.</em>


- **Tamanho do batch de inferência**: `integer`, padrão:`2`.<br>
<em>Tamanho do batch aplicado na inferência.</em>


## Métricas de performance

As métricas de performance tem o propósito de ajudar o usuário a avaliar a performance do modelo. Essas métricas variam de acordo com o tipo de problema, tal como: classificação, regressão, agrupamento, entre outros.

1. BLEU: A métrica BLEU (cujo nome provém de BiLingual Evaluation Understudy) mede a precisão dos n-gramas das sentenças alvo geradas automaticamente em relação a um conjunto de textos de referência


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Dataframe com o texto de entrada, texto de referência, texto traduzido e o score bleu


## Retorno esperado na implantação

Espera-se como retorno numpy arrays contendo os textos traduzidos.
