# Welcome to the Dofus API 

This API was made as a student project to learn howto make Rest API with node.js

## How to use DofusAPI


 
**First,** 
You will need Node.js, here's a link to download it : `https://nodejs.org/en/`

**Then**  
Clone the project on your desktop : `git clone 
https://github.com/OlivierCrochet/NodeFinalAPI.git` 

**Finaly**  
Go into your new directory: `cd NodeFinalAPI`  
Install dependencies with: `npm install` 
Start the server: `cd NodeFinalAPI`  
`node server.js [username] [password] [port]` 
You have to precise with which user you want to connect to the database: 
- Administrator, with read an write permission on the database, username: admin, password: passwordAdmin;
- Guest, with a read only acces on the database, username: guest, password: passwordGuest;

Also, you can precise on which port you want to start your local server, default is 3000.
To execute methods you may want to use a rest client, here's a download link to get Insomnia: `https://insomnia.rest/download/#windows`
Three collections exist: "Character", "Alignement", "Classe".
Four different requests exist: "POST", "GET", "PUT" and "DELETE".

## POST
*This request is used to submit a document to the Database.*

Put in the URL location:
`localhost:*port*/*collectionName*`

To act on Character: 
`{ "name" : "",
"classe" : "",
"level" : ,
"alignement", }`
To act on Alignement: 
`{ "name" : "",
"cite" : "",
"level" }`
To act on Classe:
`{ "className" : "",
"spells" : "",
"role" : "" }`

## GET
*This request is used to show the elements of Database about the collection that you want.*

Put in the URL location:
`localhost:*port*/*collectionName*/*[optional]documentId*`



## DELETE
*This request is used to delete a character in the Database.*

Put in the URL location:
`localhost:*port*/*collectionName*/*characterId*`

## PUT
*This request is used to change an element of a collection.*

Put in the URL location:
`localhost:*port*/*collectionName*/*characterId*`

To update a Character:  
`{ "name" : "", "classe" : "", "level" : , "alignement", }`  
To update an Alignement:  
`{ "name" : "", "cite" : "", "level" }`  
To update a Classe:  
`{ "classeName" : "", "spells" : "", "role" : "" }`

There you have all the details and tips to nicely use the API.
in case you want to check out our data manually, open the "json" folder, a copy of each collection is available.

Thanks for using our API.
Enjoy !
