const path = require("path");

async function buildPosts({ actions, graphql }) {
  // Define base for Blog URL
  const base = `/blog`;

  // Create an array for sorting categories later
  const categories = [];
  // Query for all posts and their categories. We are using slugs because it's convenient that they are already in kebab-case
  const { data } = await graphql(`
    {
      posts: allSanityPost {
        totalCount
        nodes {
          title
          slug {
            current
          }
          categories {
            title
          }
        }
      }
    }
  `);

  // Define how many posts we want to show up on each page
  // const postsPerPage = +process.env.GATSBY_POSTS_PER_PAGE || 10
  const postsPerPage = +process.env.GATSBY_POSTS_PER_PAGE || 3;

  // Calculate the numbers of needed pages (n)
  const pageCount = Math.ceil(data.posts.totalCount / postsPerPage);

  // Go through each post and push to the corresponding arrays
  data.posts.nodes.forEach((post, index, array) => {
    // Use another forEach as there can be multiple categories per post
    post.categories.forEach((category) => categories.push(category.title));

    // Save previous and next post data to pass through to post page for prev/next buttons
    const prev = array[index - 1];
    const next = array[index + 1];

    // Loop from 1 to n and create the pages for them
    Array.from({ length: pageCount }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `${base}/${post.slug.current}` : `${base}/${i + 1}/${post.slug.current}`,
        component: path.resolve("./src/templates/post.tsx"),
        context: {
          slug: post.slug.current,
          prev,
          next,
          base,
        },
      });
    });
  });

  // Loop from 1 to n and create the pages for them
  Array.from({ length: pageCount }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? base : `${base}/${i + 1}`,
      component: path.resolve("./src/templates/blog.tsx"),
      // This data is pass to the template when we create it in the form of PageContext
      context: {
        skip: i * postsPerPage,
        currentPage: i + 1,
        postsPerPage,
        base,
      },
    });
  });

  // Figure out how many posts there are for each category and place them into an object
  const countCategories = categories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});
  // Create an array of each category
  const allCategories = Object.keys(countCategories);
  // Loop through each category
  allCategories.forEach((category, i) => {
    // Create new base URL
    const newBase = `${base}/${category}`;
    Array.from({
      length: Math.ceil(countCategories[category] / postsPerPage),
    }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? newBase : `${newBase}/${i + 1}`,
        component: path.resolve("./src/templates/blog.tsx"),
        context: {
          category,
          skip: i * postsPerPage,
          currentPage: i + 1,
          postsPerPage,
          base: newBase,
        },
      });
    });
  });
}

// Use Promise.all to prevent unrelated asynchronous operations from blocking each other
exports.createPages = async (params) => {
  await Promise.all([buildPosts(params)]);
};
