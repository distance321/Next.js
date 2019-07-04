import React from 'react'
import NextHead from 'next/head'

interface Iprops {
  title ?: string,
  description ?: string,
}

const defaultDescription = ''

const Head = (props : Iprops) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || '数制科技--专注行业的工业互联网整体解决方案提供商'}</title>
    <meta name="keywords" content="" />
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="renderer" content="webkit" />
    <link rel="icon" href="/static/favicon.ico" />
    <script src="/static/lib/flexible.js" />
  </NextHead>
)

export default Head