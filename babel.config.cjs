module.exports = {
    presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'],
    plugins: ['@babel/plugin-transform-modules-commonjs'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        "/node_modules/(?!axios)",
    ],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
};