import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
})

export const getShip = (id: string) =>
  client
    .query({
      variables: {
        shipId: id,
      },
      query: gql`
        query Ship($shipId: ID!) {
          ship(id: $shipId) {
            name
            type
            image
            home_port
          }
        }
      `,
    })
    .then((res) => res.data.ship)

export const getShips = () =>
  client
    .query({
      query: gql`
        query Ships {
          ships {
            id
            name
            type
            image
            home_port
          }
        }
      `,
    })
    .then((res) => res.data.ships)
