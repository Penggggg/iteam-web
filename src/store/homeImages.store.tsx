import { Observable } from 'rxjs';

const homeImages = [
    'http://image68.360doc.com/DownloadImg/2014/01/0819/38116007_9.jpg',
    'https://images.unsplash.com/photo-1484650425799-1cd84f7bb6c7?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=',
    'https://images.unsplash.com/photo-1484645031667-a4215dc25593?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=',
    'https://images.unsplash.com/photo-1484737359300-c8242155edf9?dpr=1&auto=format&fit=crop&w=767&h=490&q=80&cs=tinysrgb&crop='
]

let len = homeImages.length;

export let homeImage$ = Observable.interval( 5000 )
    .map( x => homeImages[ x % len ])
    .share( )