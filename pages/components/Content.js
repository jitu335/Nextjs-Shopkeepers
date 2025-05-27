import Image from "next/image";

import React from "react";

export const Content = () => {
  return <div className="w-full h-full min-h-screen overflow-x-hidden bg-white text-black dark:bg-gray-900 dark:text-white">
  Content..........
  
  <p>Click on your profile photo or name.

Scroll down to the "Activity" section:

Click “See all activity” and then "Posts" to view all your recent posts.

Find the photo post you're interested in:

Under the post, you may see a line like:
"X impressions" or "X views of your post" — this is the number of times your post was seen in people’s feeds.</p>

<p>
  📌 Important Notes:
If the post is very recent or didn’t reach many people, analytics might not appear.

LinkedIn doesn’t show who exactly viewed your photo post — just anonymous data like job roles, companies, and location.

If it’s a video post, you get richer analytics like exact view counts and watch duration.
</p>
  </div>;
};
