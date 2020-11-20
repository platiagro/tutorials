author: Matheus Gustavo Alves Sasso
summary: MariamMT Translator
id: nlp-marianmt-translator
categories: platiagro
environments: Web
status: Published
feedback link: https://github.com/platiagro/tutorials

# Tradutor MarianMT

![Logotipo da PlatIAgro: possui o desenho de duas folhas verdes, uma delas é formada por linhas e pontos, como um gráfico estatístico](img/logo.png)

### Função do componente

Utilização do modelo [MarianMT](https://huggingface.co/transformers/model_doc/marian.html) para tradução. 

* Neste exemplo a tradução é feito do inglês para o português, mas ela pode ser feita em qualquer uma das línguas suportadas pelo MarianMT. 
* Para adaptar para traduções em outras línguas é necessário verificacar se há o modelo pré-treinado disponível no MarianMT e adaptar o truncamento de strings do [spacy](https://spacy.io/usage/models) para o idioma desejado
* A métrica computada é o [sacrebleu](https://https://github.com/mjpost/sacrebleu) 

### Entrada esperada

Espera-se como entrada para o componente uma tabela com entradas textuais.

### Parâmetros

Na tabela abaixo, observamos os parâmetros necessários para que o componente funcione da maneira correta:

| Parâmetro     | Tipo     | Opções        | Descrição                                           |
|:-------------|:--------:|:-------------:|:-----------------------------------------------------|
| Atributo alvo     | `feature` | - | Seu modelo será treinado para prever os valores do alvo. |
| Modo de seleção das features   | `string` |`"incluir"` `"remover"`| Se deseja informar quais features deseja incluir no modelo, selecione a opção 'incluir'. Caso deseje informar as features que não devem ser utilizadas, selecione 'remover'.  |
|Features para incluir/remover no modelo|`feature`| - |Seu modelo será feito considerando apenas as features selecionadas. Caso nada seja especificado, todas as features serão utilizadas|
| Idioma de destino | `string` | `">>fr<<"` `">>es<<"` `">>it<<"` `">>pt<<"` `">>pt_br<<"` `">>ro<<"` `">>ca<<"` `">>gl<<"` `">>pt_BR<<"``">>la<<"` `">>wa<<"` `">>fur<<"` `">>oc<<"` `">>fr_CA<<"` `">>sc<<"` `">>es_ES<<"` `">>es_MX<<"` `">>es_AR<<"` `">>es_PR<<"` `">>es_UY<<"` `">>es_CL<<"` `">>es_CO<<"` `">>es_CR<<"` `">>es_GT<<"` `">>es_HN<<"` `">>es_NI<<"` `">>es_PA<<"` `">>es_PE<<"` `">>es_VE<<"` `">>es_DO<<"` `">>es_EC<<"``">>es_SV<<"` `">>an<<"` `">>pt_PT<<"` `">>frp<<"` `">>lad<<"` `">>vec<<"` `">>fr_FR<<"` `">>co<<"` `">>it_IT<<"` `">>lld<<"` `">>lij<<"` `">>lmo<<"` `">>nap<<"` `">>rm<<"` `">>scn<<"` `">>mwl<<" `| Idioma de destino do alvo. |
|Modelo pré treinado no idioma de origem"|`string`| `"Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU"` `"Helsinki-NLP/opus-mt-ROMANCE-en"` `"Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA"` `"Helsinki-NLP/opus-mt-de-ZH"` `Helsinki-NLP/opus-mt-en-CELTIC"` `"Helsinki-NLP/opus-mt-en-ROMANCE"` `"Helsinki-NLP/opus-mt-es-NORWAY"` `"Helsinki-NLP/opus-mt-fi-NORWAY"` `"Helsinki-NLP/opus-mt-fi-ZH"` `"Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI"` `"Helsinki-NLP/opus-mt-sv-NORWAY"` `"Helsinki-NLP/opus-mt-sv-ZH"` |Nome do modelo entre os modelos pré-treinados|
|Tamanho máximo da sentença de entrada|`integer`| - |Tamanho máximo da sentença de entrada em tokens.|
|Tamanho máximo da sentença de saída|`integer`| - |Tamanho máximo da sentença de saída em tokens.|
|Tamanho do Batch de inferência|`integer`| - |Tamanho do batch aplicado em inferência.|

### Métricas de performance

1. BLEU: A métrica BLEU (cujo nome provém de BiLingual Evaluation Understudy) mede a precisão dos n-gramas das sentenças alvo geradas automaticamente em relação a um conjunto de textos de referência

### Retorno esperado no experimento

1. Dataframe com o texto de entrada, texto de referência, texto traduzido e o score bleu  

### Retorno esperado na implantação

Numpy array contendo os textos traduzidos.
