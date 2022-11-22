# @krist7599555/social-share

centralize social share

```typescript
interface FacebookShareParams {
  hashtag?: `#${string}` | Exclude<string, `#${string}`>;
  display?: "popup" | "page";
  app_id: string;
  href?: `https://${string}` | string;
  quote?: string;
}
/**
 * Facebook Share URL
 * @see {@link https://developers.facebook.com/docs/sharing/reference/share-dialog}
 */
export function facebook_share_url(info: FacebookShareParams): URL;

interface TwitterShareParams {
  text?: string;
  url?: string;
  hashtags?: string; // mrrk,ks,lm (with out #)
  via?: string; // user name without @ (append text with `via @username`) for author use
}

/**
 * Tweetwe Share URL
 * @see Docs {@link developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview}
 * @see Example1 {@link https://twitter.com/intent/tweet?text=lorem&url=https%3A%2F%2Fgoogle.com&hashtags=ht1,ht2,ht3&via=krist7599555}
 * @see Example2 {@link https://twitter.com/intent/tweet?text=lorem&url=howareyoupatani.com&hashtags=ht1,ht2,ht3&via=krist7599555}
 */
export function twitter_shared_url(info: TwitterShareParams): URL;

/**
 * Line Send Message URL
 * @see {@link https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#available-line-url-schemes}
 * @see {@link https://developers.line.biz/en/docs/line-login/using-line-url-scheme/#sending-text-messages}
 */
export function line_send_message_url(text: string): URL;

/**
 * Copy to Clipboard
 */
export async function copy_to_clipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

/**
 * Web Share API
 */
export async function web_share_api(data: ShareData): Promise<void> {
  await navigator.share(data);
}

export * from "./utils";
```
