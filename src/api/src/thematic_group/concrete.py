import typing

from iterator.iterator import Iterator
from iterator.aggregation import List
from thematic_group import Thematic


class ThematicIterator(Iterator):
    def __init__(self, thematicList):
        self.__list = thematicList.list
        self.__position = 0

    def next(self) -> Thematic:
        thematic = self.__list[self.__position]
        self.__position += 1
        return thematic

    def has_next(self) -> bool:
        return self.__position < len(self.__cards)


class ThematicList(List):
    def __init__(self):
        self.list = []

    def add(self, thematic: Thematic):
        self.list.append(thematic)

    def iterator(self) -> ThematicIterator:
        return ThematicIterator(self)
