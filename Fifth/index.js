//  Question 1
const colorPicker=document.getElementById("colorPicker");
const colorBox= document.getElementById("colorBox");
const resetButton=document.getElementById("resetButton");

const defaultColor="aqua";

colorPicker.addEventListener("input",()=>{
    colorBox.style.backgroundColor=colorPicker.value;
});

resetButton.addEventListener("click",()=>{
    colorBox.style.backgroundColor=defaultColor;
    colorPicker.value=defaultColor;
});

// Question 2


function getUser(id,callback){
    setTimeout(()=>{
        callback({id:id,name:"Samyam"});
    },2000);
    }

    getUser(1,(user)=>{
        console.log("User Name: ",user.name);
    });



// Question 3

function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "Ram" });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        callback(["post1", "post2"]);
    }, 1000);
}

function getComments(post, callback) {
    setTimeout(() => {
        callback(["nice", "good"]);
    }, 1000);
}

// Callback Hell
getUser(1, (user) => {
    console.log("User fetched");

    getPosts(user.id, (posts) => {
        console.log("Posts fetched");

        getComments(posts[0], (comments) => {
            console.log("Comments fetched");

            console.log("User:", user);
            console.log("Posts:", posts);
            console.log("Comments:", comments);
        });
    });
});

// Question 4

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, name: "Ram" });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getComments(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["nice", "good"]);
        }, 1000);
    });
}

getUser(1)
    .then((user) => {
        console.log("User fetched");
        console.log("User:", user);

        return getPosts(user.id);
    })
    .then((posts) => {
        console.log("Posts fetched");
        console.log("Posts:", posts);

        return getComments(posts[0]);
    })
    .then((comments) => {
        console.log("Comments fetched");
        console.log("Comments:", comments);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// Question 5
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: id, name: "Ram" });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getComments(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["nice", "good"]);
        }, 1000);
    });
}

async function showData() {
    try {
        const user = await getUser(1);
        console.log("User fetched");
        console.log("User:", user);

        const posts = await getPosts(user.id);
        console.log("Posts fetched");
        console.log("Posts:", posts);

        const comments = await getComments(posts[0]);
        console.log("Comments fetched");
        console.log("Comments:", comments);
    } catch (error) {
        console.log("Error:", error);
    }
}

showData();