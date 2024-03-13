export default class Movie {
    
    constructor (private title: string,
        readonly year: string,
        readonly released: string,
        readonly director: string,
        readonly awards: string,
        readonly poster: string) {
    }
    
    getMovie (): Movie {
        return this;
    }

    getTitle (): string {
        return this.title;
    }

}