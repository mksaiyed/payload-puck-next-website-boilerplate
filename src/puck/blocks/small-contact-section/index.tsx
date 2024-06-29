import { ComponentConfig } from '@measured/puck'
import Link from 'next/link'
import React from 'react'

export type SmallContactSectionProps = {
  title: string
  description: string
  site: {
    text: string
    url: string
  }
  email: string
}

export const SmallContactSection: ComponentConfig<SmallContactSectionProps> = {
  label: 'Small Contact Section',
  fields: {
    title: { type: 'text' },
    description: { type: 'textarea' },
    site: {
      type: 'object',
      objectFields: {
        text: { type: 'text' },
        url: { type: 'text' },
      },
    },
    email: { type: 'text' },
  },
  defaultProps: {
    title: 'Wnat to be a part of the solution',
    description:
      'Etiam urna ligula, ultricies nec felis nec, elementum accumsan lacus. Aliquam auctor lorem ipsum. Sed ut pulvinar ante, ac consequat est.',
    site: {
      url: 'https://thefivesolasfoundation.org/',
      text: 'Visit Our Site',
    },
    email: 'contact@thefivesolasfoundation.org',
  },
  render: ({
    title = 'Wnat to be a part of the solution',
    description = 'Etiam urna ligula, ultricies nec felis nec, elementum accumsan lacus. Aliquam auctor lorem ipsum. Sed ut pulvinar ante, ac consequat est.',
    site = {
      url: 'https://thefivesolasfoundation.org/',
      text: 'Visit Our Site',
    },
    email = 'contact@thefivesolasfoundation.org',
  }) => {
    return (
      <div className="flex flex-col gap-5 sm:gap-8 items-center text-center bg-beige text-white text-wrap max-w-[100%] p-12 md:p-16 m-auto">
        <h3 className="text-4xl sm:text-6xl font-leagueGothic">{title}</h3>
        <p className="text-base sm:text-lg">{description}</p>
        <Link
          href={site.url}
          className="text-lg md:text-3xl font-semibold underline underline-offset-[10px]"
        >
          {site.text}
        </Link>
        <p className="text-base sm:text-lg">or email Us</p>
        <Link
          href={`mailto:${email}`}
          className="text-lg md:text-3xl font-semibold underline underline-offset-[10px] text-clip"
        >
          {email}
        </Link>
      </div>
    )
  },
}
