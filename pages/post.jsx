import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content for {router.query.title}</p>
    </Layout>
  );
}

// Add router to a component instead.
// const Content = () => {
//   const router = useRouter();
//   return (
//     <>
//       <h1>{router.query.title}</h1>
//       <p>This is the blog post content for {router.query.title}</p>
//     </>
//   );
// }

// const Page = () => (
//   <Layout>
//     <Content />
//   </Layout>
// );

export default Page;
