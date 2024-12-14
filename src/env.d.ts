/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  Alpine: import('alpinejs').Alpine;
}

declare const Alpine: import('alpinejs').Alpine;