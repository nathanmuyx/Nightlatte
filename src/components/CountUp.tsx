import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  waypoints?: number[];
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  waypoints,
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  // Initial display value
  useEffect(() => {
    if (ref.current) {
      if (waypoints && waypoints.length > 0) {
        ref.current.textContent = formatValue(waypoints[0]);
      } else {
        ref.current.textContent = formatValue(direction === 'down' ? to : from);
      }
    }
  }, [from, to, direction, formatValue, waypoints]);

  // Waypoints mode: fast jumps then real countdown
  useEffect(() => {
    if (!waypoints || waypoints.length === 0) return;
    if (!isInView || !startWhen) return;

    if (typeof onStart === 'function') onStart();

    let cancelled = false;

    const run = async () => {
      await new Promise((r) => setTimeout(r, delay * 1000));
      if (cancelled) return;

      for (let i = 1; i < waypoints.length; i++) {
        if (cancelled) return;
        const gap = Math.abs(waypoints[i] - waypoints[i - 1]);
        // Big jumps: fast (50ms), real countdown: slower (45ms)
        const ms = gap > 10 ? 50 : 45;
        await new Promise((r) => setTimeout(r, ms));
        if (cancelled) return;
        if (ref.current) ref.current.textContent = formatValue(waypoints[i]);
      }

      if (typeof onEnd === 'function') onEnd();
    };

    run();
    return () => { cancelled = true; };
  }, [isInView, startWhen, waypoints, delay, formatValue, onStart, onEnd]);

  // Spring mode: original behavior (when no waypoints)
  useEffect(() => {
    if (waypoints && waypoints.length > 0) return;

    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') onEnd();
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration, waypoints]);

  useEffect(() => {
    if (waypoints && waypoints.length > 0) return;

    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue, waypoints]);

  return <span className={className} ref={ref} />;
}
