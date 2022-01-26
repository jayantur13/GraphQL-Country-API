//26-01-22 by Jayant Navrange

const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql').graphqlHTTP
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql')
const expressPlayground = require('graphql-playground-middleware-express')
  .default
const data = require('./data')//get data from data.js
const PORT = process.env.PORT || 8800
/*For serving static html page*/
app.use(express.json());
app.use(express.static("express"));
const path = require('path')

//Some host or os needs these two lines to start working
app.set('port', PORT);
app.use(express.static(__dirname + '/public'));

let countries = null
countries = data.getCountryData()

//Construct a schema, using GraphQL schema language
const RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    getcountries: {
      type: new GraphQLList(CountryType),//List
      description: 'Data of all countries',
      resolve: () => countries
    },
    getcountry: {
      type: CountryType,//Single
      description: 'Data of a single country',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => countries.find(country => country.id === args.id)
    },
    getnamecodes: {
      type: new GraphQLList(CwithcodeType),//List
      description: 'Name & country code of all countries',
      resolve: () => countries
    },
    getnamecode: {
      type: CwithcodeType,//Single
      description: 'Name & country code of single country',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => countries.find(country => country.id === args.id)
    },
    getnameisocodes: {
      type: new GraphQLList(CwithisocodeType),//List
      description: 'Name & Isocode of all countries',
      resolve: () => countries
    },
    getnameisocode: {
      type: CwithisocodeType,
      description: 'Name & Isocode of single country',//Single
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => countries.find(country => country.id === args.id)
    },
    getnamegdps: {
      type: new GraphQLList(CwithGDPType),//List
      description: 'Name & GDP of all countries',
      resolve: () => countries
    },
    getnamegdp: {
      type: CwithGDPType,//Single
      description: 'Name & GDP of single country',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => countries.find(country => country.id === args.id)
    },
    getpags: {
      type: new GraphQLList(Cpagtype),//List
      description: 'Name,area,population & GDP of countries',
      resolve: () => countries
    },
    getpag: {
      type: Cpagtype,
      description: 'Name,area,population & GDP of single country',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => countries.find(country => country.id === args.id)
    }
  })
})

//For single and data of all countries
const CountryType = new GraphQLObjectType({
  name: 'Country',
  description: 'Returns all/single country\'s data',
  fields: () => ({
    id: { type: GraphQLInt },
    CountryName: { type: GraphQLString },
    CountryCode: { type: GraphQLString },
    IsoCode: { type: GraphQLString },
    Population: { type: GraphQLString },
    AreaKmSq: { type: GraphQLString },
    GDPUSD: { type: GraphQLString }
  })
})

//For country name & code,single and all data
const CwithcodeType = new GraphQLObjectType({
  name: 'Code',
  description: 'Returns all/single country name with code',
  fields: () => ({
    id: { type: GraphQLInt },
    CountryName: { type: GraphQLString },
    CountryCode: { type: GraphQLString }
  })
})

//For country name & isocode,single and all data
const CwithisocodeType = new GraphQLObjectType({
  name: 'Isocode',
  description: 'Returns all/single country name with isocode',
  fields: () => ({
    id: { type: GraphQLInt },
    CountryName: { type: GraphQLString },
    IsoCode: { type: GraphQLString }
  })
})

//For country name & GDP,single and all data
const CwithGDPType = new GraphQLObjectType({
  name: 'GDP',
  description: 'Returns all/single country name with GDP',
  fields: () => ({
    id: { type: GraphQLInt },
    CountryName: { type: GraphQLString },
    GDPUSD: { type: GraphQLString }
  })
})

//For name, population, area and Gdp
const Cpagtype = new GraphQLObjectType({
  name: 'PAG',
  description: 'Returns all/single country name with population,area & gdp',
  fields: () => ({
    id: { type: GraphQLInt },
    CountryName: { type: GraphQLString },
    Population: { type: GraphQLString },
    AreaKmSq: { type: GraphQLString },
    GDPUSD: { type: GraphQLString }
  })
})


const schema = new GraphQLSchema({
  query: RootQuery
  //No mutation i.e insert,update,delete
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: false
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/info.html'));
})

app.get('/api', expressPlayground({ endpoint: '/graphql' }))

app.get('*', (req, res) => {
  res.status(404).send('Unfortunately,this page is not available..')
})

app.listen(PORT, () => console.log(`Server started at ${PORT}`))