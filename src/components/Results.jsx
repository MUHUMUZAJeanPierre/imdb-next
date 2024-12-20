import React from 'react'

export default function Results({ results }) {
    return (
        <div>
            {results?.map((item) => (
                <div key={item.id}>
                    <h2>{item.original_title}</h2>
                </div>
            ))}
        </div>
    )
}
