const Admin = () => {
  return (
    <div className="section-padding">
      {/* Admin UI hidden for now. Uncomment when enabling product management. */}
      {/*
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="rounded-3xl border border-reef/20 bg-white/80 p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
              Admin Portal (Shell)
            </div>
            <h1 className="mt-4 font-display text-3xl">
              Product management coming online soon.
            </h1>
            <p className="mt-3 text-sm text-ink/70">
              This screen is a placeholder UI. Connect a backend or CMS to enable
              authentication and product updates.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="card p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
                Admin Login
              </div>
              <form className="mt-5 grid gap-3 text-sm">
                <input
                  className="rounded-2xl border border-reef/20 bg-white px-4 py-3"
                  placeholder="Email"
                />
                <input
                  type="password"
                  className="rounded-2xl border border-reef/20 bg-white px-4 py-3"
                  placeholder="Password"
                />
              </form>
            </div>
            <div className="card p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-reef/70">
                Product Queue
              </div>
              <div className="mt-5 space-y-3 text-sm text-ink/70">
                {["Amoxyclav 625", "Cardiostat 20", "VitaPlus D3"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-reef/10 bg-white/80 px-4 py-3"
                  >
                    <span>{item}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-reef/70">
                      Edit
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      */}
    </div>
  )
}

export default Admin
