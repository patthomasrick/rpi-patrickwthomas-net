# rpi.patrickwthomas.net

# REST API Documentation

## Design

- `users`
  - users own devices
  - users can add, update, and remove devices
  - users can create and remove users
- `devices` - device to update
  - devices contain status information, including both past and present

## Endpoints

```
/devices
/devices/[id]
/users
/users/[id]
/users/[id]/devices
/users/[id]/devices/[id]
```

### `/users`

#### GET

Get a list of users.

_Parameters:_

- limit - Number of results to get, by default is unlimited.
- offset - Number of results to skip, by default is 0.

_Example request:_

```json
{
  "offset": 0,
  "limit": 2
}
```

_Example response:_

```json
{
  "users": [
    {
      "username": "Patrick"
    },
    {
      "username": "Tommy"
    }
  ]
}
```

<!-- ### Create (`POST`) - `/api/user/create`

Create a new user.

- `username` - current username. An existing user is required
- `password` - password for authentication
- `new_username` - username to create a user for, maximum length is 32 characters
- `new_password` - password for authentication
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

### Test (`GET`) - `/api/user/[username]/test`

Test an auth key's validity.

- `auth_key` - from Login -->
