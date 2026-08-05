import Button from '@/components/ui/Button'
import SEO from '@/components/seo/SEO'

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | From Dust to Zenith"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />
      <section className="container-editorial flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-sm uppercase tracking-widest text-zenith-700 dark:text-zenith-400">404</p>
        <h1 className="mt-4 font-display text-4xl font-medium text-content sm:text-5xl">
          This story hasn&rsquo;t been written yet.
        </h1>
        <p className="mt-4 max-w-md font-serif text-lg text-content-secondary">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Let&rsquo;s get you back to a
          turnaround that did happen.
        </p>
        <Button to="/" className="mt-8">
          Back to Home
        </Button>
      </section>
    </>
  )
}
