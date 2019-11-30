from filmes import Filmes
class Node:
    def __init__(self, filme=None, left=None, right=None):
        self._filme = filme
        self._left = left
        self._right = right
        self.balance = 0
        
    def set_filme(self, filme):
        self._filme = filme

    def get_filme(self):
        return self._filme

    def set_left(self, left):
        self._left = left

    def get_left(self):
        return self._left

    def set_right(self, right):
        self._right = right

    def get_right(self):
        return self._right

    def __str__(self):
        if self.get_filme() is not None:
            return f"{self.get_filme().get_nome()}"
        return "None"

    def insert(self, filme):
        if self.get_filme() == None:
            self.set_filme(filme)
            return self
        else:
            ponteiro = self
            while True:
                if ponteiro.get_filme().get_nome() > filme.get_nome():
                    if ponteiro.get_left() == None:
                        node = Node(filme)
                        ponteiro.set_left(node)
                        break
                    else:
                        ponteiro = ponteiro.get_left()
                elif ponteiro.get_filme().get_nome() < filme.get_nome():
                    if ponteiro.get_right() == None:
                        node = Node(filme)
                        ponteiro.set_right(node)
                        break
                    else:
                        ponteiro = ponteiro.get_right()
                elif ponteiro.get_filme().get_nome() == filme.get_nome():
                    #self.list_items()
                    print(filme.get_nome())
                    return None
            #print("Balanced", self.is_balanced(self))
            if self.is_balanced(self) == False:
            	self = self.do_balance(self, filme.get_nome())
            	#pass
            return self
            #print("Ola")
    def left_rotation(self, root):
        y = root.get_right()
        z = y.get_left()

        # Perform rotation
        y.set_left(root)
        root.set_right(z)

        # Update heights
        lh = root.height(root.get_left()) - 1
        rh = root.height(root.get_right()) - 1
        root.balance = lh - rh

        lh = root.height(y.get_left()) - 1
        rh = root.height(y.get_right()) - 1
        y.balance = lh - rh

        # Return the new root
        return y


    def right_rotation(self, root):
        y = root.get_left()
        z = y.get_right()

        # Perform rotation
        y.set_right(root)
        root.set_left(z)

        # Update heights
        lh = root.height(root.get_left()) - 1
        rh = root.height(root.get_right()) - 1
        root.balance = lh - rh

        lh = root.height(y.get_left()) - 1
        rh = root.height(y.get_right()) - 1
        y.balance = lh - rh

        # Return the new root
        return y

    def do_balance(self, root, key):
        balance = root.balance
        # Case 1 - Left Left
        if balance > 1 and key < root.get_left().get_filme().get_nome():
            return self.right_rotation(root)

        # Case 2 - Right Right
        if balance < -1 and key > root.get_right().get_filme().get_nome():
            y = self.left_rotation(root)
            return y
        # Case 3 - Left Right
        if balance > 1 and key > root.get_left().get_filme().get_nome():
            root.set_left(root.left_rotation(root.get_left()))
            return self.right_rotation(root)

        # Case 4 - Right Left
        if balance < -1 and key < root.get_right().get_filme().get_nome():
            root.set_right(root.right_rotation(root.get_right()))
            return self.left_rotation(root)

        return root
        
    def list_items(self):
        right = self.get_right()
        left = self.get_left()
        if self is not None and self.get_filme() is not None:
            if left != None:
                left.list_items()
            print(self.get_filme().get_nome())
            if right != None:
                right.list_items()



    def search_by_name(self, name):
        '''
        busca um filme(node) pelo nome passado
        '''
        ponteiro = self
        while True:
            #caso não ache um filme, eventualmente o ponteiro será None
            if ponteiro is None or ponteiro.get_filme() is None:
                return None
            if ponteiro.get_filme().get_nome() == name:
                return ponteiro.get_filme()
            else:
                #move o ponteiro de acordo com a possivel posição (esquerda/direita) do filme(node)
                if ponteiro.get_filme().get_nome() > name:
                    ponteiro = ponteiro.get_left()
                elif ponteiro.get_musica().get_nome() < name:
                    ponteiro = ponteiro.get_right()

    def search(self, name):
        '''
        metodo de busca pelo nome utilizando recursividade
        '''
        left = self.get_left()
        right = self.get_right()
        if self is not None:
            if self.get_filme().get_nome() > name:
                if left is not None:
                    return left.search(name)
            elif self.get_filme().get_nome() < name:
                if right is not None:
                    return right.search(name)
            else:
                return self
    def in_order_successor(self, root):
       	    '''
       	    root: um node da arvore
       	    retorna o sucessor em ordem da arvore passada
       	    '''
       	    p = root.get_right()
       	    while p.get_left() is not None:
       	    	p  = p.get_left()
       	    return p

    def search_by_year(self, year):
        '''
        procura filmes baseado no ano
        '''
        left = self.get_left()
        right = self.get_right()
        if self is not None:
            if left is not None:
                left.search_by_year(year)
            if self.get_filme().get_ano() == year:
                print("Nome: ", self.get_filme().get_nome())
                print("ID do filme: ", self.get_filme().get_filmId())
                print("-=" * 49)
            if right is not None:
                right.search_by_year(year)

    def height(self, root):
        '''
        retorna a altura da arvore passada
        obs: height = height - 1
        '''
        if root is None:
            return 0
        return max(self.height(root.get_right()), self.height(root.get_left())) + 1

    def is_balanced(self, root):
        '''
        retorna true caso a arvore esteja balanceada
        '''
        if root is None:
            return True

        lh = root.height(root.get_left()) - 1
        rh = root.height(root.get_right()) - 1
        root.balance = lh - rh

        if ((abs(lh - rh) <= 1) and self.is_balanced(root.get_left()) is True and self.is_balanced(root.get_right()) is True):
            return True

        return False
if __name__ == "__main__":
   f1 = Filmes(30)
   f2 = Filmes(24)
   f3 = Filmes(40)
   f4 = Filmes(20)
   f5 = Filmes(25)
   f6 = Filmes(35)
   f7 = Filmes(45)
   f8 = Filmes(18)
   f9 = Filmes(44)
   f10 = Filmes(50)
   f11 = Filmes(7)
   f12 = Filmes(19)
   f13 = Filmes(60)
   root = Node()

   root = root.insert(f1)
   root = root.insert(f2)
   root = root.insert(f3)
   #root.insert(f4)
   root = root.insert(f5)
   root = root.insert(f6)
   root = root.insert(f7)
   #root.insert(f8)
   root = root.insert(f9)
   root.list_items()
   print(root.is_balanced(root))
   root = root.remove(25)
   root.list_items()
   print(root.is_balanced(root))
   #root.insert(f10)
   #root.insert(f11)
   #root.insert(f12)
   #root.insert(f13)
   #root.list_items()
   #root.remove_by_name(40)
   #root.list_items()
   #print(root.is_balanced(root))
   #root.remove(24)
   #print(root.is_balanced(root))
   #root.list_items()
   #print(root.search(40))
   #root.list_items()
   #root.remove(20)



