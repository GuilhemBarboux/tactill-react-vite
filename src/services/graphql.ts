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

export const SHIP_FIELDS = gql`
  fragment ShipFields on Ship {
    id
    name
    type
    image
    home_port
  }
`;

export const getShip = (id: string) =>
  client
    .query({
      variables: {
        shipId: id,
      },
      query: gql`
        ${SHIP_FIELDS}
        query Ship($shipId: ID!) {
          ships(id: $shipId) {
            ...ShipFields
          }
        }
      `,
    })
    .then((res) => res.data.ship)

export const getShips = () =>
  client
    .query({
      query: gql`
        ${SHIP_FIELDS}
        query Ships {
          ships {
            ...ShipFields
          }
        }
      `,
    })
    .then((res) => res.data.ships)
