import fs from 'fs';
import path from 'path';
import sf2tojson from 'sf2-json';

const inputDir = path.resolve('./soundfonts');
const outputDir = path.resolve('./presets');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
async function run() {
	const files = fs.readdirSync(inputDir).filter(f => f.toLowerCase().endsWith('.sf2') || f.toLowerCase().endsWith('.gz'));
	for (const file of files) {
		console.log(path.join(inputDir, file));
		await sf2tojson(path.join(inputDir, file), outputDir, { verbose: true });
		console.log("\n");
	}
}
run();