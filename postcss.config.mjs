const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-preset-env': {
      stage: 0, // Optional: you can set stage based on your preference
      features: {
        'nesting-rules': true, // Optional: enable CSS nesting
      },
    },
  },
};

export default config;
