# Sample express ts

This application is made for the single purpose of having 2 endpoints, and
setting a few expected scenarios (server not responding with 500, etc.)

## Usage

Application is hosted on heroku. To use live, the base url is:
`https://vast-citadel-04009.herokuapp.com/`

### Endpoints

| endpoint    | result                          |
| ----------- | ------------------------------- |
| /crash      | sends 500 internal server error |
| /complete   | sends 200 OK                    |
| /badRequest | gives a 400 bad error           |
| /notFOund   | gives a 404 not found error     |
| /forbidden  | gives a 403 forbidden error     |
| /teapot     | gives a 418 I'm a teapot error  |

## Contribute

This repository is open for changes. Feel free to make changes and send a
pull request.
