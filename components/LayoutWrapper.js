import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import MobileNav from './MobileNav'
import Footer2 from './Footer2'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <SectionContainer>
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="https://nuwe.io" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden lg:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target={link.target ?? '_self'}
                  className={`font-regular p-1 text-2sm ${
                    link.title === 'Blog' ? 'text-gradient-200' : 'text-gray-700'
                  } hover:text-gradient-200 dark:text-gray-100 sm:p-4`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <button className="w-35 mx-2 hidden h-8 rounded-md border border-gradient-200 px-4 font-medium text-gradient-200 dark:ring-offset-black lg:block">
              Login
            </button>
            <button className="w-30 mx-2 hidden h-8 rounded-md bg-gradient-200 py-0 px-4 font-medium text-white  dark:ring-offset-black lg:block">
              Sign up
            </button>
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
      </SectionContainer>
      <Footer2 />
    </div>
  )
}

// 80 183 14

export default LayoutWrapper
