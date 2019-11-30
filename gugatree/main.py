from filmes import Filmes
from Node import Node
from filme_mock import create_mock

def menu():
    opcao1 = "| 1- Inserir filme"
    opcao2 = "| 2- Procurar filme pelo id"
    opcao3 = "| 3- Procurar filme pelo ano de lançamento"
    opcao4 = "| 4- Listar filmes em ordem alfabética"
    opcao5 = "| 5- Dizer a altura da arvore"
    opcao6 = "| 6- Esta balanceada? "
    opcao7 = "| 7- Balancear"
    opcao8 = "| 8- Sair"
    print("+"+("-"*50)+"+")
    print(opcao1.ljust(51," ")+"|")
    print(opcao2.ljust(51," ")+"|")
    print(opcao3.ljust(51," ")+"|")
    print(opcao4.ljust(51," ")+"|")
    print(opcao5.ljust(51," ")+"|")
    print(opcao6.ljust(51," ")+"|")
    print(opcao7.ljust(51," ")+"|")
    print(opcao8.ljust(51," ")+"|")
    print("+"+("-"*50)+"+")
    choice = int(input("~> Opção escolhida: "))
    return choice

def create_filme_and_insert(root):
    nome = input("Nome do filme: ")
    filmId = input("Número do ID: ")
    ano = int(input("Ano de estréia: "))
    filme = Filmes(nome=nome, filmId=filmId, ano=ano)
    root = root.insert(filme)
    return root

def search(root, nome):
    result = root.search_by_name(nome)
    if result is not None:
        print(result.get_nome())
        print(result.get_ano())
        print(result.get_filmId())
    else:
        print("Filme inexistente no catálogo")


def main():
    load = input("Iniciar programa (s/n)")
    if load == "s":
        root = create_mock()
    else:
        root = Node()
    choice = menu()
    while choice != 8:
        if  choice == 1:
            root  = create_filme_and_insert(root)
        elif choice == 2:
            nome = input("Nome do filme: ")
            search(root, nome)
        elif choice == 3:
            ano = int(input("Ano: "))
            root.search_by_year(ano)
        elif choice == 4:
            print("Lista de filmes em ordem alfabética: ")
            root.list_items()
        elif choice == 5:
            print("Altura da arvore: ", root.height(root) - 1)
        elif choice == 6:
            result = root.is_balanced(root)
            if result == True:
                print("Arvore balanceada")
            else:
                print("Arvore não está balanceada")
        elif choice == 7:
            result = root.do_balance()
        choice = menu()
if __name__ == "__main__":
    main()
