from typing import NamedTuple


class Thematic(NamedTuple):
    name: str
    icon: str
    description: str


from thematic_group.concrete import ThematicList


class Group:
    def __init__(self, name):
        self.__name = name
        self.__thematic_list = ThematicList()

    @property
    def name(self):
        return self.__name

    def add(self, thematic: Thematic):
        self.__thematic_list.add(thematic)

    def get_thematic(self):
        iterator = self.__thematic_list.iterator()
        while iterator.has_next():
            yield iterator.next()
