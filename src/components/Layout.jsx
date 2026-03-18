import { NavLink, Outlet } from 'react-router-dom'
import { Home, Users, Settings } from 'lucide-react'

const NAV = [
  { to: '/',         icon: Home,     label: 'Pry',  end: true  },
  { to: '/groups',   icon: Users,    label: 'Grp',  end: false },
  { to: '/settings', icon: Settings, label: 'Stns', end: false },
]

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col max-w-lg mx-auto">
      <main className="flex-1 pb-16">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-bg border-t border-rim z-10">
        <div className="max-w-lg mx-auto border-b border-rim flex items-center justify-center h-6">
          <span className="font-mono text-[10px] uppercase tracking-widest text-t3">pry</span>
        </div>
        <div className="max-w-lg mx-auto flex items-end">
          {NAV.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex-1 flex flex-col items-center gap-1 py-3 transition-colors ${
                  isActive ? 'text-gold' : 'text-t3 hover:text-t2'
                }`
              }
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
              <span className="text-[10px] font-mono uppercase tracking-widest">{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
