import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MATH_ROOT = join(__dirname, '../../math-exports/card_ways');
const CONFIG_OUT = join(__dirname, '../src/game/config.ts');

const raw = JSON.parse(readFileSync(join(MATH_ROOT, 'config_fe_card_ways.json'), 'utf-8'));

if (raw.gameID !== 'card_ways') {
	throw new Error(`Expected gameID "card_ways", got "${raw.gameID}"`);
}

const symbols = {};
for (const entry of raw.symbols) {
	Object.assign(symbols, entry);
}

const paddingReels =
	Object.keys(raw.paddingReels ?? {}).length > 0
		? raw.paddingReels
		: { basegame: [], freegame: [] };

const config = {
	providerName: raw.providerName,
	gameName: 'card_ways',
	gameID: raw.gameID,
	rtp: raw.rtp,
	numReels: raw.numReels,
	numRows: raw.numRows,
	betModes: raw.betModes,
	symbols,
	paddingReels,
};

const body = `export default ${JSON.stringify(config, null, '\t')};\n`;

writeFileSync(CONFIG_OUT, body);
console.log(`Wrote ${CONFIG_OUT} (gameID: ${config.gameID})`);
