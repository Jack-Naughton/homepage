# Generated by Django 4.0.3 on 2022-04-15 01:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stolen_waffle_game', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='puzzle',
            name='secret_code',
            field=models.TextField(default='jack', max_length=65535),
            preserve_default=False,
        ),
    ]
