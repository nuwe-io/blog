import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Logo from '@/data/logo_white.svg'
import ThemeSwitch from './ThemeSwitch'

export default function Footer2() {
  return (
    <footer
      className="my-20 w-full divide-y bg-gradient-to-l 
from-gradient-100  to-gradient-500 text-gray-100"
    >
      <div className="mx-auto mb-12 max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/4">
            <Logo />
          </div>
          <div className="grid grid-cols-4 pt-2 text-sm lg:w-3/4 xl:grid-cols-4 xl:gap-y-8 xl:gap-x-3">
            <div className="hidden space-y-4 md:block">
              <h3 className="font-regular tracking-wider dark:text-gray-100  xl:text-2md">
                <Link href="/companies">I'm a company </Link>
              </h3>
              {/*<ul className="space-y-1">
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      Features
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a rel="noopener noreferrer" href="#">
                      FAQ
                    </a>
                  </li>
                </ul>*/}
            </div>
            <div className="hidden space-y-4 md:block">
              <h3 className="font-regular tracking-wider dark:text-gray-100 xl:text-2md">
                <Link href="/developers"> I'm a developer </Link>
              </h3>
              {/*<ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>*/}
            </div>
            <div className="hidden space-y-4 md:block">
              <h3 className="font-regular tracking-wider dark:text-gray-100 xl:text-2md">
                <Link href="/press">Press release</Link>
              </h3>
            </div>
            <div className="space-y-4">
              <div className="font-regular text-2md tracking-wider dark:text-gray-100">Contact</div>
              <p>hello@nuwe.io</p>
              <div className="mb-3 flex space-x-4">
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
                <SocialIcon kind="github" href={siteMetadata.github} size="6" />
                <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 mt-2 flex w-full flex-col justify-between xl:flex-row">
          <div className="mb-2 flex w-full space-x-2 text-sm text-white dark:text-white">
            {/* <div>{siteMetadata.author}</div>*/}
            <div>{`© ${new Date().getFullYear()}`}</div>
            {/*<Link href="/">{siteMetadata.title}</Link>*/}
            <div>All Rights Reserved </div>
          </div>
          <div className="mb-2 flex  w-full space-x-2 text-sm tracking-wide text-white dark:text-white xl:justify-end">
            <Link href="/terms">Terms of use</Link>
            <Link href="/">Cookies</Link>
            <Link href="/">Disclaimer</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
