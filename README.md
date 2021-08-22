# rpi.patrickwthomas.net

## REST API Documentation

### Create (`POST`) - `/api/user/create`

Create a new user.

- `username` - username to create a user for, maximum length is 32 characters
- `password` - password for authentication
- response:
  - 200 - not created
  - 201 - created

### Login (`POST`) - `/api/user/[username]/login`

Login to an existing user account.

- `password` - login password
- response
  - 401 - bad password
  - 201 - successful
    - `auth_key` - auth key to use for later requests

### Test (`GET`) - /api/user/[username]/test

Test an auth key's validity.

- `auth_key` - from Login
