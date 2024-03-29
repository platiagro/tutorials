author: Lucas Nunes Sequeira
summary: Chunker
id: chunker
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials
tags: platiagro-tasks

# Chunker

## Função do componente

Separação de textos em partes menores, mantendo uma porção de sobreposição.

* Neste exemplo a aplicação do Chunker é feita separando as expressões considerando as palavras, mas também pode ser realizada considerando períodos. Os períodos (usualmente limitados ao ponto final `.`) são definidos pela aplicação do [NLTK](https://www.nltk.org/api/nltk.tokenize.html), que é uma biblioteca de linguagem natural.
* No exemplo são considerados os parâmetros `Chunk Size` e `Chunk Overlap` sendo 10 e 4, respectivamente.

## Entrada esperada

Espera-se como entrada para o componente uma tabela com uma coluna de interesse para a aplicação do Chunker, em que cada campo corresponde a um texto que será quebrado em partes menores.

<img src="img/chunker/input_dataset.png" width="800">

## Parâmetros

A seguir são listados todos os parâmetros utilizados pelo componente:

- **Coluna para aplicar o Chunker**: `string` <span style="color:red">(Obrigatório)</span>.<br>
<em>Esta coluna será utilizada para criar os chunks de textos. Deve ser uma coluna existente do dataset.</em>

- **Coluna para salvar os chunks gerados**: `string` <span style="color:red">(Obrigatório)</span>.<br>
<em>Esta coluna será utilizada para salvar os chunks de textos. Deve ser uma coluna inexistente do dataset.</em>

- **Chunkenizer**: `string`, {`"word"`, `"sentence"`}, padrão: `"word"` <span style="color:red">(Obrigatório)</span>.<br>
<em>Tipo de chunkenizer para aplicar nos dados; `"word"` separa textos em palavras, `"sentence"` separa em sentenças.</em>

- **Chunk Size**: `integer`, padrão: `96` <span style="color:red">(Obrigatório)</span>.<br>
<em>Tamanho das janelas criadas pelo Chunker.</em>

- **Chunk Size**: `integer`, padrão: `64` <span style="color:red">(Obrigatório)</span>.<br>
<em>Tamanho da sobreposição das janelas criadas pelo Chunker.</em>

- **Replicar Dados**: `string`, {`"sim"`, `"não"`}, padrão: `"sim"` <span style="color:red">(Obrigatório)</span>.<br>
<em>Optando por replicar os dados, para cada chunk criado a partir de um campo de texto de uma linha da tabela, todos os dados desta linha serão replicados de acordo com a quantidade de chunks produzidos.</em>

## Retorno esperado na experimentação

O retorno durante a experimentação ajuda o usuário a analisar tanto métricas distintas de forma visual, como a distribuição dos dados e os dados brutos ao final da execução. Sendo assim, é possível visualizar diversos retornos para este componente como os listados a seguir:

1. Dataframe com o texto de entrada e os chunks produzidos (Replicando os dados).

<img src="img/chunker/output_dataset_1.png" width="800">

2. Dataframe com o texto de entrada e os chunks produzidos (Sem replicar os dados).

<img src="img/chunker/output_dataset_2.png" width="800">

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
            "ndarray":[[1, "A bola é um objeto utilizado para lazer e em diversos desportos.", "A bola é um objeto utilizado para "], [1, "A bola é um objeto utilizado para lazer e em diversos desportos.", "lazer e em diversos desportos."]], 
            "names": ["index", "text", "text_chunks"]
        }
}
```
