from abc import ABC, abstractmethod
from iterator.iterator import Iterator


class List(ABC):
    @abstractmethod
    def iterator(self) -> Iterator: pass
