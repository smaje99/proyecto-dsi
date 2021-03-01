from abc import ABC, abstractmethod
from typing import Any


class Iterator(ABC):
    @abstractmethod
    def next(self) -> Any: pass

    @abstractmethod
    def has_next(self) -> bool: pass
