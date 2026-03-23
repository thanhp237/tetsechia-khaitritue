/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#F25C5C',       // Đỏ cam (màu của viền tròn trang trí)
          orange: '#FF8A66',    // Cam sáng
          yellow: '#FFF8D6',    // Vàng kem nền logo
          peach: '#FFB8B8',     // Hồng đào nhạt (cánh hoa)
          light: '#FFFDF5',     // Trắng ngà kem (nền web)
          dark: '#593232',      // Nâu đậm (cành đào - dùng cho chữ text)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Quicksand', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

