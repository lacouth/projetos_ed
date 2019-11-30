class Filmes:
    def __init__(self, nome=None, filmId=None, ano=None):
        self._nome = nome
        self._filmId = filmId
        self._ano = ano

    def set_nome(self, nome):
        self._nome = nome

    def get_nome(self):
        return self._nome

    def set_filmId(self, filmId):
        self._filmId = filmId

    def get_filmId(self):
        return self._filmId

    def set_ano(self, ano):
        self._ano = ano

    def get_ano(self):
        return self._ano
