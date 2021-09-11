from django.db import models

from . import utils
from .conversation import Conversation
from .user import User

class Conversation_User(utils.CustomModel):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, db_column="user1Id", related_name="+"
    )
    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        db_column="conversationId",
        related_name="convoForUser",
        related_query_name="convoForUser"
    )