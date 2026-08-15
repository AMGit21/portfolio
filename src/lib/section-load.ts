const loaders = new Map<string, () => void>();
const mounted = new Set<string>();
const waiters = new Map<string, Array<() => void>>();

export function registerSectionLoader(id: string, load: () => void) {
  loaders.set(id, load);
}

export function unregisterSectionLoader(id: string) {
  loaders.delete(id);
}

export function markSectionMounted(id: string) {
  mounted.add(id);
  const pending = waiters.get(id);
  if (!pending) return;
  waiters.delete(id);
  pending.forEach((resolve) => resolve());
}

function isRealSection(id: string) {
  const el = document.getElementById(id);
  return el?.tagName === "SECTION";
}

export function ensureSection(id: string): Promise<void> {
  if (isRealSection(id)) {
    mounted.add(id);
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const queue = waiters.get(id) ?? [];
    queue.push(resolve);
    waiters.set(id, queue);
    loaders.get(id)?.();
  });
}

/** Load every nav section up to `targetId` so layout heights are real before scrolling. */
export async function ensureSectionsThrough(
  targetId: string,
  order: readonly string[],
) {
  const end = order.indexOf(targetId);
  const ids = end === -1 ? [targetId] : order.slice(0, end + 1);
  await Promise.all(ids.map((id) => ensureSection(id)));
}
