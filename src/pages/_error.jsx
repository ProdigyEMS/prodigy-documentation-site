import * as Sentry from '@sentry/nextjs'
import Error from 'next/error'

/**
 * Custom error page that forwards Pages Router SSR/render errors to Sentry
 * before rendering Next's default error UI.
 *
 * @param {{ statusCode: number }} props - HTTP status code for the error page.
 * @returns {JSX.Element} The default Next.js error UI.
 */
const CustomErrorComponent = (props) => {
  return <Error statusCode={props.statusCode} />
}

/**
 * Captures the underlying exception in Sentry, then defers to Next's default
 * error props.
 *
 * @param {import('next').NextPageContext} contextData - Next.js error context.
 * @returns {Promise<object>} The default error page props.
 */
CustomErrorComponent.getInitialProps = async (contextData) => {
  await Sentry.captureUnderscoreErrorException(contextData)

  return Error.getInitialProps(contextData)
}

export default CustomErrorComponent
