/** @type {import('next').NextConfig} */
const { register } = require('module');
const withPWA = require('next-pwa')


const nextConfig = {
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true
    })
}

module.exports = nextConfig



module.exports = nextConfig;
