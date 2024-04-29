const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment-timezone');

const config = {
    botDestination  : 'both', // group |  private | both
    region       	: 'indonesia',
    resbot_version  : 'Ikhsan v2.0.2',
    apikey_resbot   : 'ikhsandev', // apikey beli di autoresbot.com
    apikeyProdia    : '953c5de9-f0f5-4596-bf9c-5f03f70f46d6', // apikey ambil di https://app.prodia.com
    nomorsuperOwner : '6287846614391',
    grup            : 'https://chat.whatsapp.com/EqpQshWL1QyEjuI9ts40pD',
    email           : 'ikhsannull10@gmail.com',
    ig           	: '@ikhsan_bruhh',
    region          : 'indonesia',
    ownername       : 'IkhsanDev',
    owner           : ['6287846614391'],
    botname         : 'Ikhsan BOT',
    packname        : 'Ikhsan 555',
    linkPayment	    : 'linkmu di file resconfig.js',
    typeWelcome 	: '1', // ada 3 pilihan angka 1 = image pp user  2 = image welcome custom   || 3 = teks only
    author          : `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: Azhari Creative\nBot: 087846614391`,
    prefix_custom   : ['','!','.'],
    sessionName     : 'session',
   	allmenu         : 'https://telegra.ph/file/8303c9aaba8c2c8dd1f8e.jpg',
    sleep_game      : 60000, // waktu main tebak (1000 = 1 detik)
    limit_tunggu 	: 10, // ini menit = 2 menit
    MoneyMenangGame : 20,
    anticall        : false, // true = aktif || false = tidak aktif
    antispam_filter : false,
    publik 			: true,
    audio_menu      : true,
    autoread 		: true,
    antitoxic 		: true,
    game 			: {
        tebakangka   : 'https://telegra.ph/file/81a1aa13c00d36a1f2b75.jpg',
        tebaklontong : 'https://telegra.ph/file/f20bec6cbc011da4ac25d.jpg',
        tebakkalimat : 'https://telegra.ph/file/9624ca315002d0898bcee.jpg',
        tebaklirik   : 'https://telegra.ph/file/ec6362c91aaf837a6ec77.jpg',
        tebakkata    : 'https://telegra.ph/file/4cd10be17fd6c13303453.jpg',
        tebakbendera : 'https://telegra.ph/file/d982a966ba17ee035807c.jpg',
        tebakgambar  : 'https://telegra.ph/file/e9107d96769831a17ee21.jpg',
        tebaklagu    : 'https://telegra.ph/file/d96c459b9605d6fab4284.jpg'
    }
};

module.exports = config;



let file = path.resolve(__filename);

fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`${chalk.greenBright.bold('UPDATE FILE ' + file)} ${chalk.redBright.bold('PLEASE RESTART THIS SERVER')}`);
    delete require.cache[file];
    require(file);
});







/* 
---- PENJELASAN ------ 

true : artinya aktif
false : tidak aktif

jadi kalau
anticall        : true 
// artinya bot lu gak bisa di telpon // kalo ada orang nelpon lansung di block



untuk link yang seperti https://telegra.ph/file/4cd10be17fd6c13303453.jpg
kalau mau di ganti silakan upload gambar kalian dulu ke website https://telegra.ph
lalu nanti salin url gambarnya 


KALAU MAU NANYA NANYA CHAT https://t.me/autoresbot_com admin/owner autoresbot

*/
