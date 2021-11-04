import {useRouter} from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import {getAllPostsWithSlug, getPostAndMorePosts} from "../../lib/api";
import PostTitle from "../../components/post-title";
import {CMS_NAME} from "../../lib/constants";

export default function Post({post, morePosts, preview}) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }
  var input;
  const pa = "Gi2Ckjb9yyYM";
  const pa2 = " Gi2Ckjb9yyYM";
  const authorized = false;

  if (typeof window !== "undefined") {
    input = prompt("Пожалуйста, введите пароль", " ");

    authorized = input === pa || input === pa2;
    if (!authorized) {
      alert("Неверный пароль :(");
    }
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback || authorized === false ? (
          <PostTitle> </PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | чилли продакшн</title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              <PostHeader title={post.title} coverImage={post.coverImage} />
              <PostBody content={post.content} video={post.video} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({params, preview = false}) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({slug}) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
