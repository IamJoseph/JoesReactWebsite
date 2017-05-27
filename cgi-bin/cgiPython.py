#!/usr/bin/python

import cgi, cgitb
import json
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

print "Content-Type: text/html\n"

class Postman:
    def do_Post(self):
        formData = cgi.FieldStorage()
        return formData

form = Postman().do_Post();
msg = MIMEMultipart()
msg['Subject'] = form.getvalue("name")
msg['From'] = form.getvalue("email")
msg['To'] = "lostintheuniverse0@gmail.com"
part = MIMEText('text', 'plain')
message = form.getvalue("message")
part.set_payload(message)
msg.attach(part)
print msg['To']
session = smtplib.SMTP('localhost')
session.sendmail(msg['From'], msg['To'], msg.as_string())
session.quit()
