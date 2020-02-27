import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';

// const Post = () => {
//   const router = useRouter();

//   return (
//     <Layout>
//       <h1>{router.query.id}</h1>
//       <p>This is the blog post content with ID</p>
//     </Layout>
//   );
// }

// const Post = props => (
//   <Layout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//     {props.show.image ? <img src={props.show.image.medium} /> : null}
//   </Layout>
// );

// Post.getInitialProps = async function (context) {
//   const { id } = context.query;
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();

//   console.log(`Fetched show: ${show.name}`); // This console log shows only the browser because it's using client-side navigation.

//   return { show };
// }

// export default Post;

export default () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown
          source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
          `}
        />
      </div>
      <style jsx global>
        {`
        .markdown {
          font-family: 'Nunito', sans-serif;
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
        `}
      </style>
    </Layout>
  );
};
