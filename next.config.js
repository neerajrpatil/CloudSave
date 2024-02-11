/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https', 
                hostname : 'cdn.iconscout.com' ,
                 
            },
            {
                protocol : 'https', 
                hostname : 's3-alpha.figma.com' ,
                 
            },
        ],
    },
};

module.exports = nextConfig

