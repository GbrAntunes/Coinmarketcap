# CoinMarketCap
A aplicação desenvolvida visa apresentar dados comparativos entre diversas criptomoedas. Conta apenas com um front feito em **React**, **Typescript** e **Tailwind CSS**, com a parte do back sendo inteiramente provida pela API da Coingecko. A versão do node utilizada foi a **v16.16**


## Funcionalidades propostas
- [x] Listar as tops criptomoedas
- [x] Listar dados de uma criptomoeda específica
- [x] Buscar criptomoedas por termos de busca
- [x] Tailwind CSS
- [x] Lista de favoritos


## Rotas
`/` - Home contendo tabela de criptomoedas e favoritos

`/crypto/:id` - Página de detalhes da criptomoeda


## Instruções para executar o projeto localmente
1. dentro da pasta raíz, executar `npm i`
2. `npm start` e aguardar até que seja aberta uma aba no seu navegador


## Considerações sobre o desafio

### Tamanho do protótipo
O protótipo foi desenvolvido em um frame de 1920x1080, resolução comum hoje em dia, porém, ao testar em um monitor menor que tenho, o layout começou a apresentar alguns problemas, como por exemplo a barra de navegação ficar sem espaço e já precisar migrar para um menu escondido. Pontuada essa questão, tomei a liberdade de fazer alguns ajustes reduzindo algumas medidas enquanto sigo a regra dos 8px.

### Cores relacionadas às moedas
Também não encontrei na API as cores apresentadas no círculo ao lado do nome das criptomoedas na tabela. Ao final do desafio, comparando com a referência original do protótipo, percebi que originalmente se apresenta a logo da moeda. Portanto, criei apenas o círculo mas não tive de onde tirar as cores. Poderia ter criado um array associando o id da moeda à uma determinada cor, porém acredito que isso iria poluir o código e não iria acrescentar ao propósito do desafio.

### Limite de chamadas à API pública
Dediquei boa parte do meu tempo pensando em como economizar chamadas à API (dado o limite de 10 chamadas por minuto), principalmente para a seção de favoritos. Somado ao fato de executar a aplicação com o Strict Mode que vai realizar as chamadas duplicadas, esse limite logo é atingido. No final das contas, para manter as moedas favoritas atualizadas, não consegui pensar em nada (que fosse seguir os padrões de projeto) para economizar essas chamadas.

### Utilização da ContextAPI
Pela análise que fiz, talvez não fosse necessário a utilização da Context, porém, sei que é importante para a avaliação que o candidato apresente o conhecimento da Context. Somado isso ao fato de que iria deixar o código um pouco mais limpo, sem a necessidade de ficar a todo instante acessando o LocalStorage, optei pela sua utilização.

### Organização do código utilizando o Tailwind CSS
Eu não possuia conhecimento prévio da tecnologia e aprendi para o desafio. Pelo que pesquisei, o mais comum é utilizar o Tailwind inline juntamente com o html e js do componente, porém, o código realmente fica bastante "carregado" e de complexidade maior do que se dividíssemos o css em arquivos separados. Encontrei uma solução pra isso, mas a opinião popular da comunidade é que separar o css em outros arquivos, usando o Tailwind vai contra a proposta inicial da ferramenta que é o utility-first.
