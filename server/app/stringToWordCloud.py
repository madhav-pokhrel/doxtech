from app import app
from flask import Flask
from flask import make_response,jsonify,send_file,request
import requests, json, os

from wordcloud import WordCloud

@app.route('/toWordCloud/',methods=['POST'])
def toWordCloud():

    wc = WordCloud(width = 800, height = 800, 
                background_color ='white', 
                min_font_size = 10)

    content = request.json["data"]
    cloud = wc.generate(content)

    cloud.to_file("./app/cloud.jpg")
    return send_file("cloud.jpg", as_attachment=True, attachment_filename='cloud.jpg')

def textListToWordCloud(stringList, fileName):
    wc = WordCloud(width = 800, height = 800, 
                background_color ='white', 
                min_font_size = 10)

    content = ""
    for s in stringList:
        content += s
    cloud = wc.generate(content)

    if (not os.path.exists("./app/wordClouds")):
        os.mkdir("./app/wordClouds")

    return cloud.to_file("./app/wordClouds/"+fileName+".jpg")


