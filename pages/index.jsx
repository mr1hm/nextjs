import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
// import withLayout from '../components/Layout-HOF';

// Create Dynamic Pages
// const PostLink = props => (
//   <li>
//     <Link href={`post?title=${props.title}` as=""}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Basics of Next.js" />
//         <PostLink title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   );
// }

// Clean URLs with Dynamic Routing
// const PostLink = props => (
//   <li>
//     <Link href="/p/[id]" as={`/p/${props.id}`}>
//       <a>{props.id}</a>
//     </Link>
//   </li>
// );

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" />
//         <PostLink id="basics-of-nextjs" />
//         <PostLink id="deploy-nextjs" />
//       </ul>
//     </Layout>
//   );
// }

// export default function Index() {
//   return (
//     <Layout>
//       <h1>Hello Next.js</h1>
//     </Layout>
//   );
// }

// Using Layout as a higher order component.
// const Page = () => <p>Hello Next.js</p>;

// export default withLayout(Page);

// Fetching Data for Pages
// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link href="/p/[id]" as={`/p/${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async function () {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   // console.log(data);
//   console.log(`Show data fetched. Count: ${data.length}`); // This console log only shows in terminal because it's server-side rendered. It will show if you navigate to the home page since it's client-side navigation.

//   return { shows: data.map(entry => entry.show) }
// };

// export default Index;

// Check to see if it's client-side navigation by:
// - Use npm run build
// - Use npm start (gets production build going)
// - Look at network tab in console.
// - Click on a navigation link and see if you see any activity in the network tab.
// - Type "document" means that it's server-side navigation (if you see a bunch of javascript pages being loaded along with a "document" type when you visit the page, it's most likely client-side navigation)
// - If you don't see any activity while navigating in the network tab, it's client-side navigation.

// Client-side navigation means that the website's pages have already been downloaded when you first connected to the website and the browser is loading them upon clicking a link.


function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'basics-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
      </style>
    </Layout>
  );
}
