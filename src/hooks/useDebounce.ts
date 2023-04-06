import { useRef } from 'react'

export function useDebounce(fn: any, delay: number) {
  const timeoutRef = useRef<any>(null)

  function debouncedFn(...args: any) {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return debouncedFn
}
