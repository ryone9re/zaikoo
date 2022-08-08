import { makeFirebaseInspector } from 'next-fortress/firebase';

export const middleware = makeFirebaseInspector({ type: 'redirect', destination: '/login' });

export const config = {
  matcher: ['/', '/category', '/login', '/menu', '/office', '/product', '/tax-rates'],
};
