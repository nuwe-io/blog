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
            <Link href="/" aria-label={siteMetadata.headerTitle}>
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
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="link-underline p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <button className="w-35 mx-2 hidden h-8 rounded-md border border-primary-500 px-4 font-medium text-primary-500 dark:ring-offset-black md:block ">
              Login
            </button>
            <button className="w-30 mx-2 hidden h-8 rounded-md bg-primary-500 py-0 px-4 font-medium text-white  dark:ring-offset-black xl:block">
              Sing up
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

export default LayoutWrapper
