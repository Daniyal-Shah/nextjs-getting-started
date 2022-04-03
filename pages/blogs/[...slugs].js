import React from "react";
import { useRouter } from "next/router";

function BlogsPostPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>BLogs Page</h1>
    </div>
  );
}

export default BlogsPostPage;
