# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-03 03:32
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_auto_20160903_0257'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ingredient',
            name='unit',
        ),
    ]