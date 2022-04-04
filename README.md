<p align="center"><img src="https://pasteimg.com/images/2022/02/04/kindpng_5444695.th.png"><br/><h1 align="center">GraphQL Country API</h1></p>
<p align="center">
<a href="https://github.com/jayantur13/GraphQL-Country-API/blob/master/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Code%20Of%20Conduct-Please follow!-green"></a>
<a href="https://github.com/jayantur13/GraphQL-Country-API/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green"></a> 
</p>

This api provides data like code, isocode, area, population and GDP,though the data is collected from a reliable source its accuracy is not gauranteed.So, watch out and make contribute if neccessary with uptodate data by following the Code Of Conduct.Also, read the to-do to know what are the tasks remaining in the project.

# To use this project,install all the dependencies
### Type in terminal (this may not install nodemon)
<code>npm install</code>

# If you need nodemon,install it as a dev dependency
### Type in terminal
`npm install nodemon --save-dev`

# To run the app (server)
## Via node
`npm run start`

## Via nodemon
`npm run devStart`
###### But first,add one the below line in script
`"start": "node server.js"`<br>
`"devStart": "nodemon server.js"`

# Querying using GraphQL
## Example 1. Returns a list of all countries
```
{
    getcountries {
      id
      CountryName
      CountryCode
      IsoCode
      Population
      AreaKmSq
      GDPUSD
    }
}
```

## Example 2. Get data of a single country using id (ID - From 1 to 241)
```
{
    getcountrywid(id: ID) {
      id
      CountryName
      CountryCode
      IsoCode
      Population
      AreaKmSq
      GDPUSD
    }
}
```

## Example 2. Get data of a single country using name (CountryName like India)
```
{
    getcountrywname(CountryName:"India") {
        id
        CountryName
        CountryCode
        IsoCode
        Population
        AreaKmSq
        GDPUSD
    }
}
```

##### There are more query types to retrieve different datas, checkout the project or the GraphQL playground for schema and docs.

>### Note: The project doesn't currently support mutations (updation,deletion and addition of data),this project is hosted on Heroku (Europe),as its free you may get response a little slow

## To Do
- [x] Update the project readme
- [x] Switch to GraphiQL Playground
- [x] Change the query by ID to query by country name (Both available)
- [ ] Themes (once made available by Graphiql)


## Contribute the project 
If you want to contribute the project,please follow the [Contribution Guide](https://github.com/jayantur13/Country-API-GraphQL/blob/master/CODE_OF_CONDUCT.md) and make PR's if necessary

## License
```
MIT License Copyright (c) 2022 jayantur13

Permission is hereby granted, free of
charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice
(including the next paragraph) shall be included in all copies or substantial
portions of the Software.

** Important - If you are going to use this project, please mention me or the source url. Use this project as reference only **

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

#### Last Updated: 04-04-22


