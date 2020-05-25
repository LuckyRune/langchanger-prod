# Generated by Django 2.2.10 on 2020-05-25 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AchievementIcon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images', verbose_name='Изображение')),
                ('tg_hash', models.CharField(blank=True, max_length=120, null=True, verbose_name='Хеш изображения')),
            ],
            options={
                'verbose_name': 'Иконка достижения',
                'verbose_name_plural': 'Иконки достижений',
            },
        ),
        migrations.CreateModel(
            name='OriginFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='files', verbose_name='Файл')),
                ('tg_hash', models.CharField(blank=True, max_length=120, null=True, verbose_name='Хеш файла')),
            ],
            options={
                'verbose_name': 'Файл оригинала',
                'verbose_name_plural': 'Файлы оригионалов',
            },
        ),
        migrations.CreateModel(
            name='OriginIcon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images', verbose_name='Изображение')),
                ('tg_hash', models.CharField(blank=True, max_length=120, null=True, verbose_name='Хеш изображения')),
            ],
            options={
                'verbose_name': 'Иконка оригинала',
                'verbose_name_plural': 'Иконки оригиналов',
            },
        ),
        migrations.CreateModel(
            name='UserIcon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images', verbose_name='Изображение')),
                ('tg_hash', models.CharField(blank=True, max_length=120, null=True, verbose_name='Хеш изображения')),
            ],
            options={
                'verbose_name': 'Аватарка пользователя',
                'verbose_name_plural': 'Аватарки пользователей',
            },
        ),
        migrations.CreateModel(
            name='VersionFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='files', verbose_name='Файл')),
                ('tg_hash', models.CharField(blank=True, max_length=120, null=True, verbose_name='Хеш файла')),
            ],
            options={
                'verbose_name': 'Файл версии перевода',
                'verbose_name_plural': 'Файлы версий переводов',
            },
        ),
    ]
