// https://studio.apollographql.com/public/star-wars-swapi/home?variant=current
import { GraphQLClient, request, gql } from 'graphql-request'
import {StarWarsMovie} from "../types";

const BASE_URL = `https://swapi-graphql.netlify.app/.netlify/functions/index`

interface getStarWarsMoviesProps {
    abortSignal?: AbortSignal;
}

export function getStarWarsMovies({abortSignal}: getStarWarsMoviesProps) {
    const query = gql`
        {
            allFilms {
                edges {
                    node {
                        title
                        id
                    }
                }
            }
        }
    `

    const client = new GraphQLClient(BASE_URL)
    return client.request({document: query, signal: abortSignal as never }).then(data => {
        return data.allFilms.edges.map((edge: { node: StarWarsMovie }) => edge.node)
    });
}


