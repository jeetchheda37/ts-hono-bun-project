const { build } = require('esbuild');
build({
    entryPoints: ['src/app.ts'], // Adjust the entry point as per your project structure
    bundle: true,
    outfile: 'dist/output.js', // Output bundle file location
    minify: true,
    platform: 'node',
    format: 'cjs',
    tsconfig: 'tsconfig.json', // Specify the path to your tsconfig.json file
}).catch((ex) => {console.log(ex); process.exit(1)});