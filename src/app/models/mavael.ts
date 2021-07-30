export interface Mavael {
    userID : string,
    username : string,
    email : string,
    createdAt: number,
    status: string
}

export interface BlogPost {
    title : string,
    postId : string,
    body : string,
    timestamp : number,
    user: string,
    cardColor: string,
    uid: string
}
