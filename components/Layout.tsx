import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

type LayoutProps = {
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="p-4 shadow-lg">
      <nav>
        <Link href="/articles">
          {/* text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 */}
          <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            Список статей
          </a>
        </Link>
      </nav>
    </header>
    <main className="conatiner mx-auto">{children}</main>
  </div>
)

export default Layout
