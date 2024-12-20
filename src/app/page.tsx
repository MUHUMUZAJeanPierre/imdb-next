const API_KEY = process.env.API_KEY;
import React from 'react';

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetch';

  const endpoint = genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`;

  const res = await fetch(`https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');

  }

  const data = await res.json();

  console.log(data.results)


  return (
    <div>
      <h1>Home Page</h1>
      {data.results?.map((item) => (
        <div key={item.id}>
          <h2>{item.original_title }</h2>
        </div>
      ))}
    </div>
  );
}
