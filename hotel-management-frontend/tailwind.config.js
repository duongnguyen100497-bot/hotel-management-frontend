/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Navy Blue – màu chủ đạo
        navy: {
          50: '#f1f5fb',
          100: '#dde7f5',
          200: '#b9cdea',
          300: '#8aa9da',
          400: '#5a82c6',
          500: '#3a63ae',
          600: '#2c4d90',
          700: '#243f75',
          800: '#1d3260',
          900: '#14234a',
          950: '#0c1630',
        },
        // Xanh dương nhạt – màu nhấn / nền phụ
        sky: {
          50: '#f0f8ff',
          100: '#e0f0fe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#38acf6',
          500: '#0e91e7',
        },
        // Website khách hàng (Customer) – chỉ thêm mới, không ảnh hưởng navy/sky của Admin
        brand: { DEFAULT: '#172554', light: '#1e3a8a', dark: '#0f1a3d' },
        accent: { DEFAULT: '#2563EB', hover: '#1d4ed8', soft: '#eff6ff', tint: '#dbeafe' },
        surface: '#F8FAFC',
        ink: '#0F172A',
        muted: '#64748B',
        success: '#16A34A',
        warning: '#F59E0B',
        danger: '#DC2626',
        // Màu trạng thái phòng
        status: {
          available: '#16a34a',
          occupied: '#dc2626',
          reserved: '#d97706',
          cleaning: '#0891b2',
          maintenance: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(20, 35, 74, 0.06), 0 4px 16px rgba(20, 35, 74, 0.06)',
        'card-hover': '0 4px 8px rgba(20, 35, 74, 0.08), 0 12px 28px rgba(20, 35, 74, 0.10)',
        soft: '0 2px 12px rgba(15, 23, 42, 0.06)',
        lift: '0 12px 32px -6px rgba(23, 37, 84, 0.20)',
      },
      borderRadius: {
        xl: '0.875rem',
      },
    },
  },
  plugins: [],
};
