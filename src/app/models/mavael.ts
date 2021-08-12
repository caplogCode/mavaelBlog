export interface Mavael {
    userID : string,
    username : string,
    email : string,
    createdAt: number,
    status: string,
    lastPostId: string,
    uid: string, 
    name: string,
    hobby: string,
    beschreibung: string
}

export interface BlogPost {
    title : string,
    postId : string,
    body : string,
    timestamp : number,
    user: string,
    cardColor: string,
    uid: string,
    tags: string,
    like: number,
    dislike: number,
    likers: string,
    bookMarkers: string
}
