import Link from 'next/link';
import Header from '../components/Header';
// import Layout from '../components/Layout';
import withLayout from '../components/Layout-HOF';

// export default function Index() {
//   return (
//     <Layout>
//       <h1>Hello Next.js</h1>
//     </Layout>
//   );
// }

// Using Layout as a higher order component.
const Page = () => <p>Hello Next.js</p>;

export default withLayout(Page);
