# Welcome to Our Dofus API 

## How to use DofusAPI
 
**First,** 

Clone the project on your desktop : `git clone 
https://github.com/OlivierCrochet/NodeFinalAPI.git` 

**Then**  
You have to install dependencies with: `npm install`

so

Go into your new directory and start the server: `cd NodeFinalAPI`  
`node server.js [port]` 
You can precise on which port you want to start your local server, default is 3000.
To execute methods you need to download Insomnia: `https://insomnia.rest/download/#windows`
Three collections exist: "Character", "Alignement", "Classe".
Four different requests exist: "POST", "GET", "PUT" and "DELETE".

## POST
*This request is used to submit a collection to the Database.*

Put in the URL location:
`localhost:*port*/*nameofcollection*`

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
`localhost:*port*/*nameofcollection*`

## DELETE
*This request is used to delete a character in the Database.*

Put in the URL location:
`localhost:*port*/*nameofcollection*/*idofcharacter*`

## PUT
*This request is used to change an element of a collection.*

Put in the URL location:
`localhost:*port*/*nameofcollection*/*idofcharacter*`

To act on Character:  
`{ "name" : "", "classe" : "", "level" : , "alignement", }`  
To act on Alignement:  
`{ "name" : "", "cite" : "", "level" }`  
To act on Classe:  
`{ "classeName" : "", "spells" : "", "role" : "" }`

There you have all the details and tips to nicely use the API.

Thanks for using our API.
Enjoy !
