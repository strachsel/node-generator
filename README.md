#Node-Generator

I wrote a small app skeleton based on the way I like to structure Node APIs.
This generator was written with a couple things in mind.

The flow of data: 
```
app.js > routes.js > controllers > models > dal.js
```

1. Everything is written to be as dumb and unassuming as possible. The goal is to keep everything only knowing about the 
things it needs to operate.  The model(s) only need to know about the DAL, the DAL only needs to know about the connection
 to the database, etc.
2. It's super important to require based on the object hierarchy. As in, do not require a specific model file. Require the
object exported in the /models/index.js file. Same with Controllers. Same with Middleware. Things stay neat and tidy and
enjoyable if you require the parent object and not the children.
3. This is super simple. In an "advanced" example I'd probably include a services layer, rather than having the controllers
talk directly to the models. If that happened, obviously, the flow would turn into:
```
app.js > routes.js > controllers > services > models > dal.js
```

ToDo:

 - Implement a services layer
 - Actually implement a real database
 - Write in Promise styling
 - Delete this stupid bird example
