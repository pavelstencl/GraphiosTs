![Logo](https://github.com/pavelstencl/GraphiosTs/blob/master/media/logo.png "Logo")

# GraphiosTs
Typescript GraphQl client built on top of Axios.

## Features
- Communicates with GraphQl server.
- Has all features of Axios js client - [GitHub](https://github.com/axios/axios).
- Uses one GraphQl schema (translated to TS) as single source of truth.
- Guards validity of written query ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example1.gif)).
- Guards changes on a GraphQL schema (with TS-lint).
- Returns strongly typed response based on a query ([Visualisation](https://github.com/pavelstencl/GraphiosTs/blob/master/media/example2.gif)).
- Can be combined with GraphiosTsCmd, which downloads GraphQl schema and transforms it to GraphiosTs compatible TS types.

