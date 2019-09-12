# GraphiosTs errors

## Code logic

All graphiosTs error has 4 digit code XXYY indicating nature of an error. XX is type of error, YY is increment code of an error.

### Error types

| Code    | Name           | Explanation                                               |
| --------|:--------------:| ---------------------------------------------------------:|
| 01      | Generic error  | Generic errors related to GraphiosTs functionalities      |
| 02      | Parse error    | Request cannot be parsed, because there is some TypeError |
| 03      | Network error  | Responses with status >= 300.                             |
| 04      | Data error     | Response does not contain data or errors                  |
| 05      | Response error | Response returned an error in data field                  |

## Errors explanations

Comming soon