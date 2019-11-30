from filmes import Filmes
from Node import Node

def create_mock():
    f1 = Filmes(nome="Tonari no Totoro", filmId="1", ano=1988)
    f2 = Filmes(nome="Kurenai no buta", filmId="2", ano=1992)
    f3 = Filmes(nome="Sen to Chihiro no kamikakushi", filmId="3", ano=2001)
    f4 = Filmes(nome="Tenkû no shiro Rapyuta",filmId="4", ano=1986)
    f5 = Filmes(nome = "Gake no ue no Ponyo", filmId="5", ano=2008)
    f6 = Filmes(nome="Pulp Fiction", filmId="6", ano=1994)
    f7 = Filmes(nome="From Dusk Till Dawn", filmId="7", ano=1996)
    f8 = Filmes(nome="Reservoir Dogs", filmId="8", ano=1992)
    f9 = Filmes(nome="Planeta Terror", filmId="9", ano=2007)
    root = Node()
    root = root.insert(f1)
    root = root.insert(f2)
    root = root.insert(f3)
    root = root.insert(f4)
    root = root.insert(f5)
    root = root.insert(f6)
    root = root.insert(f7)
    root = root.insert(f8)
    root = root.insert(f9)
    return root
