[查看中文版本 (View in Chinese)](README_zh-CN.md)

# Personal Blog

This is a personal blog website. It contains blog posts on various topics, organized by date.

## Project Structure

- `1/`: Contains an `index.html` file, purpose unclear from structure alone.
- `2025/`: Contains blog posts organized by year, month, and day. For example, `2025/02/11/hello-world/index.html`.
- `archives/`: Contains archives of blog posts, likely generated.
- `categories/`: Contains category pages for blog posts (e.g., `categories/技术/index.html`).
- `css/`: Contains CSS files for styling the website (`custom.css`, `index.css`, `style.css`, `var.css`).
- `fancybox/`: Contains assets for Fancybox, a lightbox JavaScript library.
- `images/`: Contains images used in blog posts and site design.
- `img/`: Contains general site images, favicons, and potentially some media files for posts.
- `js/`: Contains JavaScript files for website functionality (`main.js`, `script.js`, etc.) and libraries (jQuery).
- `tags/`: Contains tag pages for blog posts (e.g., `tags/文件传输/index.html`).
- `index.html`: The main landing page of the blog.
- `sitemap.txt`, `sitemap.xml`: Sitemaps for search engine indexing.
- `google838506fb3e8f3cf1.html`: Google site verification file.

## How to View the Blog

This is a static website. To view the blog:

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.

Alternatively, if hosted, you can access it via its URL.

## Creating New Posts

While the exact method for generating posts isn't specified (e.g., using a static site generator like Hexo or Jekyll), you can manually create new posts by following these steps:

1.  **Create a new directory structure** for your post under the root directory, following the pattern `YYYY/MM/DD/your-post-title/`. For example, for a post titled "My New Adventure" created on March 15, 2024, you would create `2024/03/15/my-new-adventure/`.
2.  **Create an `index.html` file** inside this new directory (e.g., `2024/03/15/my-new-adventure/index.html`).
3.  **Write your blog post content** in this `index.html` file. You can use the existing posts as a template for the HTML structure.
4.  **Update Archives, Categories, and Tags (Potentially Manual):**
    *   You may need to manually update the relevant `index.html` files in the `archives/`, `categories/`, and `tags/` directories to include a link to your new post. Examine how existing posts are linked in these files to understand the required format.
    *   If a static site generator is used, these pages might be updated automatically when the site is rebuilt.

**Note:** If this blog is managed by a static site generator, refer to its documentation for the correct way to create new content. The above steps describe a manual approach based on the observed file structure.

## Customizing the Blog

You can customize the appearance and functionality of the blog:

-   **Styling:** Modify the CSS files in the `css/` directory (e.g., `custom.css`, `style.css`) to change the visual appearance of the blog.
-   **Functionality:** If you need to change or add JavaScript-based features, you can edit the files in the `js/` directory.
-   **Images & Media:** Replace or add images in the `images/` and `img/` directories.
