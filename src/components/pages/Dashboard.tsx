import { useState } from 'react'
import { User, Package, Settings, LogOut, Calendar, MapPin } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Input from '../ui/Input'
import { useAuth } from '../../contexts/AuthContext'
import { toast } from 'sonner'

export default function Dashboard() {
  const { user, isAuthenticated, login, logout } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      toast.success('Welcome back!')
    } catch (error) {
      toast.error('Login failed')
    }
  }
  
  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
  }
  
  // Mock orders data
  const orders = [
    {
      id: 'ORD-2024-001',
      vehicle: 'Toyota Alphard 2.5 SC',
      status: 'Shipping',
      date: '2024-11-15',
      estimatedArrival: '2024-12-20',
    },
    {
      id: 'ORD-2024-002',
      vehicle: 'Honda Vezel Hybrid Z',
      status: 'Customs Clearance',
      date: '2024-10-20',
      estimatedArrival: '2024-12-10',
    },
  ]
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="w-full max-w-md px-4">
          <Card>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-4">
                <User className="w-8 h-8 text-yellow-500" />
              </div>
              <h2 className="mb-2">Sign In</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Access your account to track orders and manage reservations
              </p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            
            <p className="text-xs text-center mt-4 text-gray-500">
              Demo: Use any email and password to sign in
            </p>
          </Card>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">My Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back, {user?.name}!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <User className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h4>{user?.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-yellow-500/10 text-yellow-500">
                  <Package className="w-5 h-5" />
                  My Orders
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Settings className="w-5 h-5" />
                  Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </nav>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <Package className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Active Orders</p>
                    <p className="text-2xl">{orders.length}</p>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <Calendar className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Next Arrival</p>
                    <p className="text-2xl">Dec 10</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Orders */}
            <div>
              <h3 className="mb-4">My Orders</h3>
              <div className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} hover>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="mb-1">{order.vehicle}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Order: {order.id}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm">
                        {order.status}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        Order Date: {order.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        ETA: {order.estimatedArrival}
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      Track Order
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}