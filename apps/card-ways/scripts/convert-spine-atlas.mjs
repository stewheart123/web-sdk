import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const atlasPath = join(__dirname, '../static/assets/sprites/freeSpins/freeSpinsMessage.atlas');
const outputPath = join(__dirname, '../static/assets/sprites/freeSpins/freeSpins.json');

function parseAtlas(content) {
	const lines = content.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
	const image = lines[0];
	const sizeLine = lines.find((l) => l.startsWith('size:'));
	const [, sheetW, sheetH] = sizeLine.match(/size:(\d+),(\d+)/);

	const regions = [];
	let i = lines.findIndex((l) => l.startsWith('scale:')) + 1;

	while (i < lines.length) {
		const name = lines[i++];
		const boundsLine = lines[i++];
		const [, bx, by, bw, bh] = boundsLine.match(/bounds:(\d+),(\d+),(\d+),(\d+)/);

		let ox = 0;
		let oy = 0;
		let origW = Number(bw);
		let origH = Number(bh);
		let rotated = false;

		while (i < lines.length && lines[i].includes(':')) {
			const line = lines[i++];
			if (line.startsWith('offsets:')) {
				[, ox, oy, origW, origH] = line.match(/offsets:(\d+),(\d+),(\d+),(\d+)/).map(Number);
			} else if (line.startsWith('rotate:')) {
				rotated = true;
			}
		}

		const frameName = name === 'freespins' || name === 'totalwin' ? `${name}.png` : `${name}.png`;
		const trimmed = ox !== 0 || oy !== 0 || origW !== bw || origH !== bh;

		regions.push({
			name: frameName,
			frame: { x: Number(bx), y: Number(by), w: Number(bw), h: Number(bh) },
			rotated,
			trimmed,
			spriteSourceSize: {
				x: ox,
				y: oy,
				w: rotated ? Number(bh) : Number(bw),
				h: rotated ? Number(bw) : Number(bh),
			},
			sourceSize: { w: origW, h: origH },
		});
	}

	return { image, sheetW: Number(sheetW), sheetH: Number(sheetH), regions };
}

const atlas = readFileSync(atlasPath, 'utf8');
const { image, sheetW, sheetH, regions } = parseAtlas(atlas);

const frames = Object.fromEntries(
	regions.map((r) => [
		r.name,
		{
			frame: r.frame,
			rotated: r.rotated,
			trimmed: r.trimmed,
			spriteSourceSize: r.spriteSourceSize,
			sourceSize: r.sourceSize,
		},
	]),
);

const json = {
	frames,
	meta: {
		app: 'https://www.codeandweb.com/texturepacker',
		version: '1.0',
		image,
		format: 'RGBA8888',
		size: { w: sheetW, h: sheetH },
		scale: '1',
	},
};

writeFileSync(outputPath, JSON.stringify(json, null, '\t') + '\n');
console.log(`Wrote ${regions.length} frames to ${outputPath}`);
