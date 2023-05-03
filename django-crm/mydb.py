# Install MySQL on computer
# pip install mysql
# pip install mysql-connector-python
# Add mysql db info to DATABASE section in settings.py
# Set up this file
# Run this file
# Run python manage.py migrate

import mysql.connector


dataBase = mysql.connector.connect(
    host = 'localhost',
    user = 'david'
)


# Prepare a cursor object
cursorObject = dataBase.cursor()


# Create a database
cursorObject.execute("CREATE DATABASE django_website")
print('done')