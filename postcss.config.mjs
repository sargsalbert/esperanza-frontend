import postcssPresetEnv from 'postcss-preset-env';

const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-preset-env': postcssPresetEnv({
      stage: 1, // Optional: you can set stage based on your preference
      features: {
        'nesting-rules': true, // Optional: enable CSS nesting
      },
    }),
  },
};

export default config;
