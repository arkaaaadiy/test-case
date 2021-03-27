import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/articles">
          <a>Перейти к статьям</a>
        </Link>
      </main>
    </div>
  )
}
