// 主题配置 - Theme Configuration
// 所有颜色相关的 Tailwind classes 都在这里定义，方便统一修改

export const theme = {
  // 主色调 - Primary Colors (黄色/Yellow)
  primary: {
    bg: 'bg-yellow-500',
    bgHover: 'hover:bg-yellow-600',
    text: 'text-yellow-600',
    textDark: 'text-yellow-500',
    border: 'border-yellow-500',
    ring: 'ring-yellow-500',
    from: 'from-yellow-50',
    to: 'to-yellow-100',
  },

  // 强调色 - Accent Colors
  accent: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-900',
  },

  // 状态颜色 - Status Colors
  status: {
    newArrived: 'bg-orange-600', // New Arrived
    available: 'bg-green-600',   // Available
    reserved: 'bg-yellow-600',   // Reserved
    sold: 'bg-gray-600',         // Sold
    inTransit: 'bg-blue-600',    // In Transit
  },

  // 按钮样式 - Button Styles
  button: {
    primary: 'bg-yellow-500 hover:bg-yellow-600 text-gray-900',
    outline: 'border-yellow-500 text-yellow-600 hover:bg-yellow-50',
  },

  // 图标颜色 - Icon Colors
  icon: {
    primary: 'text-yellow-600',
    light: 'text-yellow-500',
  },

  // Badge/标签 - Badges
  badge: {
    primary: 'bg-yellow-500 text-gray-900',
    secondary: 'bg-yellow-100 text-yellow-800',
  },

  // 背景 - Backgrounds
  background: {
    hero: 'bg-gray-900',
    light: 'bg-yellow-50',
    gradient: 'bg-gradient-to-r from-yellow-50 to-yellow-100',
  },
};

// Helper functions to get status color
export function getStatusColor(status: string): string {
  switch (status) {
    case 'New Arrived':
      return theme.status.newArrived;
    case 'Available':
      return theme.status.available;
    case 'Reserved':
      return theme.status.reserved;
    case 'Sold':
      return theme.status.sold;
    case 'In Transit':
      return theme.status.inTransit;
    default:
      return theme.status.available;
  }
}
