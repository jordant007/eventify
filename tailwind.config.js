/** @type {import('tailwindcss').Config} */ 
module.exports = { 
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  theme: { 
    extend: { 
      colors: { 
        'dark-background': 'var(--dark-background)', 
        'accent-black': 'var(--accent-black)', 
        'primary-gold': 'var(--primary-gold)', 
        'secondary-gold': 'var(--secondary-gold)', 
        'text-white': 'var(--text-white)', 
      }, 
      spacing: { 
        'small': 'var(--spacing-small)', 
        'medium': 'var(--spacing-medium)', 
        'large': 'var(--spacing-large)', 
        'xlarge': 'var(--spacing-xlarge)', 
      }, 
      textShadow: { 
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
      }, 
    }, 
  }, 
  plugins: [], 
};