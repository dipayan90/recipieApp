# recipieApp
This is a one stop app to see recipes for different food across the world. !!

You can find the recipes at: 
http://openrecip.es/

# Pre-Requisites

1. You should have mongoDB installed on your system and have the mongod process running ready to accept connections. 

2. You should have an elastic search instance running in your system. I am using a docker container to run elastic search. 

To learn more got to: https://github.com/dockerfile/elasticsearch

You might have to change the elasticsearch.yml file to enable CORS headers. 

#Installation Instructions

1. npm install

If you get EACESS error then you might have to run the command as an administrator.

2. bower install

3. grunt serve.

This will start the app and start the server. 

Note: Download the file from: http://openrecip.es/ and extract it.

After you extract the JSON add the JSON to server/components/uploads/.






