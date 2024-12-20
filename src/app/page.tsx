const API_KEY = process.env.API_KEY;
import React from 'react';
import Results  from '../components/Results';

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetch';

  const endpoint = genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`;

  const res = await fetch(`https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');

  }

  const data = await res.json();
  const results = data.results


  return (
    <div>
      <Results results = {results} />
    </div>
  );
}
