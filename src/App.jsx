import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SkipLink from '@/components/layout/SkipLink'
import ScrollToTop from '@/components/layout/ScrollToTop'
import BrandLoader from '@/components/layout/BrandLoader'
import HomePage from '@/pages/HomePage'
import StoriesIndexPage from '@/pages/StoriesIndexPage'
import ArticlePage from '@/pages/ArticlePage'
import IndustriesIndexPage from '@/pages/IndustriesIndexPage'
import IndustryDetailPage from '@/pages/IndustryDetailPage'
import LessonsPage from '@/pages/LessonsPage'
import LessonDetailPage from '@/pages/LessonDetailPage'
import NewsletterPage from '@/pages/NewsletterPage'
import NewsletterResetPage from '@/pages/NewsletterResetPage'
import AboutPage from '@/pages/AboutPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <LazyMotion features={domAnimation}>
      {/* Marks where hoisted <title>/<meta>/<link> tags (rendered via Helmet,
          anywhere in the tree) end and real body content begins. React 19
          hoists those tags to the start of the SSR output string; the SSG
          prerender script splits on this marker to move them into <head>. */}
      <span id="ssr-body-boundary" hidden aria-hidden="true" />
      <BrandLoader />
      <SkipLink />
      <ScrollToTop />
      <Header />
      <main id="main-content">
        {/* initial={false}: the very first mount (SSR + hydration) never runs an
            enter transition, so the server-rendered markup and first client
            paint stay pixel-identical -- only real client-side navigations
            (key change on an already-mounted AnimatePresence) animate. */}
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={location.pathname}
            initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/stories" element={<StoriesIndexPage />} />
              <Route path="/stories/:slug" element={<ArticlePage />} />
              <Route path="/industries" element={<IndustriesIndexPage />} />
              <Route path="/industries/:slug" element={<IndustryDetailPage />} />
              <Route path="/lessons" element={<LessonsPage />} />
              <Route path="/lessons/:slug" element={<LessonDetailPage />} />
              <Route path="/newsletter" element={<NewsletterPage />} />
              <Route path="/newsletter/reset" element={<NewsletterResetPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </m.div>
        </AnimatePresence>
      </main>
      <Footer />
    </LazyMotion>
  )
}
