author: Lucas Nunes Sequeira
summary: Translator
id: translator
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks

# Tradutor

## Função do componente

Utilização de modelos do tipo [MarianMT](https://huggingface.co/transformers/model_doc/marian.html) para tradução.

* Neste exemplo a tradução é feita do português para o francês, mas ela pode ser feita em qualquer um dos pares de idiomas disponíveis no componente.
* As métricas computadas são o [BLEU](https://en.wikipedia.org/wiki/BLEU) e o [ROUGE](https://en.wikipedia.org/wiki/ROUGE_%28metric%29).

Negative
: Este componente utiliza recursos da internet, portanto é importante estar conectado à rede para que este componente funcione corretamente.

## Entrada esperada

Espera-se como entrada para o componente uma tabela com uma coluna de interesse para tradução, em que cada campo corresponde a um texto que será traduzido.

<img src="img/translator/input_dataset.png" width="800">

## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Coluna para aplicar o Tradutor**: `string` <span style="color:red">(Obrigatório)</span>.<br>
<em>Esta coluna será utilizada para traduzir os textos. Deve ser uma coluna existente do dataset.</em>

- **Coluna para salvar os textos traduzidos**: `string` <span style="color:red">(Obrigatório)</span>.<br>
<em>Esta coluna será utilizada para salvar as traduções dos textos. Deve ser uma coluna inexistente do dataset.</em>

- **Coluna para avaliar os textos traduzidos**: `string` <span>(Opcional)</span>.<br>
<em>Esta coluna será utilizada para avaliar as traduções dos textos. É uma coluna opcional.</em>

- **Idioma Fonte**: `string`, {`"africâner"`, `"alemão"`, `"árabe"`, `"catalão"`, `"chinês"`, `"dinamarquês"`, `"espanhol"`, `"francês"`, `"frísio"`, `"holandês"`, `"híndi"`, `"inglês"`, `"islandês"`, `"italiano"`, `"japonês"`, `"latim"`, `"norueguês"`, `"português"`, `"romeno"`, `"sueco"`, `"zulu"`}, padrão: `"português"` <span style="color:red">(Obrigatório)</span>.<br>
<em>Idioma dos dados de entrada.</em>

- **Idioma Alvo**: `string`, {`"africâner"`, `"alemão"`, `"árabe"`, `"catalão"`, `"chinês"`, `"dinamarquês"`, `"espanhol"`, `"francês"`, `"frísio"`, `"holandês"`, `"híndi"`, `"inglês"`, `"islandês"`, `"italiano"`, `"japonês"`, `"latim"`, `"norueguês"`, `"português"`, `"romeno"`, `"sueco"`, `"zulu"`}, padrão: `"inglês"` <span style="color:red">(Obrigatório)</span>.<br>
<em>Idioma dos dados de saída. Deve ser um idioma diferente do Idioma Fonte.</em>

- **Dispositivo**: `string`, {`"cuda"`, `"cpu"`}, padrão: `"cuda"` <span style="color:red">(Obrigatório)</span>.<br>
<em>Tipo de dispositivo para efetuar as traduções. Caso selecionado a opção `"cuda"` e ela não estiver disponível na máquina, automaticamente será transferido para `"cpu"`.</em>

- **Batch Size**: `integer`, padrão: `4` <span style="color:red">(Obrigatório)</span>.<br>
<em>Tamanho dos lotes de dados para tradução.</em>


## Métricas de performance

As métricas de performance tem o propósito de ajudar o usuário a avaliar a performance do modelo. Essas métricas variam de acordo com o tipo de problema, tal como: classificação, regressão, agrupamento, entre outros.

1. [BLEU](https://en.wikipedia.org/wiki/BLEU): A métrica BLEU (cujo nome provém de BiLingual Evaluation Understudy) mede a precisão dos n-gramas das sentenças alvo geradas automaticamente em relação a um conjunto de textos de referência

2. [ROUGE](https://en.wikipedia.org/wiki/ROUGE_%28metric%29)-L: A métrica ROUGE (cujo nome provém de Recall-Oriented Understudy for Gisting Evaluation) identifica a co-ocorrência das substrings mais longas definidas por n-gramas entre as sentenças alvo geradas automaticamente e um conjunto de textos de referência.


## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Dataframe com o texto de entrada, texto de referência (opcional) e o texto traduzido.

<img src="img/translator/output_dataset.png" width="800">

2. Uma tabela com a pontuação obtida para cada texto pelas métricas BLEU e ROUGE-L caso seja informado a coluna de avaliação.

<img src="img/translator/metrics.png" width="300">

## Entrada esperada na implantação

Na implantação, espera-se uma requisição do tipo `POST` com os dados em formato `JSON`, com os campos `ndarray` e `names` seguindo a mesma estrutura dos dados utilizados na experimentação, em que `ndarray` refere-se aos valores, e `names` aos nomes das colunas de entrada. Um exemplo de uso seria:

```bash
$ curl --header "Content-Type: application/json" https://URL-DO-MODELO-IMPLANTADO -d "{"data":{"ndarray":[[1, "A bola é um objeto utilizado para lazer e em diversos desportos."]], "names": ["index", "text"]}}"
```

## Retorno esperado na implantação

Espera-se como retorno um objeto `JSON` contendo os campos `ndarray` e `names`, referentes ao array de valores produzidos e ao nome das colunas após a aplicação. Um exemplo de saída seria:

```json
{
    "data":
        {
            "ndarray":[[1, "A bola é um objeto utilizado para lazer e em diversos desportos.", "Le ballon est un objet utilisé pour les loisirs et dans divers sports."]], 
            "names": ["index", "text", "translated_text"]
        }
}
```
