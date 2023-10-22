import React from 'react'

export const SecondaryTitle = (props: { title: string }) => {
  return (
    <h2 className="mb-6 text-4xl font-bold text-center">{props.title}</h2>
  )
}