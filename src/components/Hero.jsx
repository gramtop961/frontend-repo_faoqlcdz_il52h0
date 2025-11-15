import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse"></span>
          Elevating brands to their peak
        </div>

        <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
          Peak experiences in a cosmic web
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">
          We craft immersive 3D and interactive web experiences that feel futuristic, fast, and unforgettable. Built for ambitious teams ready to stand out.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/30 transition-transform hover:scale-[1.02] active:scale-[0.99]">
            Start a project
          </a>
          <a href="#showcase" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/15">
            See our work
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-50%,rgba(168,85,247,0.35),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0114]" />
    </section>
  )
}
