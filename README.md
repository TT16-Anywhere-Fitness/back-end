# Anywhere Fitness Back-End

### Login / Register

| N | Method | Endpoint                | Description                                                                                                                              |
| - | ------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | POST   | /api/auth/register      | Signs up user for instructor or client role                                                                                              |
| 2 | POST   | /api/auth/login         | Logs in user                                                                                                                             |


### Instructors

| N | Method | Endpoint                | Description                                                                                                                              |
| - | ------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | GET    | /api/instructors        | Returns all instructors                                                                                                                  |
| 2 | GET    | /api/instructors/:id    | Returns a specific instructor                                                                                                            |
| 3 | POST   | /api/instructors        | Creates an instructor using the information sent inside the request body and returns **the newly created instructor object**             |
| 4 | PUT    | /api/instructors/:id    | Updates the instructor with the specified id using data from the request body and **returns the modified document**, not the original    |
| 5 | DELETE | /api/instructors/:id    | Removes the instructor with the specified id                                                                                             |


### Clients

| N | Method | Endpoint                | Description                                                                                                                              |
| - | ------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | GET    | /api/clients            | Returns all clients                                                                                                                      |
| 2 | GET    | /api/clients/:id        | Returns a specific client                                                                                                                |
| 3 | PUT    | /api/instructors/:id    | Updates the client information with the specified id using data from the request body and **returns the modified document**              |
| 4 | DELETE | /api/instructors/:id    | Removes the client with the specified id                                                                                                 |


### Classes

| N | Method | Endpoint                | Description                                                                                                                              |
| - | ------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | GET    | /api/classes            | Returns all fitness classes                                                                                                            
|
| 2 | GET    | /api/classes/:id        | Returns a specific fitness class                                                                                                          |
| 3 | POST   | /api/classes            | Creates a fitness class using the information sent inside the request body and returns **the newly created classes object**              |
| 4 | PUT    | /api/classes/:id        | Updates the class with the specified id using data from the request body and **returns the modified document**, not the original        |
| 5 | DELETE | /api/classes/:id        | Removes a fitness class with the specified id                                                                                            |
