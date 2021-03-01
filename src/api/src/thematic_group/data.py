from typing import NamedTuple

from thematic_group.concrete import ThematicList

class Thematic(NamedTuple):
    name: str
    icon: str
    description: str


class Group(NamedTuple):
    name: str
    thematicList: ThematicList
