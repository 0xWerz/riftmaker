'use client';

import { cn } from '@/lib/utils';
import { useSpring, useSpringRef, animated } from '@react-spring/web';
import { use, useEffect, useRef } from 'react';

interface LoadingIndicatorProps {
  variant?: 'logo' | 'spinner';
  className?: string;
}

const LoadingLogo = ({ className }: Omit<LoadingIndicatorProps, 'variant'>) => {
  const springs = useSpring({
    from: { y: -55 },
    to: { y: 55 },
    loop: true,
    config: {
      duration: 3000,
    },
  });

  return (
    <svg
      width="62"
      height="55"
      viewBox="0 0 62 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id="mask0_54_467"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="62"
        height="55"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.3464 29.793L31.4327 38.9608L40.5191 29.793L32.0651 0.901726C31.879 0.265912 30.9865 0.265912 30.8004 0.901726L22.3464 29.793ZM36.8202 29.7194L34.4911 32.9167C34.4101 33.0281 34.2354 32.9564 34.2543 32.8196L34.6831 29.7194L31.4327 22.0665L28.1823 29.7194L28.6112 32.8196C28.6301 32.9564 28.4554 33.0281 28.3743 32.9167L26.0453 29.7194L31.4327 17.834L36.8202 29.7194Z"
          fill="#D9D9D9"
        />
        <path
          d="M60.7104 9.1879L42.7754 23.8368C42.2925 24.2312 42.5689 25.0191 43.1902 25.0191H48.9357L31.3402 44.6812L13.7446 25.0191H19.4901C20.1115 25.0191 20.3879 24.2312 19.905 23.8368L1.97 9.1879C1.35889 8.68876 0.550648 9.49372 1.03737 10.1167L10.131 21.7568H3.79624C3.22813 21.7568 2.926 22.4333 3.30236 22.8627L30.853 54.2939C31.111 54.5883 31.5693 54.5883 31.8274 54.2939L59.378 22.8627C59.7544 22.4333 59.4522 21.7568 58.8841 21.7568H52.5494L61.643 10.1167C62.1297 9.49372 61.3215 8.68876 60.7104 9.1879Z"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_54_467)">
        <path
          d="M37.1031 29.9255L37.2231 29.7606L37.139 29.5749L31.7515 17.6896L31.4327 16.9863L31.114 17.6896L25.7265 29.5749L25.6423 29.7606L25.7624 29.9255L28.0914 33.1228C28.3934 33.5374 29.0251 33.2578 28.9579 32.7716L28.5423 29.7672L31.4327 22.9618L34.3232 29.7672L33.9076 32.7716C33.8403 33.2578 34.4721 33.5374 34.7741 33.1228L37.1031 29.9255ZM49.1965 25.2525L49.7186 24.6691H48.9357H43.1902C42.9049 24.6691 42.7634 24.2985 42.9968 24.1079L60.9318 9.45897C61.0757 9.34142 61.229 9.36761 61.3414 9.4795C61.4544 9.5921 61.4843 9.75137 61.3672 9.90127L52.2736 21.5413L51.8318 22.1068H52.5494H58.8841C59.1451 22.1068 59.297 22.4241 59.1148 22.632L31.5642 54.0632C31.4455 54.1985 31.2348 54.1985 31.1162 54.0632L3.56556 22.632C3.38337 22.4241 3.53525 22.1068 3.79624 22.1068H10.131H10.8485L10.4068 21.5413L1.31318 9.90127C1.19608 9.75137 1.22592 9.5921 1.33898 9.4795C1.45133 9.36761 1.60467 9.34142 1.74859 9.45897L19.6836 24.1079C19.917 24.2985 19.7755 24.6691 19.4901 24.6691H13.7446H12.9618L13.4838 25.2525L31.0794 44.9146L31.3402 45.2061L31.601 44.9146L49.1965 25.2525ZM40.1252 29.6932L31.4327 38.4636L22.7403 29.6932L31.1363 1.00002C31.2242 0.699814 31.6413 0.699814 31.7292 1.00002L40.1252 29.6932Z"
          stroke="#B7B7B7"
          strokeWidth="0.7"
        />
        <animated.rect x="-8.36377" y="0" width="79.408" height="50" rx="27.2124" fill="#02C39A" style={springs} />
      </g>
    </svg>
  );
};

const LoadingSpinner = ({ className }: Omit<LoadingIndicatorProps, 'variant'>) => {
  return (
    <svg
      className={cn('animate-spin duration-[3000]', className)}
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.8136 23.7712C65.7745 31.0895 65.0813 38.8657 61.8568 45.7217C58.6323 52.5778 53.0847 58.0709 46.1972 61.2276C39.3097 64.3844 31.5271 65.0009 24.2285 62.9679C16.9299 60.9349 10.5866 56.3837 6.32294 50.1208C2.05924 43.8579 0.150384 36.2879 0.934663 28.7521C1.71894 21.2163 5.14571 14.2016 10.6077 8.95089C16.0696 3.70021 23.2141 0.552725 30.7749 0.0662097C38.3357 -0.420303 45.8247 1.78558 51.9145 6.29293L50.8686 7.70613C45.1125 3.44588 38.0342 1.36092 30.8878 1.82077C23.7415 2.28061 16.9887 5.25556 11.8261 10.2184C6.6636 15.1812 3.42469 21.8115 2.6834 28.9341C1.94212 36.0567 3.74633 43.2118 7.7763 49.1314C11.8063 55.0509 17.8018 59.3526 24.7002 61.2742C31.5987 63.1957 38.9548 62.613 45.4647 59.6293C51.9746 56.6456 57.2181 51.4536 60.2658 44.9735C63.3135 38.4933 63.9687 31.1433 62.1153 24.2262L63.8136 23.7712Z"
        fill="#02C39A"
      />
    </svg>
  );
};

const LoadingIndicator = ({ variant = 'logo', className }: LoadingIndicatorProps) => {
  if (variant === 'logo') {
    return <LoadingLogo className={className} />;
  }

  return <LoadingSpinner className={className} />;
};

export default LoadingIndicator;
