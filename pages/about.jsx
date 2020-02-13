import Header from '../components/Header';
// import Layout from '../components/Layout';
import withLayout from '../components/Layout-HOF';

// const About = () => (
//   <Layout>
//     <p>This is the about page</p>
//   </Layout>
// );

// Using layout as a higher order component.
const Page = () => <p>This is the about page</p>;

export default withLayout(Page);
