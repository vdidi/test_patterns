export default class Movie {
    
    constructor (private title: string,
        private year: string,
        private released: string,
        private director: string,
        private awards: string,
        private poster: string,) {

    }
    
    getMovie (): Movie {
        return this;
    }

    getTitle (): string {
        return this.title;
    }
}