from django.core.mail import send_mail
from django.conf import settings

def send_contact_email(subject, message):
    send_mail(
        subject,  # Assunto do e-mail
        message,  # Corpo do e-mail
        settings.EMAIL_HOST_USER,  # from
        ["sitelia2lab@gmail.com"],  # to
        fail_silently=False,
    )
