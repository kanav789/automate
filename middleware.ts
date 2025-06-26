import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {

    // Define the paths that should be public and not require authentication}
    publicRoutes: [
        '/',
        '/api/clerk-webhook',
        '/api/drive-activity/notification',
        '/api/payment/success',
    ],
    ignoredRoutes: [
        '/api/auth/callback/discord',
        '/api/auth/callback/notion',
        '/api/auth/callback/slack',
        '/api/flow',
        '/api/cron/wait',
    ],
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};