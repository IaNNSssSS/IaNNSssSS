# Projeto Final PlugInfo #
## TODO Back-End
### Prioridade Máxima
  1. `otherProducts()` ( retorna um array dos 6 primeiros produtos do array de produtos )
  1. `similarProducts()` ( função que recebe um produto e retorna um array com produtos com a mesma tag/coleção ou tipo)
  1. `filterProducts()` ( retorna um array de produtos que contém a tag/coleção ou categoria passado como parâmetro; obs: )
### Prioridade Média

  #### Vizualização de produtos
  
  1. `recentProducts()` ( retorna 4 produtos mais recentemente vistos pelo usuário; sugestão: usar pilha como estrutura de dados )
  
  1. `searchProducts()` ( retorna um array de produtos que contém a string passada como parâmetro no nome ou na descrição; pode usar filterProducts() para buscar dentro de uma categoria específica )
  #### Carrinho
  1. `addCart()` ( adiciona um produto ao carrinho )
  1. `getCart()` ( retorna o carrinho )
  1. `removeCart()` ( remove um produto do carrinho )
  1. `clearCart()` ( limpa o carrinho )
  1. `checkout()` ( finaliza a compra )


### Prioridade Minima
  1. Implementar o banco de dados
  1. Implementar o login
  1. Implementar o localStorage
  1. useEffect() no array de produtos para atualizar o localStorage
  1. Puxar os dados do banco de dados/localStorage para o array de produtos
  
## TODO Front-End

## Prioridade Máxima
  1. Página de Produtos
  1. DropDownMenu para os filtros
  1. Consertar header para o mobile
  

## Padrão de commit

Os commits devem ser semânticos e seguir o seguinte padrão:

```
feat: Adiciona gatinho dançante
^--^   ^------------^ -> Mensagem no imperativo
 *-> Tipos: chore, docs, feat, fix, refact, style or test.
```

Os tipos disponíveis são:

- `docs`: se refere à alterações na documentação.
- `feat`: se refere à implementação de features.
- `fix`: se refere à uma correção.
- `refact`: se refere à refatoração de uma feature previamente implementada.
- `style`: se refere à uma mudança estética no código. Por exemplo: alterar a indentação de espaço para tab.
##


#1 INSTRUÇÕES DE INSTALAÇÃO:
- Ter o Node.Js instalado
- Executar `npm install` após clonar o repositório

#2 INICIAR O PROJETO:
- `npm run dev`

#3 ORGANIZAÇÃO DE BRANCHS
- Para cada implementação, crie uma branch nova com o padrão dos tipos disponíveis e o nome do que será implementado;
  Exemplo: [feat/gatinho-dancante], [refact/gatinho-pulante];
- Para criar uma branch, use: git checkout -b x-nome-da-branch;
- Após criar a branch pra sua implementação, faça o que quiser nela, pois ainda não está na branch main, logo, não
  oferece risco à branch de produção;
- Depois de terminar a branch que você estava fazendo, dê git push, solicite o merge da sua branch e marque os outros devs do projeto como revisores do código, uma vez aprovado por TODOS, poderá subir a sua branch pra 'prod', onde será testada para então subir pra main;
- *NÃO CODAR NA PASTA MAIN!*

#4 MANTENDO SUA BRANCH ATUALIZADA
- Sempre que houver uma nova atualização, use "git pull origin main";
- Isso serve para que nossas branchs não tenham conflito, uma vez que pode ocorrer de alguém atualizar o código e
  você ainda não ter essa atualização na sua máquina, e vice-versa.