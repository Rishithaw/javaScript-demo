// Object literals

// const blogs = [
//   {title:'why mac & cheese rules', likes: 30},
//   {title: '10 things to make with marmite', likes: 50}
// ];

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    {title:'why mac & cheese rules', likes: 30},
    {title: '10 things to make with marmite', likes: 50}],
  login() {
    console.log('The user logged in');
  },
  logout() {
    console.log('The user logged out');
  },
  logBlogs() {
    // console.log(this.blogs);
    console.log('This user has written the following blogs:');
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    });
  }
};
