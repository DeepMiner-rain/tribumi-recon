import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Package, Ship, FileText, CreditCard, User, Bell, Settings } from 'lucide-react';

// Mock orders data
const mockOrders = [
  {
    id: 'ORD-001',
    vehicle: 'Toyota Alphard 2.5 SC',
    status: 'In Transit',
    orderDate: '2025-10-15',
    estimatedDelivery: '2025-12-20',
    totalPaid: 280000,
    remainingBalance: 45000,
    currentLocation: 'Port Klang, Malaysia',
    trackingUpdates: [
      { date: '2025-10-15', status: 'Order Confirmed', description: 'Reservation confirmed with deposit' },
      { date: '2025-10-20', status: 'Inspection Complete', description: 'Vehicle inspected and approved' },
      { date: '2025-10-25', status: 'Payment Received', description: 'Full payment processed' },
      { date: '2025-11-05', status: 'Shipped', description: 'Vehicle shipped from Yokohama Port' },
      { date: '2025-11-28', status: 'Arrived', description: 'Arrived at Port Klang' },
      { date: '2025-12-01', status: 'Customs Clearance', description: 'Currently in customs clearance' },
    ]
  },
  {
    id: 'ORD-002',
    vehicle: 'Honda Civic Type R FK8',
    status: 'Reserved',
    orderDate: '2025-11-10',
    estimatedDelivery: '2026-01-25',
    totalPaid: 32000,
    remainingBalance: 288000,
    currentLocation: 'UK - Awaiting Inspection',
    trackingUpdates: [
      { date: '2025-11-10', status: 'Order Confirmed', description: 'Reservation confirmed with deposit' },
      { date: '2025-11-15', status: 'Inspection Scheduled', description: 'Vehicle inspection scheduled for Nov 20' },
    ]
  }
];

const mockNotifications = [
  { id: 1, type: 'update', message: 'Your Toyota Alphard has cleared customs', date: '2025-12-01', read: false },
  { id: 2, type: 'payment', message: 'Balance payment due for Honda Civic Type R', date: '2025-11-18', read: false },
  { id: 3, type: 'info', message: 'New vehicles from Japan auction added to catalog', date: '2025-11-15', read: true },
];

export function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(mockNotifications);

  if (!user) {
    navigate('/');
    return null;
  }

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back, {user.name}!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {/* Stats Cards */}
        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Active Orders</CardTitle>
            <Package className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">2</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">1 in transit, 1 reserved</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Total Invested</CardTitle>
            <CreditCard className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">RM 312,000</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Across all orders</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Pending Balance</CardTitle>
            <FileText className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">RM 333,000</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">To be paid</p>
          </CardContent>
        </Card>

        <Card className="dark:bg-gray-800 dark:border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Notifications</CardTitle>
            <Bell className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{unreadCount}</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Unread messages</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
          <TabsTrigger value="notifications">
            Notifications
            {unreadCount > 0 && (
              <Badge className="ml-2 bg-yellow-500 text-gray-900">{unreadCount}</Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-6">
          {mockOrders.map(order => (
            <Card key={order.id} className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{order.vehicle}</CardTitle>
                    <CardDescription>Order #{order.id} • {order.orderDate}</CardDescription>
                  </div>
                  <Badge 
                    className={
                      order.status === 'In Transit' ? 'bg-blue-600' :
                      order.status === 'Reserved' ? 'bg-yellow-600' :
                      order.status === 'Delivered' ? 'bg-green-600' :
                      'bg-gray-600'
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Financial Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Paid</p>
                    <p className="text-xl">RM {order.totalPaid.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Remaining Balance</p>
                    <p className="text-xl text-yellow-600 dark:text-yellow-500">RM {order.remainingBalance.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Delivery</p>
                    <p className="text-xl">{order.estimatedDelivery}</p>
                  </div>
                </div>

                {/* Current Status */}
                <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                  <Ship className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                  <div>
                    <p className="dark:text-white">Current Location</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{order.currentLocation}</p>
                  </div>
                </div>

                {/* Tracking Timeline */}
                <div>
                  <h3 className="mb-4">Tracking History</h3>
                  <div className="space-y-4">
                    {order.trackingUpdates.map((update, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${
                            index === order.trackingUpdates.length - 1 ? 'bg-yellow-600 dark:bg-yellow-500' : 'bg-gray-400'
                          }`} />
                          {index < order.trackingUpdates.length - 1 && (
                            <div className="w-0.5 h-12 bg-gray-300 dark:bg-gray-600" />
                          )}
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="dark:text-white">{update.status}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{update.description}</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-500">{update.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <FileText className="w-4 h-4 mr-2" />
                    View Documents
                  </Button>
                  {order.remainingBalance > 0 && (
                    <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay Balance
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          {notifications.map(notification => (
            <Card key={notification.id} className={`dark:bg-gray-800 dark:border-gray-700 ${notification.read ? 'opacity-60' : ''}`}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 flex-1">
                    <div className={`w-2 h-2 rounded-full mt-2 ${notification.read ? 'bg-gray-400' : 'bg-yellow-600 dark:bg-yellow-500'}`} />
                    <div className="flex-1">
                      <p className="dark:text-white">{notification.message}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{notification.date}</p>
                    </div>
                  </div>
                  {!notification.read && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => markAsRead(notification.id)}
                    >
                      Mark as read
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="profile">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Full Name</p>
                    <p className="dark:text-white">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="dark:text-white">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p className="dark:text-white">+60 12-345 6789</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Member Since</p>
                    <p className="dark:text-white">November 2025</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" onClick={logout}>
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
