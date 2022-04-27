const baseURL = `https://jsonplaceholder.typicode.com`

const endpoints = {
    posts: "/posts",
    post: (id) => `/posts/${id}`
   };
   
   const getAllPosts = () => {
    fetch(`${baseURL}${endpoints.posts}`, {
     method: 'GET',
    }).then((response) => {
     return response.json();
    }).then(data => {
     console.log(data);
    });
   }
   
   getAllPosts();
   

   
   
   const createPost = () => {

    const post = {
        userId: 10,
        title: "Hello",
        body: "Hey"
       }

    fetch(`${baseURL}${endpoints.posts}`, {
     method: 'POST',
     body: JSON.stringify(post),
     headers: {
      'Content-Type': 'application/json'
     }
    }).then((response) => {
     return response.json();
    }).then(data => {
     console.log(data);
    })
   }

   createPost();
   