import { onGetBlogPost } from "@/actions/landing";
import { CardDescription } from "@/components/ui/card";
import { getMonthName } from "@/lib/utils";
import parse from "html-react-parser";

type Props = { params: { id: string } };

const BlogPost = async ({ params }: Props) => {
  const {id} = await params
  const post = await onGetBlogPost( id);

  return (
    <div className="container flex justify-center my-10">
      <div className="lg:w-6/12 flex flex-col">
        <CardDescription>
          {post?.createdAt
            ? `${getMonthName(
                post.createdAt.getMonth()
              )} ${post.createdAt.getDate()} ${post.createdAt.getFullYear()}`
            : "Date not available"}
        </CardDescription>
        <h2 className="text-6xl font-bold">{post?.title}</h2>
        <div className="text-xl parsed-container flex flex-col mt-10 gap-10">
          {parse(post?.content)}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
