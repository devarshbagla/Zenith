import { m, useReducedMotion } from 'framer-motion'
import { getStoryImage } from '@/data/image-credits'

export default function StoryFigure({ slug }) {
  const reduceMotion = useReducedMotion()
  const image = getStoryImage(slug)
  if (!image) return null

  return (
    <m.figure
      initial={reduceMotion ? undefined : { y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="my-10"
    >
      <div className="overflow-hidden rounded-sm">
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes="(min-width: 1024px) 900px, 100vw"
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
      </div>
      <figcaption className="mt-3 font-sans text-xs leading-relaxed text-content-tertiary">
        {image.alt}. Photo: {image.photographer} / Wikimedia Commons, {image.license}.
      </figcaption>
    </m.figure>
  )
}
