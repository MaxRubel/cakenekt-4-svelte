import { writable } from "svelte/store";

export const isPlayer = writable(0);

export function selectPlayer(value) {
  isPlayer.update((n) => value);
  console.log("the new value is: ", value);
}
