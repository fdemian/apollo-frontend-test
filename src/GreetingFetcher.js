import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const query = gql`
{
  hello(name: "Son Goku")
}
`;

const GreetingFetcher = () => {

  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <h1>{data.hello}</h1>;

}

export default GreetingFetcher;
