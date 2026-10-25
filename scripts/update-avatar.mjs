import { mkdir, writeFile } from 'node:fs/promises';

const userId = '129514820';
const api = `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=420x420&format=Png&isCircular=false`;
const infoResponse = await fetch(api, { headers: { accept: 'application/json' } });
if (!infoResponse.ok) throw new Error(`Roblox thumbnail API: ${infoResponse.status}`);
const info = await infoResponse.json();
const thumbnail = info?.data?.[0]?.imageUrl;
if (!thumbnail?.startsWith('https://tr.rbxcdn.com/')) throw new Error('Roblox did not provide an avatar image yet');

const imageResponse = await fetch(thumbnail);
if (!imageResponse.ok) throw new Error(`Roblox image download: ${imageResponse.status}`);
const image = new Uint8Array(await imageResponse.arrayBuffer());
if (!image.length || image.length > 5_000_000) throw new Error('Unexpected avatar image size');
await mkdir('assets', { recursive: true });
await writeFile('assets/roblox-avatar.png', image);
console.log('Updated Roblox avatar');
