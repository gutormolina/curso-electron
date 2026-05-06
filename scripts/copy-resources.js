#!/usr/bin/env node

import { cpSync, mkdirSync, watch } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const srcDir = resolve(rootDir, 'resources');
const destDir = resolve(rootDir, 'out/main/resources');

const copyResources = () => {
  try {
    mkdirSync(resolve(rootDir, 'out/main'), { recursive: true });
    cpSync(srcDir, destDir, { recursive: true, force: true });
    console.log('✓ Resources copied to out/main/resources');
  } catch (err) {
    console.error('Error copying resources:', err.message);
  }
};

// Initial copy
copyResources();

// Watch for changes in resources folder
const watcher = watch(srcDir, { recursive: true }, (eventType, filename) => {
  console.log(`[watch] ${eventType} in ${filename}, re-syncing resources...`);
  copyResources();
});

// Also watch out/main to re-copy if it gets cleared
const outWatcher = watch(resolve(rootDir, 'out/main'), { recursive: false }, (eventType, filename) => {
  // Re-copy if the resources directory disappears
  setTimeout(() => {
    copyResources();
  }, 100);
});
