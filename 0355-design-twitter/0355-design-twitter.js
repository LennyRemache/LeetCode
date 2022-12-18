class Twitter {
    constructor() {
        this.userTweets = {};
        this.userNewsFeed = {};
        this.userFollowees = {};
        this.time = 0;
    }
    
    postTweet(userId, tweetId) {
        if(this.userTweets[userId] === undefined) this.userTweets[userId] = [[tweetId, this.time]];
        else this.userTweets[userId].push([tweetId,this.time]);
        this.time++;
    }
    
    getNewsFeed(userId) {
        let allTweets = this.userTweets[userId] === undefined ? [] : [...this.userTweets[userId]];
        //console.log(this.userFollowees[userId])
        if (this.userFollowees[userId] !== undefined) {
            this.userFollowees[userId].forEach(followeeId => {
                if (this.userTweets[followeeId] !== undefined) {
                    for(let tweet of this.userTweets[followeeId]) {
                        allTweets.push(tweet);
                    }
                }
            })
        }
     
        
        
        allTweets.sort((a,b) => b[1] - a[1]);
        
        return allTweets.slice(0,10).map(tweet => tweet[0]);
    }
    
    follow(followerId, followeeId) {
        if (this.userFollowees[followerId] === undefined) {
            this.userFollowees[followerId] = new Set();
        }
        this.userFollowees[followerId].add(followeeId);
    }
    
    unfollow(followerId, followeeId) {
        if (this.userFollowees[followerId] !== undefined) {
            this.userFollowees[followerId].delete(followeeId);
        }
    }
}

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */