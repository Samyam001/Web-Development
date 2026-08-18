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