export class Music {

    _id: string;
    song_name: string;
    artist: {  
        artist_name: string,
        age: number,
        gender: string
    };
    duration: string;
    lyricist: string;
    language: string;
    rating: number;
    released_on: Date;
}
