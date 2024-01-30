module.exports = {
  presets: [
    '@babel/plugin-syntax-jsx',
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
};
