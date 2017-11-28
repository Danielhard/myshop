const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http://http://xshop.zzxdanielhard.xyz/api/' : 'api/'
}