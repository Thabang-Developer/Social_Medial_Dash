
const dashRightContent = document.querySelectorAll('.dash-right-cont');
const leftBtn = document.querySelectorAll('.btn-manage');

const butt1 = document.querySelector('.btn1');
const butt2 = document.querySelector('.btn2');
const butt3 = document.querySelector('.btn3');


const switchContentSection = (divClicked, btnClicked) => {

    leftBtn.forEach(el => {
        el.classList.remove('active');
    })
    leftBtn[btnClicked].classList.add('active');

    dashRightContent.forEach(el => {
        el.classList.remove('active');
    })
    dashRightContent[divClicked].classList.add('active');

}

butt1.addEventListener('click', () => {
    switchContentSection(0,0);
})
butt2.addEventListener('click', () => {
    switchContentSection(1,1);
})
butt3.addEventListener('click', () => {
    switchContentSection(2,2);
})

// PROFILE
const openNav = () => {
    document.getElementById("mySidenav").style.width = "350px";
}
  
const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}
  // END

// DOM Operation:

document.addEventListener('DOMContentLoaded', () => {
    const feeds = JSON.parse(localStorage.getItem('Feed Data'));
    const arrFeeds = []
    if (!feeds) {
        document.querySelector('.feed-cont').innerHTML = `
            <div class="fd-cont">
                <p>No available feeds for you, you can create new feed from the button on your short right.</p>
            </div>
        `
        return;
    }
    arrFeeds.push(feeds);
    document.querySelector('.num-feeds').textContent = feeds.length;
    document.querySelector('.feed-cont').innerHTML = `
        <div class="fd-cont">
            <small>(<i>1</i>). </small><strong>${arrFeeds[0][0].desc}</strong>
            <p>${arrFeeds[0][0].fd}. <i class="fa-regular fa-thumbs-up" onClick= "likeFunc()"></i> <i class="fa-regular fa-thumbs-down" onClick= "disLikeFunc()"></i></p>      
        </div>
    `
});

document.querySelector('.submit-feed').addEventListener('click', () => {
    const feedDesc = document.querySelector('.feed-desc');
    const feedMg = document.querySelector('.feed-mssg');
    
    const oldFeed = JSON.parse(localStorage.getItem('Feed Data'));
    const newButOldFeeds = [];
    let newFeed = [];
    
    if (!feedMg) {
        swal('Error', 'Please ensure that feed message is filled before submitting.', 'error');
    }
    
    const feed = {
        desc: feedDesc.value,
        fd: feedMg.value
    }
    if (!oldFeed) {
        newFeed.push(feed);
    }else {
        console.log(oldFeed)
        let desc = oldFeed[0].desc;
        let fd = oldFeed[0].fd;
        newButOldFeeds.push({ desc, fd });
        newFeed.push(feed, newButOldFeeds);
    }

    localStorage.setItem("Feed Data", JSON.stringify(newFeed));
    
    feedDesc.value = "";
    feedMg.value = "";

    swal('Success', 'New feed successfully posted.', 'success');
    setTimeout(() => {
        location.reload();
    }, 2000);
})

const likeFunc = () => {
    let num = 0;

    document.querySelector('.fa-thumbs-up').style.color = 'rgb(0, 162, 255)';
    document.querySelector('.num-likes').textContent = num + 1;  
    document.querySelector('.fa-thumbs-down').style.color = 'rgba(3, 3, 3, 0.637)';
}
const disLikeFunc = () => {
    document.querySelector('.fa-thumbs-up').style.color = 'rgba(3, 3, 3, 0.637)';
    document.querySelector('.fa-thumbs-down').style.color = 'rgb(0, 162, 255)';
    document.querySelector('.num-likes').textContent -= 1; 
}

document.querySelector('.manu-icon').addEventListener('click', (e) => {
    e.target.style.display = 'none';
    document.querySelector('.main-menu').style.display = 'block';
    document.querySelector('.close').style.display = 'block';
})

document.querySelector('.close').addEventListener('click', (e) => {
    document.querySelector('.main-menu').style.display = 'none';
    e.target.style.display = 'none';
    document.querySelector('.manu-icon').style.display = 'block';
})