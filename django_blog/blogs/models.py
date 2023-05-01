from django.db import models

# A blog post object
class BlogPost(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    date_added = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.text