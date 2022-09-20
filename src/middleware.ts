import { makeFirebaseInspector } from 'next-fortress/firebase';

export const middleware = makeFirebaseInspector({ type: 'redirect', destination: '/login' });

export const config = {
  matcher: ['/', '/stock', '/product', '/category', '/office'],
};
