'use strict';

// Audio Source - AWS Podcast : https://aws.amazon.com/podcasts/aws-podcast/
var audioData = [
    {
        'title' : 'Episode 171',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/%C4%90%E1%BB%99c+t%E1%BA%A5u+guitar+nh%E1%BA%A1c+Tr%E1%BB%8Bnh+-+Nh%E1%BB%AFng+t%C3%ACnh+kh%C3%BAc+b%E1%BA%A5t+t%E1%BB%AD+Tr%E1%BB%8Bnh+C%C3%B4ng+S%C6%A1n+l%C3%A0m+t%C3%AA+t%C3%A1i+l%C3%B2ng+ng%C6%B0%E1%BB%9Di.mp3'
    },
    {
        'title' : 'Episode 172',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/50+b%E1%BA%A3n+h%C3%B2a+t%E1%BA%A5u+Saxophone+hay+nh%E1%BA%A5t+c%C3%B9ng+ly+Cafe+-+Nh%E1%BA%A1c+kh%C3%B4ng+l%E1%BB%9Di+nh%E1%BA%B9+nh%C3%A0ng,+s%C3%A2u+l%E1%BA%AFng.mp3'
    },
    {
        'title' : 'Episode 173',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/70+b%C3%A0i+h%C3%A1t+bu%E1%BB%93n+nh%E1%BA%A5t+-+nh%E1%BA%A1c+v%C3%A0ng+th%E1%BA%A5t+t%C3%ACnh+nghe+l%C3%BAc+%C4%91%C3%AAm+khuya.mp3'
    },
    {
        'title' : 'Episode 174',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/Ablum+%C4%91%E1%BB%99c+t%E1%BA%A5u+guitar+nh%E1%BA%A1c+Vi%E1%BB%87t+Nam+hay+nh%E1%BA%A5t.mp3'
    },
    {
        'title' : 'Episode 175',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/NG%C3%94+TH%E1%BB%A4Y+MI%C3%8AN+-+V%C5%A8+TH%C3%80NH+AN+-+Nh%E1%BB%AFng+T%C3%ACnh+Kh%C3%BAc+Tr%E1%BB%AF+T%C3%ACnh+Sang+Tr%E1%BB%8Dng+Nh%E1%BA%A5t.mp3'
    },
    {
        'title' : 'Episode 176',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/NH%E1%BA%A0C+V%C3%80NG+H%E1%BA%A2I+NGO%E1%BA%A0I+X%C6%AFA+B%E1%BA%A4T+H%E1%BB%A6+NHI%E1%BB%80U+DANH+CA+N%E1%BB%94I+TI%E1%BA%BENG+H%E1%BA%A2I+NGO%E1%BA%A0I.mp3'
    },
    {
        'title' : 'Episode 177',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/Nh%E1%BA%A1c+hay+cho+qu%C3%A1n+c%C3%A0+ph%C3%AA+++%C4%90%E1%BB%99c+t%E1%BA%A5u+guitar+nh%E1%BA%A1c+tr%E1%BB%AF+t%C3%ACnh+.mp3'
    },
    {
        'title' : 'Episode 178',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/Nh%E1%BB%AFng+B%E1%BA%A3n+%C4%90%E1%BB%99c+T%E1%BA%A5u+Guitar+Nh%E1%BA%A1c+V%C3%A0ng+Hay+Nh%E1%BA%A5t+-+Nh%E1%BA%B9+Nh%C3%A0ng,+S%C3%A2u+L%E1%BA%AFng.mp3'
    },
    {
        'title' : 'Episode 179',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/Nh%E1%BB%AFng+b%E1%BA%A3n+guitar+nh%E1%BA%A1c+v%C3%A0ng+tr%E1%BB%AF+t%C3%ACnh+kh%C3%B4ng+l%E1%BB%9Di+hay+nh%E1%BA%A5t.mp3'
    },
    {
        'title' : 'Episode 180',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/T%E1%BB%95ng+h%E1%BB%A3p+c%C3%A1c+b%E1%BA%A3n+Solo+Guitar+c%E1%BB%B1c+hay+c%E1%BB%A7a+Nguy%E1%BB%85n+B%E1%BA%A3o+Ch%C6%B0%C6%A1ng.mp3'
    },
    {
        'title' : 'Episode 181',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/%C4%90%E1%BB%99c+T%E1%BA%A5u+Guitar++-+Tuy%E1%BB%83n+T%E1%BA%ADp+10+T%C3%ACnh+Kh%C3%BAc+B%E1%BA%A5t+h%E1%BB%A7+c%E1%BB%A7a+Ng%C3%B4+Th%E1%BB%A5y+Mi%C3%AAn.mp3'
    },
    {
        'title' : 'Episode 182',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/%C4%90%E1%BB%99c+T%E1%BA%A5u+Guitar++-+Tuy%E1%BB%83n+T%E1%BA%ADp+10+T%C3%ACnh+Kh%C3%BAc+B%E1%BA%A5t+h%E1%BB%A7+c%E1%BB%A7a+Ng%C3%B4+Th%E1%BB%A5y+Mi%C3%AAn.mp3'
    },
    {
        'title' : 'Episode 183',
        'url' : 'https://s3.amazonaws.com/evening-coffee-1/%C4%90%E1%BB%99c+t%E1%BA%A5u+guitar+nh%E1%BA%A1c+Tr%E1%BB%8Bnh+-+Nh%E1%BB%AFng+t%C3%ACnh+kh%C3%BAc+b%E1%BA%A5t+t%E1%BB%AD+Tr%E1%BB%8Bnh+C%C3%B4ng+S%C6%A1n+l%C3%A0m+t%C3%AA+t%C3%A1i+l%C3%B2ng+ng%C6%B0%E1%BB%9Di.mp3'
    }
];

module.exports = audioData;
