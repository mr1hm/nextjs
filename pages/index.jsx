import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/Layout';
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
const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="basics-of-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </Layout>
  );
}

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
