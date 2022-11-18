/**
 * just create <a> element with set attributes
 * @pure
 */
export function create_anchor_element<
  T extends {
    [key in keyof HTMLAnchorElement as HTMLAnchorElement[key] extends string
      ? key
      : never]?: HTMLAnchorElement[key];
  }
>(opt: T) {
  const anchor = document.createElement("a");
  Object.assign(anchor, {
    target: "_blank",
    ...opt,
  });
  return anchor;
}

/**
 * Set URL searchParam
 * @pure
 */
export function set_search_params(
  url: URL,
  search_params: Record<string, any>
) {
  const url2 = new URL(url);
  for (const [k, v] of Object.entries(search_params)) {
    url2.searchParams.set(k, v);
  }
  return url2;
}
