
const reels = [
  // Modern car captions

    {
    username: "Yuvraj Singh",
    likeCount: 14800,
    isLiked: true,
    commentCount: 350,
    caption: "Vintage vibes, modern soul. ",
    video: "./videos/video5.mp4",
    userProfile: "https://i.pinimg.com/736x/a6/13/6d/a6136dc98f84d6cc00a1e2c54f25ab4f.jpg ",
    shareCount: 480,
    isFollowed: true
  },

  {
    username: "Arjun Malhotra",
    likeCount: 12800,
    isLiked: false,
    commentCount: 243,
    caption: "Clean lines, smooth drive. ",
    video: "./videos/video1.mp4",
    userProfile: "https://i.pinimg.com/736x/73/28/d7/7328d723618f1f5686be24fa22d26615.jpg ",
    shareCount: 430,
    isFollowed: false
  },

  {
    username: "Aarav Mehta",
    likeCount: 9050,
    isLiked: true,
    commentCount: 330,
    caption: "Cruising mode: ON. ",

    video: "./videos/video2.mp4",
    userProfile: "https://i.pinimg.com/736x/7b/1e/65/7b1e65e78fb1ca80e8df1b880147cc0f.jpg ",
    shareCount: 520,
    isFollowed: true
  },

  // Vintage car captions
  {
    username: "Nitin Agarwal",
    likeCount: 3100,
    isLiked: true,
    commentCount: 89,
    caption: "Old wheels, timeless feel. ",
    video: "./videos/video3.mp4",
    userProfile: "https://i.pinimg.com/736x/b2/42/ee/b242ee94430443ba0d52a6874260908f.jpg ",
    shareCount: 75,
    isFollowed: false
  },
  {
    username: "Karan Oberoi",
    likeCount: 18700,
    isLiked: true,
    commentCount: 420,
    caption: "Classic never goes out of style. 🤍",
    video: "./videos/video4.mp4",
    userProfile: "https://i.pinimg.com/736x/77/d4/59/77d4592f3758b8c58c4f4ccb7848f794.jpg ",
    shareCount: 610,
    isFollowed: true
  },

];


let sum = " ";
reels.forEach(element => {
  console.log(element.username)
  sum = sum + `
      <div class="reel">

       <video autoplay loop muted src=${element.video}></video>


        <div class="actions">
            <div class="action-btn">
        
         ${element.isLiked
                  ? `<i class="ri-heart-fill"></i>`
                   : `<i class="ri-heart-3-line"></i>`
                    }
                <span>${element.likeCount}</span>

            </div>

            <div class="action-btn">
                 <i class="ri-chat-3-line"></i>
                <span>${element.commentCount}</span>
            </div>

            <div class="action-btn">
            <i class="ri-share-forward-line"></i>
                <span>${element.shareCount}</span>
            </div>

            <div class="action-btn">
              <i class="ri-more-2-fill"></i>
            </div>
        </div>

        <!-- Bottom User Info -->
        <div class="info">
            <div class="user">
                <img src="${element.userProfile}" class="avatar">

                <p class="username">${element.username}</p>
                <button class="follow">
                ${element.isFollowed ? 'Unfollow' : 'Follow'}</button>
            </div>

            <p class="caption">
              ${element.caption}
            </p>
        </div>

    </div>`
});


let container = document.querySelector('.reels-container')
container.innerHTML = sum


// if(islike == 'false') ? true : false