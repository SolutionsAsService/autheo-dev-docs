import { spawnSync } from 'node:child_process';
const result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'docs:build'], { stdio: 'inherit', env: { ...process.env, DOCS_BASE: '/autheo-dev-docs/' }, shell: process.platform === 'win32' });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
