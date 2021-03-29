# Anywhere Fitness Back-End

### Login / Register

| N | Method | Endpoint                | Description                                                                                                                              |
| - | ------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | POST   | /api/auth/register      | Signs up user for instructor or client role                                                                                              |
| 2 | POST   | /api/auth/login         | Logs in user                                                                                                                             |


### Instructors

| N | Method | Endpoint                | Description                                                                                                                              |
| - | ------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | GET    |  /api/instructors       | Returns all instructors                                                                                                                  |
| 2 | GET    |  /api/instructors:id    | Returns a specific instructor                                                                                                            |
| 3 | POST   | /api/instructors        | Creates an instructor using the information sent inside the request body and returns **the newly created instructor object**             |
| 4 | PUT    | /api/instructors/:id    | Updates the instructor with the specified id using data from the request body and **returns the modified document**, not the original    |
| 5 | DELETE | /api/instructors/:id    | Removes the instructor with the specified id                                                                                             |



