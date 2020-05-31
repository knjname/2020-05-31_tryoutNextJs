import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const ListClassName = "text-white px-2";

    return (
      <Html>
        <Head />
        <body>
          <ul className="block flex px-4 py-2 bg-gray-800 sticky top-0 left-0">
            <li className={ListClassName}>
              <Link href="/">
                <a>Top</a>
              </Link>
            </li>
            <li className={ListClassName}>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
