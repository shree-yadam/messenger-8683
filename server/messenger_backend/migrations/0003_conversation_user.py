# Generated by Django 3.2.4 on 2021-09-10 01:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('messenger_backend', '0002_message_read'),
    ]

    operations = [
        migrations.CreateModel(
            name='Conversation_User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('conversation', models.ForeignKey(db_column='conversationId', on_delete=django.db.models.deletion.CASCADE, related_name='convoForUser', related_query_name='convoForUser', to='messenger_backend.conversation')),
                ('user', models.ForeignKey(db_column='user1Id', on_delete=django.db.models.deletion.CASCADE, related_name='+', to='messenger_backend.user')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]