const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    // Permite que el build termine aunque haya errores de ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Permite que el build termine aunque haya errores de TypeScript
    ignoreBuildErrors: true,
  },
}