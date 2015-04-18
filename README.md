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

#Functionalities

1. This app has a working elastic search interface.

2. Fully responsive design.

3. This app has a functionality to create social as well as local accounts. 

4. You can create and store your recipes in mongo.

5. You can search your own recipe as well as lookup some one else's. 

#Roadmap

1. Facebook Integration. Recipes created can be shared to facebook platform. 

2. Much better searching capability with faceted search options. 

3. A food R & D section that can provide analytics about food culture across the world.






