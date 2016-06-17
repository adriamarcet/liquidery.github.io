# liquidery
This will remember your favorite liquids :)

## Bower
If you already have Bower installed:
Access the _dev folder with your terminal or command liner,
and then hit the following command: 

'bower install'

That will install and download all dependencies listed in the file
bower.json located inside _dev folder.

If you want to add some other code or script and keep it alway for the project
you have to install it using --save-dev flag.
As an example:

'bower install jquery --save-dev'

That will add jquery to bower.json and whomever that will download this project
and hit the install command will have jquery avalable from the begining.


If you don´t have Bower installed:
Install it globaly with the following command: 

'npm -g install bower'

To concatenate the resources inside 'components' folder we can use 
grunt concat task and call each file individually.


Refernce information:
https://css-tricks.com/whats-great-bower/
http://blog.teamtreehouse.com/getting-started-bower

## Frontend

## Using grunt
First, cd to the _dev folder and then use the following commands
(they might require SUDO )

npm install -g grunt-cli
npm install grunt
npm install

### Typography
Is setup with typi

Reference: http://zellwk.com/blog/responsive-typography/