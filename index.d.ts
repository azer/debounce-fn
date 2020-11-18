declare module 'debounce-fn'

export default function(
  fn: (...args: any[]) => void,
  wait?: number
): (...args: any[]) => void
