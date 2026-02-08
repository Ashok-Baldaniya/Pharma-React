import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="section-padding">
      <div className="mx-auto max-w-4xl rounded-3xl border border-reef/20 bg-white/80 p-10 text-center">
        <h2 className="font-display text-3xl">Page not found</h2>
        <p className="mt-3 text-sm text-ink/70">
          The page you requested does not exist. Let’s get you back on track.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-reef px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
