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

All endpoints require some user authentication, whether it be a username/password pair or an authentication key. These are to always be passed _in the request header_.

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

#### POST

Create a new user. Requires an existing user account.

_Parameters:_

- `new_username` - New account username.
- `new_password` - New account password.

_Example request:_

```json
{
  "username": "Patrick2",
  "password": "password123"
}
```

_Example response:_

```
201: CREATED
```

#### PUT

Update a user's attributes. Only supplied parameters will be changed.

_Parameters:_

- `...` - Values to change and their new values.

_Example request:_

```json
{
  "auth_key": "abc123"
}
```

_Example response:_

```
200: OK
```

#### DELETE

Remove a user.

_Parameters:_

- `username` - User to delete.

_Example request:_

```json
{
  "username": "Patrick2"
}
```

_Example response:_

```
202: ACCEPTED
```
